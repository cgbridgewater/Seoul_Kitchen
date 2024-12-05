// Import React Magic
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// Import Subcomponents
import Button from "../Components/Button";

// Import Image
import Food_404 from "../assets/Images/Food_404.png"

// Import Custom Hooks
import useScrollToTop from "../Hooks/useScrollToTop";
import useCountdown from "../Hooks/useCountdown";

const ErrorPage = () => {

    // Deconstruct useNavigate
    const navigate = useNavigate();
    // Create a timer value
    const timebase = 5000;

    // Use scroll to top custom hook when component mounts
    useScrollToTop();

    // Use the custom hook for countdown to return to home page
    const timeLeft = useCountdown(timebase, () => navigate("/"));

    return (
        <main>
            <div className="error_404_page">
                <img src={Food_404} alt="Error 404" />
                <h2>Whoops...</h2>
                <h4>Looks like you were trying to order off the menu.</h4>
                <h5>Hold tight, we'll get you back in... {timeLeft / 1000}</h5>
                <Button to="/" text="Go Home" />
            </div>
        </main>
    );
};

export default ErrorPage;