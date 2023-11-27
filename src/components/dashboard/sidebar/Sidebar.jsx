import { useContext, useState } from 'react'
// Components
import SideBarItem from './SideBarItem'
// Icons
import { GrLogout } from 'react-icons/gr'
import { MdAccountCircle, MdManageAccounts } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGitPullRequest } from "react-icons/tb";
import { VscDiffAdded } from "react-icons/vsc";
import Logo from './Logo'
import { FaRegBookmark, FaRegHeart } from 'react-icons/fa'
import { AuthContext } from '../../../context/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import useGetRole from '../../../hooks/useGetRole';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import useAxios from '../../../hooks/useAxios';


const Sidebar = () => {
    const [isActive, setActive] = useState(false)
    const { axiosSecure } = useAxios()
    const { logOut, user, loading } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleToggle = () => {
        setActive(!isActive)
    }
    const handleLogOut = async () => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes Logout"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await logOut();
                const { data } = await axiosSecure.get("/logOut")
                console.log(data)
                navigate("/login");
                toast.success("Logout Successfully")
            }
        });



    };

    const { role } = useGetRole(user, loading)
    return (
        <>
            <div className='bg-blue-50 text-gray-800 flex justify-between md:hidden'>
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
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-blue-50 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'
                    }  md:translate-x-0  transition duration-200 ease-in-out`}
            >
                <div>
                    <div>
                        <div className='w-full md:flex  px-4 py-2 shadow-md rounded-lg text-gray-800  gap-2 justify-center items-center bg-blue-50 mx-auto'>

                            <div className='hidden md:flex'>
                                <Logo />
                            </div>
                            <Link to="/" className='text-lg font-bold text-gray-600 text-center'> TouristTreasuresBD</Link>
                        </div>
                    </div>

                    <div className='flex flex-col justify-between flex-1 mt-6'>


                        <nav>
                            {
                                role === "Tourist" && <>
                                    <SideBarItem
                                        icon={FaRegHeart}
                                        label='My Wishlist'
                                        address='wishlist'
                                    />
                                    <SideBarItem
                                        icon={FaRegBookmark}
                                        label='My Bookings'
                                        address='my-bookings'
                                    />
                                </>
                            }
                            {
                                role === "Guide" && <SideBarItem
                                    icon={TbGitPullRequest}
                                    label=' My Assigned Tours'
                                    address='my-assigned-tours'
                                />
                            }
                            {
                                role === "Admin" && <>
                                    <SideBarItem
                                        icon={VscDiffAdded}
                                        label='Add Package'
                                        address='add-package'
                                    />
                                    <SideBarItem
                                        icon={MdManageAccounts}
                                        label='Manage Users'
                                        address='manage-users'
                                    />
                                </>
                            }

                        </nav>
                    </div>
                </div>

                <div>
                    <hr />

                    <SideBarItem
                        icon={MdAccountCircle}
                        label='My Profile'
                        address='/dashboard'
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