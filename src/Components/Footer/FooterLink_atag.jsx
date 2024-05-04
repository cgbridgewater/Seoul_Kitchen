const FooterLink_atag = ({ href, text, aria }) => {

    return (
        <a href={ href } target="_blank" rel="noopener noreferrer" aria-label={ aria }><span className="footer_link">{ text }</span></a>
    );
};

export default FooterLink_atag;