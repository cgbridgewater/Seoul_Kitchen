// Import Subcomponents
import MenuApps from "../Components/Menu/MenuApps";
import MenuMain from "../Components/Menu/MenuMain";
import MenuKids from "../Components/Menu/MenuKids";
import MenuDessert from "../Components/Menu/MenuDessert";
import MenuSpecialty from "../Components/Menu/MenuSpecialty";
import MenuDrinks from "../Components/Menu/MenuDrinks";
import MenuLink from "../Components/Menu/MenuLink";
import Button from "../Components/Button";

// Custom Hook Imports
import useShake from "../Hooks/useShake";
import useScrollToTop from "../Hooks/useScrollToTop";

const MenuPage = ({ handleOpenModal }) => {
    
    // Call Hook to force page to top when component mounts
    useScrollToTop();

    // Deconstruct custom hook for card shake
    const { isShaking } = useShake();

    return (
        <main>
            <div className="menu">
                {/* ONLINE ORDER BUTTON - TRIGGERS MODAL FOR DOWN SERVICE */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={ handleOpenModal } />

                {/* JUMP LINKS TO MENU SECTIONS */}
                <div className="menu_jump_link">
                    <MenuLink target_id="apps_menu" text="Apps" />
                    <MenuLink target_id="main_menu" text="Main Course" />
                    <MenuLink target_id="kids_menu" text="Kids Menu" />
                    <MenuLink target_id="dessert_menu" text="Desserts" />
                    <MenuLink target_id="drinks_menu" text="Drinks" />
                    <MenuLink target_id="specialty_menu" text="Specialty Drinks" />
                </div>

                {/* MENU SECTIONS */}
                <MenuApps isShaking={isShaking} />
                <MenuMain isShaking={isShaking} />
                <MenuKids isShaking={isShaking} />
                <MenuDessert isShaking={isShaking} />
                <MenuDrinks />
                <MenuSpecialty isShaking={isShaking} />
                {/* END MENU SECTIONS */}

                {/* ONLINE ORDER BUTTON - TRIGGERS MODAL FOR DOWN SERVICE */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={handleOpenModal} />
            </div>
        </main>
    );
};

export default MenuPage;