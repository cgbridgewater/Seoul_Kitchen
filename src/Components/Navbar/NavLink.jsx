import { Link } from "react-router-dom"

const NavLink = ({ href, text, aria }) => {

    return (
        <Link to={ href } aria-label={ aria }><span className="nav_link">{ text }</span></Link>
    );
};

export default NavLink;