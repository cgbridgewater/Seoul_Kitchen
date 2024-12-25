const MenuLink = ({ target_id, text }) => {

    // Handler to scroll to targer id on click
    const handleClick = (e) => {
        e.preventDefault();
        const element = document.getElementById(target_id);
        // If Target ID exists, perform the scroll
        if (element) {
            window.scrollTo({
                // offset prevents navbar from covering content
                top: element.offsetTop -125,
                behavior: 'smooth'
            });
        };
    };
        
    return (
        <p className="footer_link" onClick={handleClick}>|&nbsp;{ text }&nbsp;|</p>
    );
};

export default MenuLink;