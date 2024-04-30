import NavHeader from './NavHeader';
import NavHero from './NavHero';

const NavBar = () => {

    return(
        <>
            {/* Navigation Header Drops down on Scroll */}
            <NavHeader />
            {/* Navigation Hero section shown before scroll */}
            <NavHero />
        </>
    );
};

export default NavBar;
