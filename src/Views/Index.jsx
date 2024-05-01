import { useEffect } from "react";
import Button from "../Components/Button";
import Slideshow from "../Components/Slideshow";
import Galbi from "../assets/Images/Galbi2.png"
import Kimbap from "../assets/Images/Kimbap.jpg"

const Index = () => {

    useEffect(() => {
        window.scrollTo(0,0)
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
            <section>
                <div className="split_box">
                    <div className="split_box_text">
                        <div className="menu_link">
                            <h2>Menus</h2>
                            <p>Explore our delicious selection, available every day of the week.</p>
                            <Button to= { "/menu"} text={ "View Menus" } />
                        </div>
                    </div>
                    <div className="split_box_img">
                        <img src={ Galbi } alt="Galbi Plate" />
                    </div>
                </div>
                {/* install split spinner here?? */}
                <div className="split_box flip">
                    <div className="split_box_img">
                        <img src={ Kimbap } alt="Galbi Plate" />
                    </div>
                    <div className="split_box_text">
                        <div className="menu_link">
                            <h2>Order Online</h2>
                            <p>Explore our delicious selection, available every day of the week.</p>
                            <Button to= { "#"} text={ "Order Online" } />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Index;