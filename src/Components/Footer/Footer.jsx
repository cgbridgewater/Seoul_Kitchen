import FooterLink_atag from "./FooterLink_atag";
import FooterLink from "./FooterLink";
import SK_LOGO from "../../assets/Images/SK_Logo_No_BG_White.png"
import Vet_Owned from "../../assets/Images/vet_owned.png"

const Footer = () => {
    return (
        <footer>
            {/* LEFT SIDE OF FOOTER */}
            {/* Links In Footer */}
            <div className="footer_links">
                <div className="footer_link_column bee_dev">
                    <p>
                        Website Built By:
                        <br />
                        <FooterLink_atag href="https://beedev-services.com/" text="BEEDEV-SERVICES" />
                    </p>
                    <span className="footer_spacer"></span> 
                    <p>
                        Powered By:
                        <br />
                        <FooterLink_atag href="https://techbyte-learning.com/" text="TechByte Learning" />
                    </p>
                </div>
                <div className="footer_link_column">
                    <FooterLink href="/location" text="Hours & Location" />
                    <FooterLink href="/menu" text="Menu" />
                    <FooterLink href="/aboutus" text="About Us" />
                    {/* <FooterLink href="/#" text="Order Online" /> */}
                    {/* Footer Socials */}
                    <div className="footer_socials">
                        {/* Facebook */}
                        <a href="#add_a_link" target="_blank">
                            <i className="fa-brands fa-facebook-square"></i>
                        </a>
                        {/* Twitter */}
                        <a href="#add_a_link" target="_blank">
                            <svg width="30" height="30" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
                            <path d="M13.982 10.622 20.54 3h-1.554l-5.693 6.618L8.745 3H3.5l6.876 10.007L3.5 21h1.554l6.012-6.989L15.868 21h5.245l-7.131-10.378Zm-2.128 2.474-.697-.997-5.543-7.93H8l4.474 6.4.697.996 5.815 8.318h-2.387l-4.745-6.787Z"></path>
                            </svg>
                        </a>
                        {/* Instagram */}
                        <a href="#add_a_link" target="_blank">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>
            {/* RIGHT SIDE OF FOOTER */}
                {/* Footer Owner Badges */}
                <div className="footer_images">
                    <a href="/"><img className="footer_image_one" src={ SK_LOGO } alt="Seoul Kitchen Logo" /></a>
                    <img className="footer_image_two" src={ Vet_Owned } alt="Seoul Kitchen Logo" />
                </div>
        </footer>
    )
};

export default Footer;
