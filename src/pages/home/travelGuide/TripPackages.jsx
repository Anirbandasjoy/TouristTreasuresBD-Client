import { Link } from "react-router-dom";
import usePackage from "../../../hooks/usePackage"
import { FaHeartPulse } from "react-icons/fa6";
import toast from "react-hot-toast";
import useAxios from "../../../hooks/useAxios";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
const TripPackages = () => {
    const { user } = useContext(AuthContext)
    const { axiosSecure } = useAxios()
    const { data, isLoading } = usePackage();
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
        toast.success("Added Your Wishlist❤️")
    }

    if (isLoading) {
        return <h1>Loading ...</h1>
    }
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map((pac) => {
                        return <div key={pac._id} className="shadow-lg">
                            <div className="border-b-8  border-b-[#4d99f5] relative">
                                <img src={pac?.image} alt={pac.tourType} />
                                <p className="bg-[#008000] text-white absolute bottom-0 right-0 p-2 font-bold">${pac?.price}</p>
                                <FaHeartPulse onClick={() => handleCreateWishlistData(pac)} size={30} className="absolute z-[10] cursor-pointer top-2 right-2 text-gray-900 " />
                                <div className="pbg w-full h-full absolute top-0">  </div>
                            </div>
                            <div className="px-10 pt-3 space-y-7 pb-2">
                                <h1 className="text-left text-lg lg:text-2xl font-semibold">{pac?.tripTitle}</h1>
                                <hr />
                                <button className="py-2 px-4  text-sm text-white -mb-4 bg-[#6ca9f3]"><Link to={`/package-details/${pac?._id}`}>View Package</Link></button>
                            </div>
                        </div>
                    })
                }
            </div>
            <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    All Packages
                </span>
            </button>
        </div>
    )
}

export default TripPackages