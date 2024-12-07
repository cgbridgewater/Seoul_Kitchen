// Imports
import { BiSolidDrink } from "react-icons/bi";
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SiRedbull } from "react-icons/si";

const MenuCard = ({ isShaking, image, title, desc, hasRice, isSpicy, isVeg, isAlcohal, hasCaffeine }) => {

    return (
        <div className={`menu_card ${ isShaking ? "shake" : "" }`}>
            <img 
                src={ image !== "" ? image : "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fp.kindpng.com%2Fpicc%2Fs%2F79-798754_hoteles-y-centros-vacacionales-dish-placeholder-hd-png.png&f=1&nofb=1&ipt=d42af9fe421b17eda83bb9693b0c0173fd8e514483912e775d5760bea448a7c2&ipo=images" } 
                alt={ title } />
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