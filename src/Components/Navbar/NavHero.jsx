import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SK_LOGO from "../../assets/Images/SK_Logo_No_BG_White.png"
import NavLink from "./NavLink"

const NavHero = () => {

    const navHeaderRef = useRef(null);

    useEffect(() => {

        // section 1 - Add remove sticky class on scroll based on window position
        const handleScroll = () => {
            const hero_section = document.querySelector('.hero_section');
            if (hero_section) {
                if (window.scrollY > 5) {
                    hero_section.classList.remove('open_nav');
                } else {
                    hero_section.classList.remove('open_nav');
                }
            }
        };

            // section 2 - Closes Mobile Hamburger when clicked outside of navbar
            const handleClickOutside = (event) => {
                if (navHeaderRef.current && !navHeaderRef.current.contains(event.target)) {
                    const hero_section = document.querySelector('.hero_section');
                    hero_section.classList.remove('open_nav');
                }
            };
            document.addEventListener('mousedown', handleClickOutside);

        // section 3 - Opens Mobile Hamburger
        const handleMobileToggle = () => {
            const hero_section = document.querySelector('.hero_section');
            if (hero_section) {
                if (hero_section.classList.contains('open_nav')) {
                    hero_section.classList.remove('open_nav');
                } else {
                    hero_section.classList.add('open_nav');
                }
            }
        };

        // section 4 - Closes the nav on page change
        const handleCloseNav = () => {
            const hero_section = document.querySelector('.hero_section');
            const navigation = document.querySelector('.navigation');
            if (hero_section && navigation) {
                if (hero_section.classList.contains('open_nav')) {
                    navigation.classList.remove('open_nav');
                    hero_section.classList.remove('open_nav');
                }
            }
        };

        // section 5 - closes the mobile menu on click
        window.addEventListener('scroll', handleScroll);
        const hero_mobile_toggle = document.querySelector('.hero_mobile_toggle');
        if (hero_mobile_toggle) {
            hero_mobile_toggle.addEventListener('click', handleMobileToggle);
        }
        const hero_links = document.querySelectorAll('.hero_section li a');
        hero_links.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });

        // section 6 - closes the mobile menu on dark mode theme change
        const drawerLinkDark = document.querySelectorAll('.darkmode_input');
        drawerLinkDark.forEach(input => {
            input.addEventListener('click', () => {
                setTimeout(() => {
                    handleCloseNav();
                }, 750);
            });
        });

        // section 7 - closes all event listeners
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            window.removeEventListener('scroll', handleScroll);
            if (hero_mobile_toggle) {
                hero_mobile_toggle.removeEventListener('click', handleMobileToggle);
            }
            hero_links.forEach(anchor => {
                anchor.removeEventListener('click', handleCloseNav);
            });
            drawerLinkDark.forEach(input => {
                input.removeEventListener('click', () => {
                    setTimeout(() => {
                        handleCloseNav();
                    }, 750);
                });
            });
        };
    }, []);

    return(
        <>
            {/* Initial Title (Leaves on Scroll) */}
            <div ref={navHeaderRef} className="hero_section">
                <div className="nav_row">
                    {/* NavBar Title */}
                        <Link className="hero_logo" to="/"><img src={ SK_LOGO } alt="Seoul Kitchen Logo" /></Link>
                    {/* END NavBar Title */}
                    {/* Hamburger */}
                    <div className="hero_mobile_toggle">
                        <label htmlFor="hamburger" id="hamburger"><span className="visually-hidden">Empty Link</span></label>
                    </div>
                    {/* END Hamburger */}
                    {/* Nav Links */}
                    <nav className="navigation">
                        <ul>
                            {/* <li><NavLink href={"/"} text={ "Home "} /></li> */}
                            <li><NavLink href={"/location"} text={ "Hours And Location "} /></li>
                            <li><NavLink href={"/menu"} text={ "View Menu "} /></li>
                            <li><NavLink href={"/#disabled"} text={ "Order Online "} /></li>
                        </ul>
                    </nav>
                    {/* END Nav Links */}
                </div>
            </div>
        </>
    );
};

export default NavHero;