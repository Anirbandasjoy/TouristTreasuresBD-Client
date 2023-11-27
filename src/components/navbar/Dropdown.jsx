import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-router-dom";


const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <div className="">

            <div onClick={() => setIsOpen(!isOpen)} className="flex cursor-pointer  items-center justify-center gap-1">
                <h2 className="capitalize text-sm">Quick Help</h2>

                {
                    isOpen ?
                        <IoIosArrowDown size={15} /> : <IoIosArrowUp size={15} />
                }
            </div>
            <div id="dropdownDivider" className={isOpen ? " absolute hidden text-left mt-3 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600" : " absolute  text-left mt-3 z-10  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"}>

                <div className="py-2">
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">joy600507@gmail.com</Link>
                </div>
            </div>

        </div>
    )
}

export default Dropdown