#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const DATA_FILE = path.join(__dirname, '..', 'src', 'data.js');
const PHOTO_DIR = path.join(__dirname, '..', 'public', 'photography');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  try {
    console.log('📸 Add a new photo to your photography gallery\n');

    // Read data.js to find which images are already added
    let dataContent = fs.readFileSync(DATA_FILE, 'utf8');
    const existingImages = new Set();
    
    // Extract all image paths from the photography array
    const imageRegex = /image:\s*"\/photography\/([^"]+)"/g;
    let match;
    while ((match = imageRegex.exec(dataContent)) !== null) {
      existingImages.add(match[1]);
    }

    // Scan photography folder for image files
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];
    let availableImages = [];
    
    if (fs.existsSync(PHOTO_DIR)) {
      const files = fs.readdirSync(PHOTO_DIR);
      availableImages = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return imageExtensions.includes(ext);
      });
    }

    // Find new images (not yet in data.js)
    const newImages = availableImages.filter(img => !existingImages.has(img));
    const existingButInFolder = availableImages.filter(img => existingImages.has(img));

    let filename;

    if (newImages.length > 0) {
      // Show new images and let user select
      console.log('✨ Found new images not yet in your gallery:\n');
      newImages.forEach((img, index) => {
        console.log(`  ${index + 1}. ${img}`);
      });
      console.log();
      
      if (existingButInFolder.length > 0) {
        console.log('ℹ️  Note: You can also manually enter a filename if needed.\n');
      }

      const selection = await question(`Select an image (1-${newImages.length}) or enter filename manually: `);
      const selectionNum = parseInt(selection);
      
      if (!isNaN(selectionNum) && selectionNum >= 1 && selectionNum <= newImages.length) {
        filename = newImages[selectionNum - 1];
      } else {
        filename = selection.trim();
      }
    } else {
      // No new images found, prompt for filename
      if (availableImages.length > 0) {
        console.log('ℹ️  All images in the photography folder are already in your gallery.');
        console.log('   You can still add a new image by entering its filename.\n');
      } else {
        console.log('ℹ️  No images found in the photography folder.');
        console.log('   Please add your image file to public/photography/ first.\n');
      }
      
      filename = await question('Enter the image filename (e.g., my-photo.jpeg): ');
    }

    if (!filename) {
      console.log('❌ Filename is required');
      rl.close();
      return;
    }

    // Check if file exists
    const filePath = path.join(PHOTO_DIR, filename);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  Warning: ${filePath} does not exist. Make sure to add the image file first.`);
      const continueAnyway = await question('Continue anyway? (y/n): ');
      if (continueAnyway.toLowerCase() !== 'y') {
        rl.close();
        return;
      }
    }

    // Get metadata
    const title = await question('Enter the photo title: ');
    const location = await question('Enter the location (e.g., London, UK): ');
    const date = await question('Enter the date (e.g., October 2025): ');

    if (!title || !location || !date) {
      console.log('❌ Title, location, and date are all required');
      rl.close();
      return;
    }

    // Read data.js (we already read it above, but make sure we have the latest)
    dataContent = fs.readFileSync(DATA_FILE, 'utf8');

    // Create the new entry
    const imagePath = `/photography/${filename}`;
    const newEntry = `  {
    title: "${title}",
    image: "${imagePath}",
    location: "${location}",
    date: "${date}",
  },`;

    // Find the photography array by searching for its export statement
    const photographyStart = dataContent.indexOf('export const photography = [');
    if (photographyStart === -1) {
      console.log('❌ Could not find photography array in data.js');
      rl.close();
      return;
    }

    // Find the matching closing bracket for the photography array
    let bracketCount = 0;
    let arrayEndIndex = -1;
    
    for (let i = photographyStart; i < dataContent.length; i++) {
      if (dataContent[i] === '[') {
        bracketCount++;
      } else if (dataContent[i] === ']') {
        bracketCount--;
        if (bracketCount === 0) {
          arrayEndIndex = i;
          break;
        }
      }
    }

    if (arrayEndIndex === -1) {
      console.log('❌ Could not find end of photography array');
      rl.close();
      return;
    }

    // Insert the new entry before the closing bracket
    const beforeInsert = dataContent.substring(0, arrayEndIndex);
    const afterInsert = dataContent.substring(arrayEndIndex);
    
    // Format: add newline and indent to match existing format
    const newContent = beforeInsert + '\n' + newEntry + afterInsert;

    // Write back to file
    fs.writeFileSync(DATA_FILE, newContent, 'utf8');

    console.log('\n✅ Photo added successfully!');
    console.log(`\n📋 Entry added:`);
    console.log(`   Title: ${title}`);
    console.log(`   Location: ${location}`);
    console.log(`   Date: ${date}`);
    console.log(`   Image: ${imagePath}`);
    console.log('\n💡 Don\'t forget to add the image file to public/photography/ if you haven\'t already!');

  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

main();
