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
                    <div className="split_box_text hidden left">
                        <div className="about_us">
                            <h2>About Seoul Food</h2>
                            <p>
                                We are a family-owned and operated restaurant dedicated to serving authentic and delicious Korean cuisine. With over 10 years of experience, we have perfected our recipes to bring you the best flavors of Korea. We take pride in sharing our culture through food and love seeing familiar faces return to savor their favorite dishes. Whether you’re a longtime fan or trying Korean cuisine for the first time, our friendly staff is here to guide you through the menu and ensure a memorable dining experience.
                            </p>

                            <p>
                                Each dish is made to order. From our signature spicy kimchi to tender bulgogi, every dish is crafted with love and care, reflecting the rich traditions of Korean cooking. We invite you to explore our diverse menu, featuring a variety of options, including vegetarian and gluten-free dishes, ensuring there’s something for everyone to enjoy.
                            </p>
                            <Button to= { "/location"} text={ "Visit Us" } />
                        </div>
                    </div>
                    <div className="split_box_img hidden right">
                        <img src={ Bibim_Bap } alt="Bibim Bap" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;