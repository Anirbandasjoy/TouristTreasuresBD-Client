import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import TopNavbar from "../components/navbar/TopNavbar"

const MainLayout = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <div className="px-2 lg:px-0">
                <Outlet />
            </div>
        </div>
    )
}

export default MainLayout