import { useRef } from "react";

function ScreenDetection() {
    const windowWidth = useRef(window.innerWidth);
    // const windowHeight = useRef(window.innerHeight);

    console.log('width: ', windowWidth.current);
    // console.log('height: ', windowWidth.current);
    
    const isMobile = windowWidth.current <= 768;

    return isMobile
}
  
export default ScreenDetection;