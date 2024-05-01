import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Food_404 from "../assets/Images/Food_404.png"
import Button from "../Components/Button";

const ErrorPage = () => {
    const navigate = useNavigate();
    const timebase = 5000;
    const [timer, setTimer] = useState(timebase);

    useEffect(() => {
        window.scrollTo(0,0)
        // section 1 interval function to update timer by subracting 1 every second
        const updateTimer = setInterval(() => {
            setTimer(prevTimer => prevTimer - 1000);
        }, 1000);
        // section 2 redirect user when timer ends
        const redirectHome = setTimeout(() => {
            navigate("/");
        }, timebase);
        // section 3 clean up to prevent memory issues
        return () => {
            clearInterval(updateTimer);
            clearTimeout(redirectHome);
        };
    }, []);
    
    return(
        <main>
            <div className="error_404_page">
                <img src={ Food_404 } alt="Error 404" />
                <h2>Whoops, nothing delicious to find here.</h2>
                <h4>Seems like the page you were trying to find is no longer available</h4>
                <h5>Hold tight, we'll get you back in... { timer/1000 }</h5>
                <Button to="/" text="Go Home" />
            </div>
        </main>
    );
};

export default ErrorPage;
