// Import React Magic
import { Link } from "react-router-dom"

const FooterLink = ({ href, text, handleOpenModal}) => {

    return (
        <Link to={ href } onClick={handleOpenModal}><span className="footer_link">{ text }</span></Link>
    );
};

export default FooterLink;