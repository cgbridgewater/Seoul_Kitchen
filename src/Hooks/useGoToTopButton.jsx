// Import React Magic
import { useState, useEffect } from 'react';

const useGoToTopButton = () => {
    // States
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Handler function that determines the visibility of the button based on scroll position.
        const handleScroll = () => {
            // Show the button if the user has scrolled more than 250 pixels from the top.
            setIsVisible(window.scrollY > 250);
        };

        // Attach the scroll event listener to the window object.
        window.addEventListener("scroll", handleScroll);
        
        // Cleanup function to remove the event listener when the component unmounts.
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Return the current visibility state of the "Go to Top" button.
    return isVisible;
};

export default useGoToTopButton;