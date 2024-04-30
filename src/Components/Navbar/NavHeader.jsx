import { useEffect } from "react";
import { Link } from "react-router-dom";
import SK_LOGO from "../../assets/Images/SK_Logo_No_BG.png"
import NavLink from "./NavLink"
import DarkMode from './Darkmode';

const NavHeader = () => {

    useEffect(() => {
        // section 1 - Add remove sticky class on scroll based on window position
        const handleScroll = () => {
            if (window.scrollY > 80) {
                document.querySelector('.nav_header').classList.add('sticky');
            } else {
                document.querySelector('.nav_header').classList.remove('sticky');
            }
        };
        // section 2 - Opens Mobile Hamburger
        const handleMobileToggle = () => {
            const nav_header = document.querySelector('.nav_header');
            if (nav_header.classList.contains('open_nav')) {
                nav_header.classList.remove('open_nav');
            } else {
                nav_header.classList.add('open_nav');
            }
        };
        // section 3 - Closes the nav on page change
        const handleCloseNav = () => {
            const nav_header = document.querySelector('.nav_header');
            const navigation = document.querySelector('.navigation');
            if (nav_header.classList.contains('open_nav')) {
                navigation.classList.remove('open_nav');
                nav_header.classList.remove('open_nav');
            }
        };

        // section 4 - closes the mobile menu on click
        window.addEventListener('scroll', handleScroll);
        document.querySelector('.mobile_toggle').addEventListener('click', handleMobileToggle);
        document.querySelectorAll('.nav_header li a').forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });

        // section 5 - closes the mobile menu on dark mode theme change
        const drawerLinkDark = document.querySelectorAll('.darkmode_input');
        drawerLinkDark.forEach(input => { 
            input.addEventListener('click', () => { 
                setTimeout(() => {
                    handleCloseNav()
                }, 750);
            });
        });

        // section 6 - closes all event listeners
        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.querySelector('.mobile_toggle').removeEventListener('click', handleMobileToggle);
            document.querySelectorAll('.nav_header li a').forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
            const drawerLinkDark = document.querySelectorAll('.darkmode_input');
            drawerLinkDark.forEach(input => { 
                input.removeEventListener('click', () => { 
                    setTimeout(() => {
                        handleCloseNav()
                    }, 750);
                });
            });
        };
    }, []);


    return(
        <>
            {/* NAV BAR (Appears on Scroll) */}
            <header className="nav_header">
                <div className="nav_row">
                    {/* NavBar Title */}
                        <Link className="logo" to="/"><img src={ SK_LOGO } alt="Seoul Kitchen Logo" /></Link>
                    {/* END NavBar Title */}
                    {/* Hamburger */}
                    <div className="mobile_toggle">
                        <label htmlFor="hamburger" id="hamburger"><span className="visually-hidden">Empty Link</span></label>
                    </div>
                    {/* END Hamburger */}
                    {/* Nav Links */}
                    <nav className="navigation">
                        <ul>
                            <li><NavLink href={"/"} text={ "Home "} /></li>
                            <li><NavLink href={"/location"} text={ "Hours And Location "} /></li>
                            <li><NavLink href={"/menu"} text={ "View Menu "} /></li>
                            <li><NavLink href={"/#"} text={ "Order Online "} /></li>
                            <li className='darkmode_input'><DarkMode /></li>
                        </ul>
                    </nav>
                    {/* END Nav Links */}
                </div>
            </header>
        </>
    );
};

export default NavHeader;