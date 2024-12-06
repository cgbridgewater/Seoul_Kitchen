// Import Custom Hook
import useScrollToTop from "../Hooks/useScrollToTop";

const Location = () => {

    // get Google API key
    const Google_API = import.meta.env.VITE_MB_GOOGLE_API;

    // Call Hook to force page to top when component mounts
    useScrollToTop();

    return (
        <main>
            <div className="wrapper">
                    <h1>Hours & Location</h1>
                    <div className="contact_info">
                        {/* Location Section */}
                        <div>
                            <h3>Location:</h3>
                            <a className="location_address" href="https://maps.app.goo.gl/DLDhwhkC35JTLtiG7"  target="_blank" rel="noopener noreferrer">
                                1928 S Commons <br />
                                Federal Way <br />
                                Washington 98003 <br />
                            </a>
                        </div>
                        {/* Hours Section */}
                        <div>
                            <h3>Dining Hours:</h3>
                            <h4 className="day">Monday - Thursday</h4>
                            <h5>11:00am - 9:00pm</h5>
                            <h4 className="day">Friday & Saturday</h4>
                            <h5>11:00am - 10:00pm</h5>
                            <h4 className="day">Sunday</h4>
                            <h5>12:00pm - 8:30pm</h5>
                        </div>
                        {/* Phone Section */}
                        <div>
                            <h3>Phone:</h3>
                            <a href="tel:+12532753303">+1(253) 275-3303</a>
                        </div>
                    </div>
                    {/* Happy Hours Section */}
                    <div className="happy_hour">
                        <p>We are currently open for takeout & indoor/outdoor dining.</p>
                        <p>HAPPY HOUR 4pm - 6pm daily</p>
                    </div>
                    {/* <!-- google MAP --> */}
                    <div className="mapping">
                        <iframe
                            title='googleMap - Seoul Food'
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            src={`https://www.google.com/maps/embed/v1/place?key=`+ Google_API +
                            `&q=Food Court 1928 S Commons, Federal Way, Washington/&zoom=14`}>
                        </iframe>
                    </div>
                    {/* <!-- end google MAP --> */}
                </div>
        </main>
    );
};

export default Location;