import { useCallback } from "react";
import useGoToTopButton from "../Hooks/useGoToTopButton";

const GoToTopButton = () => {
    const isVisible = useGoToTopButton();

    const scrollUp = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <>
            {isVisible && (
                <button onClick={scrollUp} className="go_top_button">
                    <i className="fa fa-arrow-up" aria-hidden="true"></i>
                </button>
            )}
        </>
    );
};

export default GoToTopButton;
