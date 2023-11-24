import { useState } from "react"
import { Link } from "react-router-dom"


const ProfileDropdown = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className="">

            <div onClick={() => setOpen(!open)} className="relative cursor-pointer inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-400">JL</span>
            </div>


            <div id="dropdownNavbar" className={`absolute ${open ? "" : "hidden"} sm:right-4 z-30 sm:top-14 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                        <Link className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Anirban das joy</Link>
                    </li>
                    <li className="mb-2">
                        <Link className="block px-4 py-2  hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">joy600508@gmail.com</Link>
                    </li>
                    <hr />
                    <li className="mt-3">
                        <Link className="block px-4 py-1 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                    </li>

                </ul>
                <div className="py-1">
                    <Link to="/login" className="block px-4 py-1 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default ProfileDropdown