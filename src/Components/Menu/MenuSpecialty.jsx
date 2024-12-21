// JSON File Import
import MenuData from "../../assets/Json/Menu.json"

// Filter Menu Data by Menu Category
const SpecialtyData = MenuData.filter(data => data.isActive && data.catagory === "specialty");

// Import SubComponent
import MenuCard from "./MenuCard";

// Icon Imports
import { FaCocktail } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";

const MenuSpecialty = ({ isShaking }) => {

    return (
        <>
            <h1 id="specialty">Specialty Drinks</h1>
            <h5>
                <FaCocktail className="alcohal" /> Contains Alcohal <span>(21+)</span>
                &nbsp;
                <SlEnergy className="caffeine" /> Contains Caffeine
            </h5>
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