// Icon Imports
import { FaCircle } from "react-icons/fa";

const MenuDrinks = () => {

    return (
        <>
            <div id="drinks" className="menu_drinks">
                <h1>Drinks</h1>
                <h3>
                    COKE PRODUCTS
                    {/* Break Occurs and Circle is removed on smaller screens */}
                    <br className="menu_break"/>
                    <FaCircle className="drinks_break"/>
                    SWEET TEA
                    {/* Break Occurs and Circle is removed on smaller screens */}
                    <br className="menu_break"/>
                    <FaCircle className="drinks_break"/>
                    SPARKLING WATER
                </h3>
                <h3>
                    COFFEE
                    {/* Break Occurs and Circle is removed on smaller screens */}
                    <br className="menu_break"/>
                    <FaCircle className="drinks_break"/>
                    REDBULL
                    {/* Break Occurs and Circle is removed on smaller screens */}
                    <br className="menu_break"/>
                    <FaCircle className="drinks_break"/>
                    MONSTER
                </h3>
            </div>
        </>
    )
};

export default MenuDrinks;