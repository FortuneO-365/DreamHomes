import { BsBell,BsX,BsXCircle,BsXDiamond } from "react-icons/bs";
import "./CSS/t-dashboard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faS, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import brand from "./IMAGES/attachment_145487070.png"
import userImage from "./IMAGES/user-image.png"
import { BsPerson, BsHouse, BsWallet2, BsGear} from "react-icons/bs";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);



const Tenant = () => {    

    const [shown, setShown] = useState(true);
    const toggleShown = () => {
        setShown(!shown);
    }

    const [hidden, setHidden] = useState(true);
    const toggleHidden = () => {
        setHidden(!hidden);
    }

    return(
        <>
            <section id="dashboard-container">
                <div id="top-section">
                    <div className={(hidden)?"search ": " search hidden"} >
                        <FontAwesomeIcon 
                            icon={faSearch} 
                            className={(hidden)?"": "hidden"}
                            onClick={toggleHidden}
                        />
                        <input 
                            type="text" 
                            name="Search" 
                            id="" 
                            placeholder="Search..."
                            className={(hidden)?"hidden": ""}
                            onBlur={toggleHidden}
                        />
                    </div>
                    <div className="top-icons">
                        <BsBell />
                    </div>
                    <div className="top-icons" id="toggle">
                        <FontAwesomeIcon 
                            icon={faBars}
                            id="dashboard-bars"
                            className={(shown)? "shown" : ""}
                            onClick={toggleShown}
                        />
                        <BsX 
                            id="daxboard-X"
                            className={(shown)? "" : "shown"}
                            onClick={toggleShown}
                        />
                    </div>
                </div>
                <div id="mid-section">
                    <section id="visible-side">
                        <div className="" id="welcome-box">
                            <h1>
                                Welcome
                                <span> User</span>
                            </h1>
                        </div>
                        <div id="d-components">
                            <div className="dashboard-box">
                            {/* <Doughnut
                                datasets: [
                                    {
                                      data: [12, 19, 3, 5, 2, 3],
                                    }
                                ]

                            /> */} 
                            </div>
                            <div className="dashboard-box"></div>
                            <div className="dashboard-box"></div>
                        </div>
                    </section>
                    <aside id="user-side">
                        <div id="panel" className={(shown)? "" : "shown"}>
                            <div id="top-panel">
                                <div>
                                    <img src={brand} alt="" />
                                </div>
                                <div> 
                                    <h3>
                                        Dream Homes
                                    </h3>
                                </div>
                            </div>
                            <div id="mid-panel">
                                <div id="top-mid-panel">
                                    <div id="top-mid-panel-left">
                                        <div>
                                            <img src={userImage} alt="" />
                                        </div>

                                    </div>
                                    <div id="top-mid-panel-right">
                                        <h2>
                                            Fortune Obioha
                                        </h2>
                                        <h3>
                                            Tenant
                                        </h3>
                                    </div>
                                </div>
                                <div id="lower-mid-panel">
                                    <div>
                                        <div className="panel-icon">
                                            <BsHouse />
                                        </div>
                                        <p className="panel-text">
                                            Dashboard
                                        </p>
                                    </div>
                                    <div>
                                        <div className="panel-icon">
                                            <BsPerson />
                                        </div>
                                        <p className="panel-text">
                                            Profile
                                        </p>
                                    </div>
                                    <div>
                                        <div className="panel-icon">
                                            <BsWallet2 />
                                        </div>
                                        <p className="panel-text">
                                            My Wallet
                                        </p>
                                    </div>
                                    <div>
                                        <div className="panel-icon">
                                            <BsGear />
                                        </div>
                                        <p className="panel-text">
                                            Settings
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </aside>

                </div>
            </section>
        </>

    );
}

export default Tenant;