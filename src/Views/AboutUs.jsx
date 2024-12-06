// Import React Magic
import { useEffect, useRef, useState } from "react";

// Import Subcomponents
import Button from "../Components/Button";

// Import Images
import Bibim_Bap from "../assets/Images/Bibim_Bap.jpg"

// Import Custom Hooks
import useScrollToTop from "../Hooks/useScrollToTop";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const AboutUs = () => {

    useScrollToTop();

    // Refs to store the text and image elements
    const splitTextRefs = useRef([]);
    const splitImgRefs = useRef([]);

    // State to trigger the observer
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Combine both refs into a single array and set it to state
        setElements([...splitTextRefs.current, ...splitImgRefs.current]);
    }, []);

    // Determine threshold based on window width
    const threshold = window.innerWidth < 600 ? 0.1 : 0.25;

    // Call the custom hook for intersection observer
    useIntersectionObserver(elements, {
        threshold: threshold,
    });

    return (
        <main>
            <div className="wrapper">
                <div className="split_box">
                    {/* Left Box With Text and Button */}
                    <div 
                        className="split_box_text hidden left"
                        ref={el => (splitTextRefs.current[0] = el)}
                    >
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
                    {/* Right Box With Image */}
                    <div 
                        className="split_box_img hidden right"
                        ref={el => (splitImgRefs.current[0] = el)}
                    >
                        <img src={ Bibim_Bap } alt="Bibim Bap" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;