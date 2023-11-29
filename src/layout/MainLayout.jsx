import { Outlet, useNavigation } from "react-router-dom"
import Navbar from "../components/navbar/Navbar"
import TopNavbar from "../components/navbar/TopNavbar"
import Footer from "../components/footer/Footer"
import { motion, useScroll } from "framer-motion"
import Loading from "../components/Loading/Loading"

const MainLayout = () => {
    const navigation = useNavigation();
    const { scrollYProgress } = useScroll();
    return (
        <div>
            <motion.div style={{ scaleX: scrollYProgress }} className="bg-blue-600 h-1 z-50 w-full fixed  left-0 top-0 right-0"></motion.div>
            <TopNavbar />
            <Navbar />
            <div className="px-2 lg:px-0">
                {
                    navigation.state === "loading" ? <Loading /> :
                        <Outlet />
                }
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout