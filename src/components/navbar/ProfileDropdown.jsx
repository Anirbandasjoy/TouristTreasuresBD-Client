import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { AuthContext } from "../../context/AuthProvider"


const ProfileDropdown = () => {
    const [open, setOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async () => {
        await logOut()
        navigate("/login")
    }
    return (
        <div className="">
            <div onClick={() => setOpen(!open)} className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">

                <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={user ? user?.photoURL : "https://toppng.com/uploads/preview/black-and-white-stockportable-network-account-icon-11553436383dwuayhjyvo.png"} alt="Bordered avatar" />

            </div>

            <div id="dropdownNavbar" className={`absolute ${open ? "" : "hidden"} sm:right-4 z-30 sm:top-14 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    {
                        user && <>
                            <li>
                                <Link className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{user?.displayName}</Link>
                            </li>
                            <li className="mb-2">
                                <Link className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{user?.email}</Link>
                            </li>
                        </>
                    }
                    <hr />
                    <li className="mt-3">
                        <Link className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>

                </ul>
                <div className="py-1">
                    {
                        user ? <Link onClick={handleLogout} className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Logout</Link> : <Link to="/login" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdown