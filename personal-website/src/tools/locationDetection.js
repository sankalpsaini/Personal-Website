function locationDetection() {
  const path = window.location.pathname;

  if (path === '/') {
    // You're on the home page
    return "home";
  } else if (path === '/compiler') {
    // You're on the about page
    return "compiler";
  } else {
    // You're on some other page
    return "Something Completely Different";
  }
}

export default locationDetection;