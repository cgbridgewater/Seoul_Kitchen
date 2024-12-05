// Custom Hook Imports
import useShake from "../Hooks/useShake";
import useScrollToTop from "../Hooks/useScrollToTop";

// Import Subcomponents
import MenuApps from "../Components/Menu/MenuApps";
import MenuMain from "../Components/Menu/MenuMain";
import MenuKids from "../Components/Menu/MenuKids";
import MenuDessert from "../Components/Menu/MenuDessert";
import MenuSpecialty from "../Components/Menu/MenuSpecialty";
import MenuDrinks from "../Components/Menu/MenuDrinks";
import Button from "../Components/Button";

const MenuPage = ({ handleOpenModal }) => {
    
        // Call Hook to force page to top when component mounts
        useScrollToTop();

    // Deconstruct custom hook for card shake
    const { isShaking } = useShake();

    return (
        <main>
            <div className="menu">
                {/* Online Order Button Triggers Modal For Down Service */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={ handleOpenModal } />
                <MenuApps isShaking={isShaking} />
                <MenuMain isShaking={isShaking} />
                <MenuKids isShaking={isShaking} />
                <MenuDessert isShaking={isShaking} />
                <MenuDrinks />
                <MenuSpecialty isShaking={isShaking} />
                {/* Online Order Button Triggers Modal For Down Service */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={handleOpenModal} />
            </div>
        </main>
    );
};

export default MenuPage;