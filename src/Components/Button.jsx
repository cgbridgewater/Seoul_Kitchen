import { Link } from 'react-router-dom';

const Button = ({ to, text, handleOpenModal }) => {
    
    return (
        <Link className='button_box' to={ to } onClick={handleOpenModal}>
            <button >
                { text }
            </button>
        </Link>
    );
};

export default Button;