import { Link } from "react-router-dom";
import usePackage from "../../../hooks/usePackage"
import { FaHeartPulse } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";
import useAxios from "../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useGetRole from "../../../hooks/useGetRole";
const TripPackages = () => {
    const { user, loading } = useContext(AuthContext)
    const { role } = useGetRole(user, loading)
    const { axiosSecure } = useAxios()
    const { data, isLoading, refetch } = usePackage();
    const handleCreateWishlistData = async (packageData) => {
        const wishList = {
            email: user?.email,
            image: packageData?.image,
            tourType: packageData?.tourType,
            tripTitle: packageData?.tripTitle,
            price: packageData?.price,
            description: packageData?.description
        }
        try {
            const { data } = await axiosSecure.post("/create-wishListData", wishList)
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        toast.success("Added Your Wishlist")
    }

    const handleDelete = async (id) => {
        const { data } = await axiosSecure.delete(`package/${id}`)
        console.log(data);
        if (data.deletedCount > 0) {
            refetch()
            toast.success("Deleted Successfully")
        }
    }

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.slice(0, 3)?.map((pac) => {
                        return <div key={pac._id} className="shadow-lg">
                            <div className="border-b-8  border-b-[#4d99f5] relative">
                                <img className="h-[15rem]" src={pac?.image} alt={pac.tourType} />
                                <p className="bg-[#008000] z-[1] text-gray-200  absolute bottom-0 right-0 p-2 font-bold">${pac?.price}</p>
                                {
                                    role === "Tourist" && <FaHeartPulse onClick={() => handleCreateWishlistData(pac)} size={40} className="absolute z-[10] cursor-pointer top-2 right-2 text-red-600 bg-white p-2 rounded-full hover:bg-gray-300 duration-200 " />
                                }
                                {
                                    role === "Admin" && <CgClose onClick={() => handleDelete(pac?._id)} size={30} className="absolute z-[10] cursor-pointer top-2 right-2 bg-yellow-50 text-gray-900 " />
                                }
                                <div className="pbg w-full h-full absolute top-0">  </div>
                            </div>
                            <div className="px-10 pt-3 space-y-7 pb-2">

                                <div className="flex items-center justify-between gap-4">
                                    <div className="bg-gray-300 w-full h-[0.1px]"></div>
                                    <h1 className=" text-lg lg:text-2xl font-semibold">{pac?.tripTitle}</h1>
                                    <div className="bg-gray-300 w-full h-[0.1px]"></div>
                                </div>
                                <p className="text-gray-700">
                                    {pac?.tourType}
                                </p>
                                <hr />

                                <button className="py-2 px-4  text-sm text-white -mb-4 bg-[#6ca9f3]"><Link to={`/package-details/${pac?._id}`}>View Package</Link></button>
                            </div>
                        </div>
                    })
                }
            </div>
            <Link to="/all-packages">
                <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        All Packages
                    </span>
                </button>
            </Link>
        </div>
    )
}

export default TripPackages