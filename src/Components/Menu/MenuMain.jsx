// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Menu Category
const MainData = MenuData.filter(data => data.isActive && data.catagory === "main");

// Import SubComponent
import MenuCard from "./MenuCard";

// Icon Imports
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";

const MenuMain = ({ isShaking }) => {

    return (
        <>
            <h1 id="main_menu">Main Course</h1>
            <h5>
                <GiBowlOfRice className="ricebowl"/> Served with rice and seasonal side dishes &nbsp;
                <br className="menu_break" />
                <GiChiliPepper className="pepper"/> Spicy &nbsp;
                <LuVegan className="vegan"/> Vegetarian &nbsp;
            </h5>
            <div className="menu_card_container">
                {/* Main Course MAPPING */}
                {MainData.map((Main) => {
                    return (
                        <MenuCard 
                            key={ Main.id }
                            isShaking={ isShaking }
                            image={ Main.image }
                            title={ Main.title }
                            desc={ Main.desc }
                            hasRice={ Main.hasRice }
                            isSpicy={ Main.isSpicy }
                            isVeg={ Main.isVeg }
                        />
                    )
                })}
            </div>
        </>
    )
};

export default MenuMain;