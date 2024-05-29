import logo from "./IMAGES/attachment_145487070.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars , faX , faSearch , faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import "./CSS/login.css"

const Header = () => {

    const [ active, setActive ] = useState(false);
    const [faded, setFaded] = useState(false);
    
    const toggleFaded = () => {
        setFaded(!faded);      
    }

    return(
        <>
            <header id="header-big">
                <div className="logo">
                    <Link to="/">
                        <div>
                            <img src={logo} alt="" />
                        </div>
                        <h2>DreamHome</h2>
                    </Link>
                </div>
                <div className="menu">
                    <div>
                        <p>
                            Services
                        </p>
                    </div>
                    <div>
                        <Link to="/Login">
                            <p>
                                Become a Member
                            </p>
                        </Link>
                    </div>
                    <div>
                        <p>
                            <input type="search" name="" id="" placeholder="Search"/>
                        </p>
                    </div>
                </div>
            </header>
            <header id="header-small">
                <div className="logo">
                    <Link to="/">
                    <div>
                        <img src={logo} alt="" />
                    </div>
                        <h2>DreamHome</h2>
                    </Link>
                </div>
                <div className="menu">
                    <div>
                        <Link to="/Login">
                            <FontAwesomeIcon icon={faUserCircle}/>
                        </Link>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faBars}/>
                    </div>
                    <div id="third">
                            <FontAwesomeIcon 
                                icon={faSearch} 
                                id="Search" 
                                className={(faded)? "faded" : ""}
                                onClick={ () => {
                                    toggleFaded();
                                    setActive(true);
                                }}
                            />

                            <FontAwesomeIcon 
                                icon={faX} 
                                id="x" 
                                className={(faded)? "" : "faded"}
                                onClick={ () => {
                                    toggleFaded();
                                    setActive(false);
                                }}
                            />
                    </div>
                </div>
            </header>
                {
                    (active)
                    ?
                    <>
                        <input type="search" placeholder="Search" id="search"/>
                    </>
                    :
                    <></>
                }
            <Outlet />
        </>
    );
}
export default Header;