import { RiFacebookFill, RiInstagramLine } from "react-icons/ri";
import { SlSocialTwitter } from "react-icons/sl";
import { FaWhatsapp } from "react-icons/fa";

import Dropdown from "./Dropdown";
import ProfileDropdown from "./ProfileDropdown";

const TopNavbar = () => {
    return (
        <div className="border-b-1 border-b-gray-300 pb-4">


            <nav className="flex flex-col sm:flex-row  text-center gap-4 sm:gap-0 sm:justify-between mt-2 px-4">
                <div>
                    <Dropdown />
                </div>

                <div className="flex gap-3 items-center justify-center">
                    <RiFacebookFill size={20} />
                    <RiInstagramLine size={20} />
                    <SlSocialTwitter size={20} />
                    <FaWhatsapp size={20} />
                </div>
                <div className=" text-center mt-5 sm:hidden">
                    <ProfileDropdown />
                </div>
            </nav>

        </div>
    )
}

export default TopNavbar