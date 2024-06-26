import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SK_LOGO from "../../assets/Images/SK_Logo_No_BG_White.png"
import NavLink from "./NavLink"

const NavHeader = () => {

    const navHeaderRef = useRef(null);

    useEffect(() => {

        // section 1 - Add/Remove sticky class on scroll based actions position
        const handleScroll = () => {
            // activates the header to replace the NavHero header
            const nav_header = document.querySelector('.nav_header');
            if (window.scrollY > 16) {
                nav_header.classList.add('sticky');
            } else {
                nav_header.classList.remove('sticky');
            }

            // if page is scrolled when nav is open it will close the nav
            if (nav_header) {
                if (window.scrollY > 5) {
                    nav_header.classList.remove('open_nav');
                }
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
            if (nav_header.classList.contains('open_nav')) {
                navigation.classList.remove('open_nav');
                nav_header.classList.remove('open_nav');
            }
            if (nav_header.classList.contains('open_nav')) {
                nav_header.classList.remove('open_nav');
            }
        };


        // section 5 - closes the mobile menu on click
        // triggers close from clicking outside menu
        document.addEventListener('mousedown', handleClickOutside);
        // triggers close from  page scroll
        window.addEventListener('scroll', handleScroll);
        // triggers close from clicking hamburger
        document.querySelector('.mobile_toggle').addEventListener('click', handleMobileToggle);
        // triggers close from  menu link click
        const nav_links = document.querySelectorAll('.nav_header li a');
        nav_links.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });
        // triggers close from on site logo click
        const logo_link = document.querySelectorAll('.logo');
        logo_link.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });


        // section 6 - closes all event listeners to prevent memory leak
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

    }, []);

    return(
        <>
            {/* NAV BAR (Appears on Scroll) */}
            <header ref={navHeaderRef} className="nav_header">
                <div className="nav_row">
                    {/* NavBar Title */}
                    <Link className="logo" to="/"><img src={ SK_LOGO } alt="Seoul Kitchen Logo" /></Link>                    {/* END NavBar Title */}
                    {/* Hamburger */}
                    <div className="mobile_toggle">
                        <label htmlFor="hamburger" id="hamburger"><span className="visually-hidden">Empty Link</span></label>
                    </div>
                    {/* END Hamburger */}
                    {/* Nav Links */}
                    <nav className="navigation">
                        <ul>
                            {/* <li><NavLink href={"/"} text={ "Home "} /></li> */}
                            <li><NavLink href={"/location"} text={ "Hours And Location"}/></li>
                            <li><NavLink href={"/menu"} text={ "View Menu"}/></li>
                            <li><NavLink href={"#disabled"} text={ "Order Online"}/></li>
                        </ul>
                    </nav>
                    {/* END Nav Links */}
                </div>
            </header>
        </>
    );
};

export default NavHeader;