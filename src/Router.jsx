import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login"
import Tenant from "./Tenant";
import PseudoHeader from "./Pseudoheader";

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PseudoHeader />}>
                    <Route index element={<Home />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Tenant" element={<Tenant />} /> 
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;