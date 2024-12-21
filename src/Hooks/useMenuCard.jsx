// Import React Magic
import { useState, useEffect, useRef } from "react";

const useMenuCard = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [contentHeight, setContentHeight] = useState(35);
    const cardRef = useRef(null);
    const infoRef = useRef(null);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Handle clicking outside the card to collapse it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (cardRef.current && !cardRef.current.contains(event.target)) {
                setIsExpanded(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    // Update content height when expanding or collapsing
    useEffect(() => {
        if (isExpanded) {
            setContentHeight(infoRef.current.scrollHeight + 8);
        } else {
            setContentHeight(35);
        }
    }, [isExpanded]);

    // Toggle expand/collapse when clicking on the p tag
    const handleClick = () => {
        if (windowWidth < 1010) {
            setIsExpanded((prev) => !prev);
        }
    };

    return {
        isExpanded,
        windowWidth,
        contentHeight,
        cardRef,
        infoRef,
        handleClick,
    };
};

export default useMenuCard;