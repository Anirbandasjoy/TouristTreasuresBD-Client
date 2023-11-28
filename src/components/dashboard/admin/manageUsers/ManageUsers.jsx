
import toast from "react-hot-toast";
import useGetAllusers from "../../../../hooks/useGetAllusers"

import { RiDeleteBack2Line, RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxios from "../../../../hooks/useAxios";
import { Helmet } from "react-helmet";

const ManageUsers = () => {
    const { axiosSecure } = useAxios()
    const { allUsers, isLoading, refetch } = useGetAllusers()
    const handleCreateGuide = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.patch(`/update-role/${id}?role=Guide`);
                if (data.code === 200) {
                    console.log(data)
                    refetch()
                    toast.success("Created Guide")
                }

            }
        });
    }

    const handleCreateAdmin = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.patch(`/update-role/${id}?role=Admin`);
                if (data.code === 200) {
                    console.log(data)
                    refetch()
                    toast.success("Created Admin")
                }

            }
        });

    }

    const handleDeleteUser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes"
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const { data } = await axiosSecure.delete(`/delete-user/${id}`)
                    refetch()
                    console.log(data)
                    toast.success("Deleted Successfully")
                } catch (error) {
                    console.log(error)
                }
            }
        });
    }

    if (isLoading) {
        return <h1>Loading....</h1>
    }
    return (
        <div>
            <Helmet>
                <title>Dashboard-Manage-Users | TouristTreasuresBD</title>
            </Helmet>
            <div className="relative h-[32rem] overflow-x-auto shadow-md sm:rounded-lg">
                <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-900">
                    {/* <div>
                        <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" type="button">
                            <span className="sr-only">Action button</span>
                            Action
                            <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>

                        <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Reward</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Promote</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Activate account</a>
                                </li>
                            </ul>
                            <div className="py-1">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete User</a>
                            </div>
                        </div>
                    </div> */}
                    <label htmlFor="table-search" className="sr-only">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="text" id="table-search-users" className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for users" />
                    </div>
                </div>
                <table className="w-full  text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="p-4">
                                <div className="flex items-center">
                                    <RiDeleteBin6Line size={20} />
                                </div>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Name
                            </th>

                            <th scope="col" className="px-6 py-3 ">
                                Role
                            </th>
                            <th scope="col" className="px-6 py-3 text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allUsers?.map((user) => {
                                return <tr key={user._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <td className="w-4 p-4">
                                        <div className="flex items-center">
                                            {
                                                user?.role === "Admin" ? "" : <RiDeleteBack2Line onClick={() => handleDeleteUser(user._id)} size={20} className="cursor-pointer" />
                                            }
                                        </div>
                                    </td>
                                    <th scope="row" className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                                        <img className="w-10 h-10 rounded-full" src={user?.image} alt={user?.name} />
                                        <div className="ps-3">
                                            <div className="text-base font-semibold">{user?.name}</div>
                                            <div className="font-normal text-gray-500">{user?.email}</div>
                                        </div>
                                    </th>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center">
                                            <div className={`h-2.5 w-2.5 rounded-full ${user?.role === "Guide" ? "bg-yellow-400" : user?.role === "Admin" ? "bg-blue-400" : "bg-red-500"} me-2`}></div> {user?.role}
                                        </div>
                                    </td>
                                    <td className="px-6 lg:py-4  text-center">
                                        {
                                            user?.role === "Guide" ? <button disabled className="bg-yellow-200 cursor-not-allowed text-black lg:px-3 lg:py-2 text-xs w-14 lg:w-20 px-2 py-1">Guide</button> : <button onClick={() => handleCreateGuide(user?._id)} className="bg-yellow-400 text-black lg:px-3 lg:py-2 text-xs w-14 lg:w-20 px-2 py-1">Guide</button>
                                        }
                                        {
                                            user?.role === "Admin" ? <button disabled onClick={handleCreateAdmin} className="bg-blue-200 text-black cursor-not-allowed lg:px-3 lg:py-2 text-xs w-14 lg:w-20 px-2 py-1">Admin</button> : <button onClick={() => handleCreateAdmin(user._id)} className="bg-blue-400 text-gray-200 lg:px-3 lg:py-2 text-xs w-14 lg:w-20 px-2 py-1">Admin</button>
                                        }
                                    </td>
                                </tr>

                            })
                        }

                    </tbody>
                </table>
            </div>



        </div>
    )
}

export default ManageUsers