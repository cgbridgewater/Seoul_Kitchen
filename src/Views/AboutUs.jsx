import { useEffect } from "react";
import Button from "../Components/Button";
import Oreo from "../assets/Images/Oreo_Croffle.jpg"

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <main>
            <div className="wrapper">
                <div className="split_box">
                    <div className="split_box_text">
                        <div className="menu_link">
                            <h2>About Seoul Kitchen</h2>
                            <p>We are a family owned and operated restaurant that serves authentic and delicious Korean cuisine. Each mouth-watering dish is made to order, bringing the spicy taste of Seoul to the heart of Grand Forks.</p>
                            <Button to= { "/location"} text={ "Visit Us" } />
                        </div>
                    </div>
                    <div className="split_box_img">
                        <img src={ Oreo } alt="Oreo Croffle" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;