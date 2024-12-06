// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Menu Category
const SpecialtyData = MenuData.filter(data => data.isActive && data.catagory === "specialty");

// Import SubComponent
import MenuCard from "./MenuCard";

// Icon Imports
import { BiSolidDrink } from "react-icons/bi";
import { SiRedbull } from "react-icons/si";

const MenuSpecialty = ({ isShaking }) => {

    return (
        <>
            <h1 id="specialty">Specialty Drinks</h1>
            <h5><BiSolidDrink />Contains Alcohal <SiRedbull /> Contains Caffeine</h5>
            <div className="menu_card_container">
                {/* Cocktails Menu MAPPING */}
                {SpecialtyData.map((Specialty) => {
                    return (
                        <MenuCard 
                            key={ Specialty.id }
                            isShaking={ isShaking }
                            image={ Specialty.image }
                            title={ Specialty.title }
                            desc={ Specialty.desc }
                            isAlcohal={ Specialty.isAlcohal }
                            hasCaffeine={ Specialty.hasCaffeine }
                        />
                    )
                })}
            </div>
        </>
    )
};

export default MenuSpecialty;