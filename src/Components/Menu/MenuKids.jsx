// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Menu Category
const KidsData = MenuData.filter(data => data.isActive && data.catagory === "kids");

// Import SubComponent
import MenuCard from "./MenuCard";

// Import Icons
import { GiBowlOfRice } from "react-icons/gi";

const MenuKids = ({ isShaking }) => {

    return (
        <>
            <h1 id="kids">Kids Menu</h1>
            <h5>
                <GiBowlOfRice className="ricebowl"/> Served with rice and seasonal side dishes &nbsp;
            </h5>
            <div className="menu_card_container">
                {/* Kids Menu MAPPING */}
                {KidsData.map((Kids) => {
                    return (
                        <MenuCard 
                            key={ Kids.id }
                            isShaking={isShaking}
                            image={ Kids.image }
                            title={ Kids.title }
                            desc={ Kids.desc }
                            hasRice={ Kids.hasRice }
                        />
                    )
                })}
            </div>
        </>
    )
};

export default MenuKids;