import Navbar from "../navbar"
import { Outlet } from "react-router-dom";
const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>

    )
}
export default SharedLayout;