
import { Link, useParams } from "react-router-dom"
import useGetTourTypesData from "../../../hooks/useGetTourTypesData";
import useAxios from "../../../hooks/useAxios";
import { FaHeartPulse } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useGetRole from "../../../hooks/useGetRole";
const TourTypePackage = () => {
    const { user, loading } = useContext(AuthContext)
    const { axiosSecure } = useAxios()
    const { role } = useGetRole(user, loading)
    const { type } = useParams();
    const { packages, isLoading, refetch } = useGetTourTypesData(type)
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
    if (!packages || packages.length === 0) {
        return <h1 className="h-[calc(100vh-200px)] flex justify-center items-center text-3xl">Not Avilable Package </h1>
    }
    return (
        <div className="max-w-5xl mx-auto my-10">
            <h1 className="text-xl lg:text-2xl mb-8 font-bold text-blue-400">{type}</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    packages?.map((pac) => {
                        return <div key={pac._id} className="shadow-lg">
                            <div className="border-b-8  border-b-[#4d99f5] relative">
                                <img className="h-[15rem]" src={pac?.image} alt={pac.tourType} />
                                <p className="bg-[#008000] text-white absolute bottom-0 right-0 p-2 font-bold">${pac?.price}</p>
                                {
                                    role === "Tourist" && <FaHeartPulse onClick={() => handleCreateWishlistData(pac)} size={30} className="absolute z-[10] cursor-pointer top-2 right-2 text-gray-900 " />
                                }
                                {
                                    role === "Admin" && <CgClose onClick={() => handleDelete(pac._id)} size={30} className="absolute z-[10] cursor-pointer top-2 right-2 bg-yellow-50 text-gray-900 " />
                                }
                                <div className="pbg w-full h-full absolute top-0">  </div>
                            </div>
                            <div className="px-10 pt-3 space-y-7 text-center pb-2">
                                <h1 className="text-left text-lg lg:text-2xl font-semibold">{pac?.tripTitle}</h1>
                                <hr />
                                <button className="py-2 px-4   text-sm text-white -mb-4 bg-[#6ca9f3]"><Link to={`/package-details/${pac?._id}`}>View Package</Link></button>
                            </div>
                        </div>
                    })
                }
            </div>

        </div>
    )
}

export default TourTypePackage