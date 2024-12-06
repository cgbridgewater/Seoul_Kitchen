// Import React Magic
import React from "react";

// Import Custom Hook
import useSlideshow from "../Hooks/useSlideShow";

const Slideshow = () => {

  // Set hook variables
  const totalDots = 6;
  const intervalTime = 3000;

  // Call Hook
  const currentDot = useSlideshow(totalDots, intervalTime);

  return (
    <>
      {/* SlideShow Images -- Images are in CSS as Backgrounds */}
      <ul className="slideshow">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>
      {/* SlideShow Dots */}
      <ul className="dots">
        {Array.from({ length: totalDots }, (_, index) => (
          <li key={index} className={currentDot === index + 1 ? "dot_active" : "dot"}></li>
        ))}
      </ul>
    </>
  );
};

export default Slideshow;
