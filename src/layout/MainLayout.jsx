import { Outlet } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import TopNavbar from "../components/navbar/TopNavbar"
import Footer from "../components/footer/Footer"

const MainLayout = () => {
    return (
        <div>
            <TopNavbar />
            <Navbar />
            <div className="px-2 lg:px-0">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout