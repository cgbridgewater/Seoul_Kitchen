import { useEffect } from "react";

const useFooter = () => {

    useEffect(() => {
        // Determine if the user has scrolled near the bottom of the page.
        const handleScrollToBottom = () => {
            // Selects the footer element from the DOM.
            const footer = document.querySelector('.footer');
            // Calculates the total scrollable height of the document 
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            // Gets the current vertical scroll position of the window.
            const scrollY = window.scrollY;
            
            // Checks if the user has scrolled to within 1.5 pixels of the bottom.
            if ((scrollableHeight - 1.5) <= scrollY) {
                // If so, adds the 'footer_border' class to the footer.
                footer.classList.add('footer_border');
            // Otherwise, removes the class.
            } else {
                footer.classList.remove('footer_border');
            }
        };

        // Adds an event listener for scroll events and triggers the handleScrollToBottom function.
        window.addEventListener('scroll', handleScrollToBottom);

        // Cleanup function to remove the scroll event listener to prevent memory leaks.
        return () => {
            window.removeEventListener('scroll', handleScrollToBottom);
        };
    }, []);
};

export default useFooter;