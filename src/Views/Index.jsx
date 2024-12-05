import { useEffect } from "react";
import Button from "../Components/Button";
import Slideshow from "../Components/Slideshow";
import RamSet from "../assets/Images/Ram_Set.jpg"
import Tofu from "../assets/Images/Tofu.jpg"

const Index = ({ handleOpenModal }) => {

    useEffect(() => {
        window.scrollTo(0,0)

        // listen for Split boxes to enter screen to reveal them
        const split_text = document.querySelectorAll(".split_box_text");
        const split_img = document.querySelectorAll(".split_box_img");
        // add SHOW class onto observed intersection, and then remove it's observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                // this keeps it on the screen, remove this and it will fade out when threshold is not met
                if (entry.isIntersecting) observer.unobserve(entry.target)
            })
        },{
            // this requires the set % of the div to be intersecting before made visable
            threshold: 0.3 
        });
        // trigger text box
        split_text.forEach(split => {
            observer.observe(split)
        })
        // trigger img box
        split_img.forEach(split => {
            observer.observe(split)
        })
    },[])

    return (
        <main>
            <div className="wrapper">
                {/* Split box for slideshow and about us */}
                <div className="split_box flip">
                    <div className="split_box_img hidden bottom">
                        <Slideshow />
                    </div>
                    <div className="split_box_text hidden bottom">
                        <div className="menu_link">
                            <h2>About Seoul Food</h2>
                            <p>
                                At Seoul Food, we bring the vibrant and spicy flavors of Seoul to the heart of SeaTac, Washington.
                                <br /><br />
                                With over 10 years of culinary experience and generations of family traditions, we take pride in serving authentic Korean cuisine crafted from the freshest ingredients.
                            </p>
                            <Button to= { "/aboutus" } text={ "More About Us" } />
                        </div>
                    </div>
                </div>
                {/* Split box for menu link */}
                <div className="split_box ">
                    <div className="split_box_text hidden left">
                        <div className="menu_link">
                            <h2>Menu</h2>
                            <p>Discover our menu, crafted with authentic and flavorful ingredients that bring the true taste of Korea, available every day of the week.</p>
                            <Button to= { "/menu" } text={ "View Menu" } />
                        </div>
                    </div>
                    <div className="split_box_img hidden right">
                        <img src={ Tofu } alt="Galbi Plate" />
                    </div>
                </div>
                {/* Split box for Order Online */}
                <div className="split_box  flip">
                    <div className="split_box_img hidden left">
                        <img src={ RamSet } alt="Galbi Plate" />
                    </div>
                    <div className="split_box_text hidden right">
                        <div className="menu_link">
                            <h2>Order Online</h2>
                            <p>Order online and savor authentic Korean flavors, made ready to pick up, or delivered to you every day of the week!</p>
                            <Button to= { "#" } text={ "Online Ordering" } handleOpenModal={handleOpenModal} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;