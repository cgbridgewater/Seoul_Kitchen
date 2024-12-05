import { useEffect, useState } from 'react';

const useShake = () => {

    // State For isShaking
    const [isShaking, setIsShaking] = useState(false);

    // Use Effect and Function for card shake
    useEffect(() => {
        let scrollTimeout;
        const handleScroll = () => {
            if (window.scrollY > 40) {
                // Trigger Ternary to add .shaking class
                setIsShaking(true);
                // Reset timeout every time scrolling occurs
                clearTimeout(scrollTimeout);
                // Remove the shake class after 0.25s of no scrolling
                scrollTimeout = setTimeout(() => {
                    setIsShaking(false);
                }, 250);
            }
        };

        // Add scroll event listener
        window.addEventListener("scroll", handleScroll);
        
        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Send shake status
    return { isShaking };
};

export default useShake;