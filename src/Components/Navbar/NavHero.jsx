import { useEffect } from "react";
import { Link } from "react-router-dom";
import SK_LOGO from "../../assets/Images/SK_Logo_No_BG_White.png"
import NavLink from "./NavLink"
import DarkMode from './Darkmode';

const NavHero = () => {

    useEffect(() => {
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
    
        window.addEventListener('scroll', handleScroll);
        const hero_mobile_toggle = document.querySelector('.hero_mobile_toggle');
        if (hero_mobile_toggle) {
            hero_mobile_toggle.addEventListener('click', handleMobileToggle);
        }
    
        const hero_links = document.querySelectorAll('.hero_section li a');
        hero_links.forEach(anchor => {
            anchor.addEventListener('click', handleCloseNav);
        });
    
        const drawerLinkDark = document.querySelectorAll('.darkmode_input');
        drawerLinkDark.forEach(input => {
            input.addEventListener('click', () => {
                setTimeout(() => {
                    handleCloseNav();
                }, 750);
            });
        });
    
        return () => {
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
            <div className="hero_section">
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
                            <li><NavLink href={"/"} text={ "Home "} /></li>
                            <li><NavLink href={"/location"} text={ "Hours And Location "} /></li>
                            <li><NavLink href={"/menu"} text={ "View Menu "} /></li>
                            <li><NavLink href={"/#"} text={ "Order Online "} /></li>
                            <li className='darkmode_input'><DarkMode /></li>
                        </ul>
                    </nav>
                    {/* END Nav Links */}
                </div>
            </div>
        </>
    );
};

export default NavHero;