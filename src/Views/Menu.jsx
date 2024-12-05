import { useEffect } from "react";

// Subcomponent Imports
import MenuCard from "../Components/MenuCard";
import Button from "../Components/Button";

// JSON File Import
import MenuData from "../assets/Json/Menu.json"

// Icon Imports
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";
import { BiSolidDrink } from "react-icons/bi";

// Custom Hook Imports
import useShake from "../Hooks/useShake";
import useScrollToTop from "../Hooks/useScrollToTop";

const MenuPage = ({ handleOpenModal }) => {

    // Deconstruct custom hook for card shake
    const { isShaking } = useShake();

    // Filter Menu Data by Menu Category
    const AppsData = MenuData.filter(data => data.isActive && data.catagory === "app");
    const MainData = MenuData.filter(data => data.isActive && data.catagory === "main");
    const KidsData = MenuData.filter(data => data.isActive && data.catagory === "kids");
    const DessertData = MenuData.filter(data => data.isActive && data.catagory === "dessert");
    const SpecialtyData = MenuData.filter(data => data.isActive && data.catagory === "specialty");

    // Call Hook to force page to top when component mounts
    useScrollToTop();


    return (
        <main>
            <div className="menu">
                {/* Online Order Button Triggers Modal For Down Service */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={ handleOpenModal } />
                {/* Appetizer Menu MAPPING */}
                <h1>Appetizers</h1>
                <div className="menu_card_container">
                    {/* Menu Item */}
                    {AppsData.map((Apps) => {
                        return (
                            <MenuCard 
                                key={Apps.id}
                                isShaking={isShaking}
                                image={Apps.image}
                                title={Apps.title}
                                desc={Apps.desc}
                            />
                        )
                    })}
                </div>
                {/* Main Course MAPPING */}
                <h1>Main Course</h1>
                <h5>
                    <GiBowlOfRice /> Served with rice and seasonal side dishes &nbsp;
                    <br className="menu_break" />
                    <GiChiliPepper /> Spicy &nbsp;
                    <LuVegan /> Vegetarian &nbsp;
                </h5>
                <div className="menu_card_container">
                    {/* Menu Item */}
                    {MainData.map((Main) => {
                        return (
                            <MenuCard 
                                key={Main.id}
                                isShaking={isShaking}
                                image={Main.image}
                                title={Main.title}
                                desc={Main.desc}
                                hasRice={Main.hasRice}
                                isSpicy={Main.isSpicy}
                                isVeg={Main.isVeg}
                            />
                        )
                    })}
                </div>
                {/* Kids Menu MAPPING */}
                <h1>Kids Menu</h1>
                <div className="menu_card_container">
                    {/* Menu Item */}
                    {KidsData.map((Kids) => {
                        return (
                            <MenuCard 
                                key={Kids.id}
                                isShaking={isShaking}
                                image={Kids.image}
                                title={Kids.title}
                                desc={Kids.desc}
                                hasRice={Kids.hasRice}
                            />
                        )
                    })}
                </div>
                {/* Dessert Menu MAPPING */}
                <h1>Dessert</h1>
                <div className="menu_card_container">
                    {/* Menu Item */}
                    {DessertData.map((Dessert) => {
                        return (
                            <MenuCard 
                                key={Dessert.id}
                                isShaking={isShaking}
                                image={Dessert.image}
                                title={Dessert.title}
                                desc={Dessert.desc}
                            />
                        )
                    })}
                </div>
                {/* Drinks Menu MAPPING */}
                <div className="menu_drinks">
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
                {/* Cocktails Menu MAPPING */}
                <h1>Specialty Drinks</h1>
                <h5><BiSolidDrink />Contains Alcohal</h5>
                <div className="menu_card_container">
                    {/* Menu Item */}
                    {SpecialtyData.map((Specialty) => {
                        return (
                            <MenuCard 
                                key={Specialty.id}
                                isShaking={isShaking}
                                image={Specialty.image}
                                title={Specialty.title}
                                desc={Specialty.desc}
                                isAlcohal={Specialty.isAlcohal}
                            />
                        )
                    })}
                </div>
                {/* Online Order Button Triggers Modal For Down Service */}
                <Button to= { "#" } text={ "Order Online" } handleOpenModal={handleOpenModal} />
            </div>
        </main>
    );
};

export default MenuPage;