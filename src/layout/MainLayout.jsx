import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import TopNavbar from "../components/navbar/TopNavbar"

const MainLayout = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout