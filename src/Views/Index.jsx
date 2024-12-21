// Import React Magic
import { useEffect, useRef, useState } from "react";

// Import Sub Components
import Button from "../Components/Button";
import Slideshow from "../Components/Slideshow";

// Import Images
import IndexImage1 from "../assets/Images/Index1.jpg";
import IndexImage2 from "../assets/Images/Index2.jpg";

// Import Custom Hooks
import useScrollToTop from "../Hooks/useScrollToTop";
import useIntersectionObserver from "../Hooks/useIntersectionObserver";

const Index = ({ handleOpenModal }) => {

    // Call Hook to force page to top when component mounts
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
    const threshold = window.innerWidth < 600 ? 0.05 : 0.25;

    // Call the custom hook for intersection observer
    useIntersectionObserver(elements, {
        threshold: threshold,
    });

    return (
        <main>
            <div className="wrapper">
                {/* Split box for slideshow and about us */}
                <div className="split_box">
                    <div
                        className={`split_box_img ${window.innerWidth > 1265 ? 'hidden bottom' : 'hidden bottom'}`}
                        ref={el => (splitImgRefs.current[0] = el)}
                    >
                        <Slideshow />
                    </div>
                    <div
                        className={`split_box_text ${window.innerWidth > 1265 ? 'hidden bottom' : 'hidden right'}`}
                        ref={el => (splitTextRefs.current[0] = el)}
                    >
                        <div className="menu_link">
                            <h2>About Seoul Food</h2>
                            <p>
                                At Seoul Food, we bring the vibrant and spicy flavors of Seoul to the heart of SeaTac, Washington.
                                <br /><br />
                                With over 10 years of culinary experience and generations of family traditions, we take pride in serving authentic Korean cuisine crafted from the freshest ingredients.
                            </p>
                            <Button to={"/aboutus"} text={"More About Us"} />
                        </div>
                    </div>
                </div>
                {/* Split box for menu link */}
                <div className="split_box flip">
                    <div
                        className={`split_box_text ${window.innerWidth > 1265 ? 'hidden left' : 'hidden right'}`}
                        ref={el => (splitTextRefs.current[1] = el)}
                    >
                        <div className="menu_link">
                            <h2>Menu</h2>
                            <p>Discover our menu, crafted with authentic and flavorful ingredients that bring the true taste of Korea, available every day of the week.</p>
                            <Button to={"/menu"} text={"View Menu"} />
                        </div>
                    </div>
                    <div
                        className={`split_box_img ${window.innerWidth > 1265 ? 'hidden right' : 'hidden left'}`}
                        ref={el => (splitImgRefs.current[1] = el)}
                    >
                        <img src={IndexImage2} alt="Galbi Plate" />
                    </div>
                </div>
                {/* Split box for Order Online */}
                <div className="split_box">
                    <div
                        className="split_box_img hidden left"
                        ref={el => (splitImgRefs.current[2] = el)}
                    >
                        <img src={IndexImage1} alt="Galbi Plate" />
                    </div>
                    <div
                        className="split_box_text hidden right"
                        ref={el => (splitTextRefs.current[2] = el)}
                    >
                        <div className="menu_link">
                            <h2>Order Online</h2>
                            <p>Order online and savor authentic Korean flavors, made ready to pick up, or delivered to you every day of the week!</p>
                            <Button to={"#"} text={"Online Ordering"} handleOpenModal={handleOpenModal} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Index;