import { Outlet, Link } from "react-router-dom"
import BusinessDetails from "../businessDetails/BusinessDetails"
function MainAdmin() {

    debugger

    return (
        <>
            <BusinessDetails></BusinessDetails>
            <Link to="./services">details of busness</Link>
            |
            <Link to="./meetings">meeting</Link>
            <br />
            <br />
            <Outlet />
        </>
    )
}

export default MainAdmin