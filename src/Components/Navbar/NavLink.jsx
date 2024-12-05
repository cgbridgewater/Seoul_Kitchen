import { Link } from "react-router-dom"

const NavLink = ({ href, text, handleOpenModal }) => {

    return (
        <Link to={ href } onClick={handleOpenModal}><span className="nav_link">{ text }</span></Link>
    );
};

export default NavLink;