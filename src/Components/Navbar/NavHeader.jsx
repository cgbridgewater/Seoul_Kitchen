// Import React Magic
import { Link } from "react-router-dom";

// Import Subcomponents
import NavLink from "./NavLink";

// Import Images
import SK_LOGO from "../../assets/Images/SoulFoodLogoWhite.png";

// Import Custom Hooks
import useNavbar from "../../Hooks/useNavbar";

const NavHeader = ({ handleOpenModal }) => {

    // Deconstruct the custom hook
    const { navHeaderRef } = useNavbar();

    return (
        <>
            {/* NAV BAR */}
            <header ref={navHeaderRef} className="nav_header">
                <div className="nav_row">
                    {/* NavBar Title */}
                    <Link className="logo" to="/"><img src={SK_LOGO} alt="Seoul Kitchen Logo" /></Link>
                    {/* Hamburger */}
                    <div className="mobile_toggle">
                        <label htmlFor="hamburger" id="hamburger"><span className="visually-hidden">Empty Link</span></label>
                    </div>
                    {/* Nav Links */}
                    <nav className="navigation">
                        <ul>
                            <li><NavLink href={"/location"} text={"Hours And Location"} /></li>
                            <li><NavLink href={"/aboutus"} text={"About Us"} /></li>
                            <li><NavLink href={"/menu"} text={"View Menu"} /></li>
                            <li><NavLink href={"#"} text={"Order Online"} handleOpenModal={handleOpenModal} /></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default NavHeader;