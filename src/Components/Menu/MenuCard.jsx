// Import React Magic
import { useState, useEffect, useRef } from "react";

// Import Images
import DefaultFood from "../../assets/Images/DefaultFood.png";

// Import Icons
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { FaArrowTurnDown, FaRegCircleXmark } from "react-icons/fa6";
import { FaCocktail } from "react-icons/fa";

const MenuCard = ({
  isShaking,
  image,
  title,
  desc,
  hasRice,
  isSpicy,
  isVeg,
  isAlcohal,
  hasCaffeine,
}) => {

  const [isExpanded, setIsExpanded] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [contentHeight, setContentHeight] = useState(35);
  const cardRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

  useEffect(() => {
    if (isExpanded) {
      // Measure content height when expanding
      setContentHeight(infoRef.current.scrollHeight + 8);
    } else {
      // Collapse back to 35px
      setContentHeight(35);
    }
  }, [isExpanded]);

  const handleClick = () => {
    if (windowWidth < 1010) {
      setIsExpanded((prev) => !prev);
    }
  };

  return (
    <div className={`menu_card ${isShaking ? "shake" : ""}`} ref={cardRef}>
      <img
        src={image !== "" ? image : DefaultFood}
        alt={image !== "" ? title : "No Image"}
      />
      <div>
        <h5>
          {title}
          <span>
            {hasRice ? <GiBowlOfRice className="ricebowl" /> : null}
            {isSpicy ? <GiChiliPepper className="pepper" /> : null}
            {isVeg ? <LuVegan className="vegan" /> : null}
            {isAlcohal ? <FaCocktail className="alcohal" /> : null}
            {hasCaffeine ? <SlEnergy className="caffeine" /> : null}
          </span>
        </h5>
        <div
          ref={infoRef}
          className={`info ${isExpanded ? "expanded" : ""}`}
          style={{ height: isExpanded ? contentHeight : "35px" }}
        >
            {windowWidth >= 1010 ? (
              <p>{desc}</p>
              
            ) : isExpanded ? (
              <p>
                {desc}
                <span>
                  <FaRegCircleXmark  
                    className="info_close"
                    onClick={handleClick}
                  />
                </span>
              </p>
            ) : (
              <p onClick={handleClick}>Click for info &nbsp; <FaArrowTurnDown /></p>
            )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
