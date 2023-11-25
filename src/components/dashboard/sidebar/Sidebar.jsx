import { useContext, useState } from 'react'
// Components
import MenuItem from './MenuItem'
// Icons
import { GrLogout } from 'react-icons/gr'
import { MdAccountCircle, MdManageAccounts } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGitPullRequest } from "react-icons/tb";
import { VscDiffAdded } from "react-icons/vsc";
import Logo from './Logo'
import { FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { AuthContext } from '../../../context/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()


    //   For guest/host menu item toggle button
    // const toggleHandler = event => {
    //     setToggle(event.target.checked)
    // }
    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = async () => {
        await logOut()
        toast.success("Logout Successfully")
        navigate("/")
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
                >
                    <RxHamburgerMenu className='h-5 w-5' />

                </button>
            </div>
            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-md rounded-lg text-gray-800 justify-center items-center bg-blue-50 mx-auto'>
                            <Logo />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        {/* If a user is host */}
                        {/* <ToggleBtn toggleHandler={toggleHandler} />
                         */}
                        <h1 className='text-lg font-bold text-gray-600 text-center'> TouristTreasuresBD</h1>
                        <nav>
                            <MenuItem
                                icon={FaRegHeart}
                                label='My Wishlist'
                                address='/dashboard'
                            />
                            <MenuItem
                                icon={FaRegBookmark}
                                label='My Bookings'
                                address='my-bookings'
                            />
                            <MenuItem
                                icon={TbGitPullRequest}
                                label=' My Assigned Tours'
                                address='my-assigned-tours'
                            />
                            <MenuItem
                                icon={VscDiffAdded}
                                label='Add Package'
                                address='add-package'
                            />
                            <MenuItem
                                icon={MdManageAccounts}
                                label='Manage Users'
                                address='manage-users'
                            />

                            {/* Menu Items */}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <MenuItem
                        icon={MdAccountCircle}
                        label='My Profile'
                        address='profile'
                    />
                    <button onClick={handleLogOut} className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />

                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar