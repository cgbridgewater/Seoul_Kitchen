import { useEffect } from "react";
import Button from "../Components/Button";
import Bibim_Bap from "../assets/Images/Bibim_Bap.jpg"

const AboutUs = () => {

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
            threshold: 0.2 // this requires 20% of the div to be intersecting before made visable
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
                <div className="split_box">
                    <div className="split_box_text index left">
                        <div className="menu_link">
                            <h2>About Seoul Kitchen</h2>
                            <p>We are a family owned and operated restaurant that serves authentic and delicious Korean cuisine. Each mouth-watering dish is made to order, bringing the spicy taste of Seoul to the heart of Grand Forks.</p>
                            <Button to= { "/location"} text={ "Visit Us" } />
                        </div>
                    </div>
                    <div className="split_box_img index right">
                        <img src={ Bibim_Bap } alt="Bibim Bap" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;