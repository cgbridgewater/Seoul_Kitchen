import { useEffect } from "react";
import Button from "../Components/Button";
import Slideshow from "../Components/Slideshow";
import Galbi from "../assets/Images/Galbi2.png"
import Kimbap from "../assets/Images/Kimbap.jpg"

const Index = () => {

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
            // this requires 20% of the div to be intersecting before made visable
            threshold: 0.2 
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
            <Slideshow />
            <div className="vet_owned">
                <p className="centered">
                    Seoul Kitchen is a veteran owned and operated restaurant located in Grand Forks, ND that captures exciting and authentic Korean flavors with a modern and inviting setting.</p>
            </div>
            {/* <div className="wrapper">
            </div> */}
            <div className="wrapper">
                <div className="split_box ">
                    <div className="split_box_text hidden left">
                        <div className="menu_link">
                            <h2>Menus</h2>
                            <p>Explore our delicious selection, available every day of the week.</p>
                            <Button to= { "/menu"} text={ "View Menus" } />
                        </div>
                    </div>
                    <div className="split_box_img hidden right">
                        <img src={ Galbi } alt="Galbi Plate" />
                    </div>
                </div>
                {/* install split spinner here?? */}
                <div className="split_box  flip">
                    <div className="split_box_img hidden left">
                        <img src={ Kimbap } alt="Galbi Plate" />
                    </div>
                    <div className="split_box_text hidden right">
                        <div className="menu_link">
                            <h2>Order Online</h2>
                            <p>Explore our delicious selection, available every day of the week.</p>
                            <Button to= { "#"} text={ "Order Online" } />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;