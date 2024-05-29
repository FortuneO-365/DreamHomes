import { Outlet } from "react-router-dom";

const PseudoHeader = () => {
    return(
        <>
        <Outlet />
        </>
    );
}

export default PseudoHeader;