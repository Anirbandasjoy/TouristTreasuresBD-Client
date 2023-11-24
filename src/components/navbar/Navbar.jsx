import { useState } from "react"
import { FaWhatsapp } from "react-icons/fa"
import { TiArrowUpOutline } from "react-icons/ti";
import { Link } from "react-router-dom"
import Logo from "./Logo";
import ProfileDropdown from "./ProfileDropdown";


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [color, setColor] = useState(false);
    const changecolor = () => {
        if (window.scrollY > 100) {
            setColor(true)
        } else {
            setColor(false)
        }
    }

    window.addEventListener("scroll", changecolor);
    return (
        <div className={`${color ? "fixed w-full  z-40 top-0 shadow-lg " : ""}`}>
            <nav className="bg-white border-gray-200  dark:bg-gray-900 px-2">
                <div className="max-w-screen-2xl flex flex-wrap gap-4 lg:gap-0  items-center justify-between mx-auto py-4">
                    <Link className="flex  items-center space-x-3 rtl:space-x-reverse">
                        <Logo />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">TouristTreasuresBD</span>
                    </Link>
                    <div className="flex md:order-2 ">

                        <div className="relative hidden md:block">
                            <ProfileDropdown />
                        </div>
                        <button onClick={() => setIsOpen(!isOpen)} data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className={isOpen ? "items-center justify-between  w-full md:flex md:w-auto md:order-1" : "items-center justify-between hidden w-full md:flex md:w-auto md:order-1"} id="navbar-search">

                        <ul className="flex gap-4 sm:gap-0 items-center flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li className="flex items-center gap-5 cursor-pointer">
                                <FaWhatsapp size={30} className="text-green-400" />
                                <div>
                                    <p className="text-xs text-gray-500">Call AnyTime</p>
                                    <h1 className="text-xl font-semibold">01772838734</h1>
                                </div>
                            </li>
                            <li className="cursor-pointer">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="cursor-pointer">

                                Community
                            </li>
                            <li className="cursor-pointer">

                                Blogs
                            </li>
                            <li className="cursor-pointer">

                                About Us
                            </li>
                            <li className="cursor-pointer">

                                Contact Us
                            </li>

                        </ul>

                    </div>

                </div>
            </nav>
            <TiArrowUpOutline size={35} className={`text-gray-500  cursor-pointer bottom-5 right-5 fixed ${color ? "" : "hidden"}`} />
        </div>
    )
}

export default Navbar