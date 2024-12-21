// Import React Magic
import { FaArrowTurnDown } from "react-icons/fa6";
import { GiBowlOfRice, GiChiliPepper } from "react-icons/gi";
import { LuVegan } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";
import { FaCocktail } from "react-icons/fa";

// Import Custom Hook
import useMenuCard from "../../Hooks/useMenuCard";

// Import Images
import DefaultFood from "../../assets/Images/DefaultFood.png";

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

  // Use the custom hook
  const {
    isExpanded,
    windowWidth,
    contentHeight,
    cardRef,
    infoRef,
    handleClick,
  } = useMenuCard();

  return (
    <div className={`menu_card ${isShaking ? "shake" : ""}`} ref={cardRef}>
      {/* use image if provided, if empty use default image */}
      <img
        src={image !== "" ? image : DefaultFood}
        alt={image !== "" ? title : "No Image"}
      />
      <div>
        {/* Card Title and icons */}
        <h5>
          {title}
          <span>
            {hasRice && <GiBowlOfRice className="ricebowl" />}
            {isSpicy && <GiChiliPepper className="pepper" />}
            {isVeg && <LuVegan className="vegan" />}
            {isAlcohal && <FaCocktail className="alcohal" />}
            {hasCaffeine && <SlEnergy className="caffeine" />}
          </span>
        </h5>
        {/* size changing container based on info content */}
        <div
          ref={infoRef}
          className={`info ${isExpanded ? "expanded" : ""}`}
          style={{ height: isExpanded ? contentHeight : "35px" }}
        >
          {/* Check Window Width To Determine What to Render */}
          {windowWidth >= 1010 ? (
            <p>{desc}</p>
          ) 
            : 
          // Check If isExpanded is true and render accordingly
          isExpanded ? (
            <p>
              {desc}
            </p>
          ) 
            : 
          (
            // onClick switches state of isExpanded to open the info panel
            <p onClick={handleClick}>
              Click for info &nbsp; <FaArrowTurnDown />
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
