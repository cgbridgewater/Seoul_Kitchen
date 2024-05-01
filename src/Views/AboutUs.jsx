import { useEffect } from "react";
import Button from "../Components/Button";
import Bibim_Bap from "../assets/Images/Bibim_Bap.jpg"

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
                        <img src={ Bibim_Bap } alt="Bibim Bap" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AboutUs;