import { useEffect, useRef } from 'react';

const useNavbar = () => {
    // create ref
    const navHeaderRef = useRef(null);

    useEffect(() => {
        // section 1 - Add/Remove sticky class on scroll based actions position
        const handleScroll = () => {
            const nav_header = document.querySelector('.nav_header');
            // Add 'sticky' class if scrolled down more than 1 pixel
            if (window.scrollY > 1) {
                nav_header.classList.add('sticky');
            } else {
                nav_header.classList.remove('sticky');
            }
            // If page is scrolled when nav is open, close the nav
            if (nav_header && window.scrollY > 5) {
                nav_header.classList.remove('open_nav');
            }
        };

        // section 2 - Closes Mobile Hamburger when clicked outside of mobile navbar 
        const handleClickOutside = (event) => {
            if (navHeaderRef.current && !navHeaderRef.current.contains(event.target)) {
                const nav_header = document.querySelector('.nav_header');
                nav_header.classList.remove('open_nav');
            }
        };

        // section 3 - Opens Mobile Hamburger on click of the hamburger
        const handleMobileToggle = () => {
            const nav_header = document.querySelector('.nav_header');
            if (nav_header) {
                nav_header.classList.toggle('open_nav');
            }
        };

        // section 4 - Closes the nav on page change
        const handleCloseNav = () => {
            const nav_header = document.querySelector('.nav_header');
            const navigation = document.querySelector('.navigation');
            // If nav is open, close it
            if (nav_header.classList.contains('open_nav')) {
                navigation.classList.remove('open_nav');
                nav_header.classList.remove('open_nav');
            }
        };

        // section 5 - Add event listeners
        // Add event listener for clicks outside the navbar
        document.addEventListener('mousedown', handleClickOutside);
        // Add event listener for scroll events
        window.addEventListener('scroll', handleScroll);
        // Add event listener for mobile toggle button
        document.querySelector('.mobile_toggle').addEventListener('click', handleMobileToggle);
        
        // Handle nav link clicks to close the nav
        const nav_links = document.querySelectorAll('.nav_header li a');
        nav_links.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });

        // Handle logo clicks to close the nav
        const logo_link = document.querySelectorAll('.logo');
        logo_link.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });

        // section 6 - Clean up event listeners to prevent memory leak
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.mobile_toggle').removeEventListener('click', handleMobileToggle);
            nav_links.forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
            logo_link.forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
        };
    }, [navHeaderRef]);

    // return ref to attach
    return { navHeaderRef };
};

export default useNavbar;