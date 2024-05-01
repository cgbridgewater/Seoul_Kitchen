import Button from "../Components/Button";
import Galbi from "../assets/Images/Galbi2.png"

// get Google API key
const Google_API = import.meta.env.VITE_MB_GOOGLE_API;

const Location = () => {


    return (
        <main>
            <div className="wrapper">
                <div className="centered_box">
                    <div className="contact_info">
                        <h1>Hours & Location</h1>
                        <h3>Location:</h3>
                        <a className="location_address" href="https://maps.app.goo.gl/VZVontCvoAhWzAs56"  target="_blank" rel="noopener noreferrer">
                            1726 S. Washington St. Ste. 31 <br />
                            Grand Forks <br />
                            North Dakota 58201 <br />
                        </a>
                        <h3>Phone:</h3>
                        <h5>+1(701) 757-0679</h5>
                        <h3>Email:</h3>
                        <h5>seoulkitchen24@gmail.com</h5>
                        <h3>Dining Hours:</h3>
                        <h5 className="day">Monday</h5>
                        <h5>Closed</h5>
                        <h5 className="day">Tuesday - Thursday</h5>
                        <h5>11:00am - 9:00pm</h5>
                        <h5 className="day">Friday & Saturday</h5>
                        <h5>11:00am - 10:00pm</h5>
                        <h5 className="day">Sunday</h5>
                        <h5>12:00pm - 8:30pm</h5>
                        <p>We are currently open for takeout & indoor/outdoor dining.</p>
                    </div>
                    <div className="mapping">
                        {/* <!-- google MAP --> */}
                        <iframe
                            title='googleMap - Seoul Kitchen'
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=`+ Google_API +
                            `&q=Seoul Kitchen 1726 S. Washington St. (Grand Cities Mall, APT 31, Grand Forks, ND 58201/&zoom=14`}>
                        </iframe>
                        {/* <!-- end google MAP --> */}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Location;