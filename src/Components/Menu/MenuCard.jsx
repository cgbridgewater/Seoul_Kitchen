// Imports
import { BiSolidDrink } from "react-icons/bi";
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SiRedbull } from "react-icons/si";

const MenuCard = ({ isShaking, image, title, desc, hasRice, isSpicy, isVeg, isAlcohal, hasCaffeine }) => {

    return (
        <div className={`menu_card ${ isShaking ? "shake" : "" }`}>
            <img src={ image } alt={ title } />
            <div>
                <h5>
                    { title } &nbsp;
                    { hasRice ? <GiBowlOfRice/> : null }
                    { isSpicy ? <GiChiliPepper/> : null }
                    { isVeg ? <LuVegan/> : null }
                    { isAlcohal ? <BiSolidDrink /> : null }
                    { hasCaffeine ? <SiRedbull /> : null }
                </h5>
                <p>{ desc }</p>
            </div>
        </div>
    )
};

export default MenuCard;