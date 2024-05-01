import menu1 from "../assets/Images/Seoul_Kitchen_Menu_Front4-(Without_Prices).jpg"
import menu2 from "../assets/Images/Seoul_Kitchen_Menu_Back5-(Without_Prices).jpg"

const MenuPage = () => {


    return (
        <main>
            <div className="menu">
                <img className="img1" src={ menu1 } alt="Seoul Kitchen Menu Front" />
                <img className="img1" src={ menu2 } alt="Seoul Kitchen Menu Back" />
            </div>
        </main>
    );
};

export default MenuPage;