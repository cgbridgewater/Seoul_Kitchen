// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Category
const DessertData = MenuData.filter(data => data.isActive && data.catagory === "dessert");

// Import SubComponent
import MenuCard from "./MenuCard";

const MenuDessert = ({ isShaking }) => {

    return (
        <>
            <h1 id="dessert_menu">Dessert</h1>
            <div className="menu_card_container">
                {/* Dessert Menu MAPPING */}
                {DessertData.map((Dessert) => {
                    return (
                        <MenuCard 
                            key={ Dessert.id }
                            isShaking={isShaking}
                            image={ Dessert.image }
                            title={ Dessert.title }
                            desc={ Dessert.desc }
                        />
                    )
                })}
            </div>
        </>
    )
};

export default MenuDessert;