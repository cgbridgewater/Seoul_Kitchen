import { BiSolidDrink } from "react-icons/bi";
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";

const MenuCard = ({ isShaking, image, title, desc, hasRice, isSpicy, isVeg, isAlcohal }) => {


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
                </h5>
                <p>{ desc }</p>
            </div>
        </div>
    )
};

export default MenuCard;