import { useEffect } from "react";

const AboutUs = () => {

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <main>
            <div className="wrapper">
                <h1>About The Owner</h1>
            </div>
        </main>
    );
};

export default AboutUs;