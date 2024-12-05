// Import React Magic
import { useEffect } from "react";

const useIntersectionObserver = (elements, options) => {
    useEffect(() => {
        // Check if there are any elements to observe; exit early if none are provided
        if (!elements || elements.length === 0) return;

        // Create a new IntersectionObserver instance
        const observer = new IntersectionObserver(entries => {
            // Iterate over each entry (element being observed)
            entries.forEach(entry => {
                // Toggle the "show" class based on whether the element is intersecting the viewport
                entry.target.classList.toggle("show", entry.isIntersecting);
                
                // If the element is intersecting, unobserve it to prevent further notifications
                // This keeps it on the screen; removing this will cause it to fade out when not in view
                if (entry.isIntersecting) observer.unobserve(entry.target);
            });
        }, options); 

        // Observe each element provided in the elements array
        elements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup function to unobserve all elements when the component unmounts
        return () => {
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
        // Dependency array to re-run effect if elements or options change
    }, [elements, options]);
};

export default useIntersectionObserver;
