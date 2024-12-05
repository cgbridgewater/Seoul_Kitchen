import { useState, useEffect } from 'react';

const useModal = () => {
    // State for Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Closes Modal when overlay is clicked
    const handleOverlayClick = (e) => {
        // Only close if the overlay (outside of the modal/content) is clicked
        if (e.target.className === 'modal_overlay') {
            setIsModalOpen(false);
        }
    };

    // This function opens the modal
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    // Closes the modal when the close button is clicked
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    // useEffect to handle the body scroll
    useEffect(() => {
        if (isModalOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Clean up the effect on component unmount
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [isModalOpen]);

    return {
        isModalOpen,
        handleOverlayClick,
        handleOpenModal,
        handleCloseModal,
    };
};

export default useModal;
