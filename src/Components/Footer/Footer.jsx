import { useEffect } from "react";
import FooterLink_atag from "./FooterLink_atag";
import FooterLink from "./FooterLink";
import SK_LOGO from "../../assets/Images/SoulFoodLogoWhite.png"
import Vet_Owned from "../../assets/Images/vet_owned.png"
import { Link } from "react-router-dom";
import { IoCall } from "react-icons/io5";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";



const Footer = ({handleOpenModal}) => {

    useEffect(() => {
        // section 1 - Add remove footer_border class on scroll based on window position
        const handleScrollToBottom = () => {
            const footer = document.querySelector('.footer');
            const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollY = window.scrollY;

            if ((scrollableHeight-1.5) <= scrollY) {
                footer.classList.add('footer_border');
            } else {
                footer.classList.remove('footer_border');
            }
        };
        

        // section 2 - listen for scroll
        window.addEventListener('scroll', handleScrollToBottom);

        // section 3 - closes event listener
        return () => {
            window.removeEventListener('scroll', handleScrollToBottom);
        };

    }, []);


    return (
        <footer className="footer">
            {/* LEFT SIDE OF FOOTER */}
            {/* Links In Footer */}
            <div className="footer_links">
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
                <div className="footer_link_column">
                    <FooterLink href="/location" text="Hours & Location"/>
                    <FooterLink href="/aboutus" text="About Us" />
                    <FooterLink href="/menu" text="Menu"/>
                    <FooterLink href="#" text="Order Online" handleOpenModal={handleOpenModal}/>
                    {/* Footer Socials */}
                    <div className="footer_socials">
                        {/* Facebook */}
                        <Link to="#coming-soon">
                            <FaInstagramSquare />
                        </Link>
                        {/* Instagram */}
                        <Link to="#coming-soon">
                            <FaFacebookSquare />
                        </Link>
                        {/* Call Us */}
                        <Link to="#coming-soon">
                            <IoCall />
                        </Link>
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
