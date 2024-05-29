import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { PiWallet } from "react-icons/pi";
import { BsGlobe2 } from "react-icons/bs";
import Header from "./Header";
import "./CSS/home.css"

const Home = () => {
    const [headingText, setHeadingText] = useState(true);
    let head , header;
    head = "Live that comfort life";
    header = "Own your dream Home";
    const changeHeading = () => {
        setTimeout(() => {
            setHeadingText = (!headingText);
        },500);
    }
    // changeHeading();
    

    return(
        <>
            <Header />
            <section id="home">
                <div id="text">
                    <div id="top-animation">
                        <h1>
                            {
                            (headingText) ?
                            head:
                            header
                            }
                        </h1>
                        <p>
                            With our deluxe range of houses there is always a home for you.
                        </p>
                        <button>
                            Get now
                        </button>
                    </div>
                    <div id="landing-animation">
                        <div className="moving-icons">
                            <PiWallet id="icon1" />
                            <h3>
                                Affordable Homes
                            </h3>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident corporis neque, veniam voluptatum autem dolor asperiores unde.
                            </p>
                        </div>

                        <div className="moving-icons">
                            <FontAwesomeIcon icon={faUser} id="icon2" />
                            <h3>
                                Affordable Homes
                            </h3>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi ipsum consequatur consequuntur vel mollitia voluptatem. Possimus, labore non, ab quod odio amet ad, doloribus.
                            </p>
                        </div>
                        
                        <div className="moving-icons">
                            <BsGlobe2 id="icon3"/>
                            <h3>
                                Affordable Homes
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis fugit asperiores sit molestiae eligendi architecto repudiandae possimus facere magni autem!
                            </p>
                        </div>
                        
                    </div>

                </div>
            </section>
        </>
    );
}
export default Home;