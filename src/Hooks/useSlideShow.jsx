// Import React Magic
import { useState, useEffect } from "react";

const useSlideshow = (totalDots, intervalTime) => {

    // State
    const [currentDot, setCurrentDot] = useState(1);

    // Set up an interval timer for automatic slideshow progression
    useEffect(() => {
        // Set an interval that updates the current dot based on intervalTime
        const interval = setInterval(() => {
            // Update the current dot; if it exceeds totalDots, loop back to 1
            setCurrentDot((prev) => (prev % totalDots) + 1);
        }, intervalTime);

    // Clear the interval when the component unmounts or dependencies change
    return () => clearInterval(interval);
    // Effect depends on totalDots and intervalTime
    }, [totalDots, intervalTime]);

    // Return the current dot location
    return currentDot;
};

export default useSlideshow;