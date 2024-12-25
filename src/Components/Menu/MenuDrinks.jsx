// Icon Imports
import { FaCircle } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";

const MenuDrinks = () => {

    return (
        <>
            <div id="drinks_menu" className="menu_drinks">
                <h1>Drinks</h1>
                <h5><SlEnergy className="caffeine"/> Contains Caffeine</h5>

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
                    REDBULL<SlEnergy className="caffeine" />
                    {/* Break Occurs and Circle is removed on smaller screens */}
                    <br className="menu_break"/>
                    <FaCircle className="drinks_break"/>
                    MONSTER<SlEnergy className="caffeine" />
                </h3>
            </div>
        </>
    )
};

export default MenuDrinks;