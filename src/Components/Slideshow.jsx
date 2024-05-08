import { useState, useEffect } from "react";

const Slideshow = () => {
  const [currentDot, setCurrentDot] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDot((prev) => (prev % 6) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ul className="slideshow">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
          <ul className="dots">
            <li className={currentDot === 1 ? "dot_active" : "dot"}></li>
            <li className={currentDot === 2 ? "dot_active" : "dot"}></li>
            <li className={currentDot === 3 ? "dot_active" : "dot"}></li>
            <li className={currentDot === 4 ? "dot_active" : "dot"}></li>
            <li className={currentDot === 5 ? "dot_active" : "dot"}></li>
            <li className={currentDot === 6 ? "dot_active" : "dot"}></li>
          </ul>
      </ul>
    </>
  );
};

export default Slideshow;
