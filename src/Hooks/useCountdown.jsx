// Import React Magic
import { useEffect, useState } from "react";

const useCountdown = (initialTime, onComplete) => {

    // State to track the time left in milliseconds
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
        // Check if the countdown has reached zero or below
        if (timeLeft <= 0) {
            // Call the onComplete callback if the countdown is finished
            onComplete();
            // Exit early since the countdown is complete
            return;
        }

        // Set up an interval to decrement the time left every second (1000ms)
        const timerId = setInterval(() => {
            // Decrease the time left by 1000ms
            setTimeLeft(prevTime => prevTime - 1000);
        }, 1000);

        // Cleanup function to clear the interval when the component unmounts or timeLeft changes
        return () => clearInterval(timerId);
        // Dependencies: run effect when timeLeft or onComplete changes
    }, [timeLeft, onComplete]);

    // Return the time left for use in component
    return timeLeft;
};

export default useCountdown;
