const ComingSoon = ({ handleCloseModal, handleOverlayClick, isModalOpen }) => {

    return (
        <>
            {
                isModalOpen ? (
                    <div className="modal_overlay" onClick={handleOverlayClick}>
                        <div className="coming_soon">
                            <h3>Online Ordering Temporarily Unavailable</h3>
                            <p>
                                We apologize for the inconvenience, but our online ordering system is currently down for maintenance. Our team is working diligently to restore this feature as quickly as possible.
                            </p>
                            <p>
                                In the meantime, we invite you to visit us in person to enjoy our warm and welcoming family atmosphere. Experience our delicious menu and dedicated service firsthand.
                            </p>
                            <p>
                                Thank you for your understanding and patience. We look forward to serving you soon!
                            </p>
                            <div className="button_box">
                                <button onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                ) : null
            }
        </>
    );
};

export default ComingSoon;
