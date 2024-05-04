import { Link } from "react-router-dom"

const FooterLink = ({ href, text, aria }) => {

    return (
        <Link to={ href } aria-label={ aria }><span className="footer_link">{ text }</span></Link>
    );
};

export default FooterLink;