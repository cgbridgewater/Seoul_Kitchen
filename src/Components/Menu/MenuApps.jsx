// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Menu Category
const AppsData = MenuData.filter(data => data.isActive && data.catagory === "app");

// Import Subcomponent
import MenuCard from "./MenuCard";

const MenuApps = ({ isShaking }) => {

    return (
        <>
            <h1 id="appeitizers">Appetizers</h1>
            <div className="menu_card_container">
                {/* Appetizer Menu MAPPING */}
                {AppsData.map((Apps) => {
                    return (
                        <MenuCard 
                        key={ Apps.id }
                        isShaking={ isShaking }
                        image={ Apps.image }
                        title={ Apps.title }
                        desc={ Apps.desc }
                        />
                    )
                })}
            </div>
        </>
    )
};

export default MenuApps;