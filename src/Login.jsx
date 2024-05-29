// import logo from "./download.jpg"
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import "./CSS/login.css"
import Header from "./Header";
import Signup from "./signup";


const Login = () => {
    
    const [Signin , setSigning] = useState(true);
    const [tenant , setTenant] = useState(true);
    const [renderCount, setRenderCount] = useState(0)


    
    let one, two;
    one = document.getElementById("one");
    two = document.getElementById("two");

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <>
            <Header />
            <section id="section">
                <div id="container">
                    <div className="login" id="SignIn">
                        <div id= {(Signin) ? "signin-header" : "signup-header"}>
                            <h2>
                                {(Signin) ? "Sign-In" : "Sign-Up"}
                            </h2>
                        </div>
                        <div id="signin-body">
                            <Signup />
                        </div>
                        
                    </div>
                </div>
            </section>
            <Outlet />
        </>
    );
}

export default Login;