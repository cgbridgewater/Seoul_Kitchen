// Import React Magic
import { useEffect } from "react";
import { Link } from "react-router-dom";

// Import Subcomponents
import FooterLink_atag from "./FooterLink_atag";
import FooterLink from "./FooterLink";

// Import Images
import SK_LOGO from "../../assets/Images/SoulFoodLogoWhite.png"
import Vet_Owned from "../../assets/Images/vet_owned.png"

// Import Icons
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

// Import Custom Hooks
import useFooter from "../../Hooks/useFooter";

const Footer = ({ handleOpenModal }) => {
    useFooter(); // Using the custom hook

    return (
        <footer className="footer">
            {/* LEFT SIDE OF FOOTER */}
            {/* Links In Footer */}
            <div className="footer_links">
                {/* Column 1 */}
                <div className="footer_link_column bee_dev">
                    <p>
                        Website Built By:
                        <br />
                        <FooterLink_atag href="https://beedev-services.com/" text="BEEDEV-SERVICES"/>
                    </p>
                    <span className="footer_spacer"></span> 
                    <p>
                        Powered By:
                        <br />
                        <FooterLink_atag href="https://techbyte-learning.com/" text="TechByte Learning"/>
                    </p>
                </div>
                {/* Column 2 */}
                <div className="footer_link_column">
                    <FooterLink href="/location" text="Hours & Location"/>
                    <FooterLink href="/aboutus" text="About Us" />
                    <FooterLink href="/menu" text="Menu"/>
                    <FooterLink href="#" text="Order Online" handleOpenModal={handleOpenModal}/>
                    {/* Footer Socials */}
                    <div className="footer_socials">
                        {/* Facebook */}
                        <FaInstagramSquare />
                        {/* Instagram */}
                        <FaFacebookSquare />
                        {/* Twitter / X */}
                        <FaSquareXTwitter />
                    </div>
                </div>
            </div>
            {/* RIGHT SIDE OF FOOTER */}
            {/* Footer Owner Badges */}
            <div className="footer_images">
                <Link to="/"><img className="footer_image_one" src={ SK_LOGO } alt="Seoul Kitchen Logo" /></Link>
                <img className="footer_image_two" src={ Vet_Owned } alt="Seoul Kitchen Logo" />
            </div>
        </footer>
    )
};

export default Footer;