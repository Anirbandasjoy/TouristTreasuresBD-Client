import { useContext } from "react"
import useGetWishlistData from "../../../hooks/useGetWishlistData"
import { AuthContext } from "../../../context/AuthProvider"
import { IoMdClose } from "react-icons/io";
import useAxios from "../../../hooks/useAxios";
import toast from "react-hot-toast";
// import { Link } from "react-router-dom"
const MyWishlist = () => {
    const { axiosSecure } = useAxios()
    const { user } = useContext(AuthContext)
    const { wishlistData, refetch } = useGetWishlistData(user?.email);
    const handleDelete = async (id) => {

        const { data } = await axiosSecure.delete(`delete-wishlistData/${id}`)
        console.log(data);
        if (data.deletedCount > 0) {
            refetch()
            toast.success("Deleted Successfully")
        }
    }
    console.log(wishlistData)
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 overflow-auto  h-[calc(100vh-115px)]">
            {
                wishlistData?.map((pac) => {
                    return <div key={pac._id} className="shadow-lg">
                        <div className="border-b-8  border-b-[#4d99f5] relative">
                            <img src={pac?.image} alt={pac.tourType} />
                            <p className="bg-[#008000] text-white absolute bottom-0 right-0 p-2 font-bold">${pac?.price}</p>
                            <IoMdClose onClick={() => handleDelete(pac?._id)} size={30} className="absolute bg-white p-1 z-[10] cursor-pointer top-2 right-2 text-gray-900 " />
                            <div className="pbg w-full h-full absolute top-0">  </div>
                        </div>
                        <div className="px-10 pt-3 space-y-7 pb-2">
                            <h1 className="text-left text-lg lg:text-2xl font-semibold">{pac?.tripTitle}</h1>
                            <hr />
                            {/* <button className="py-2 px-4  text-sm text-white -mb-4 bg-[#6ca9f3]"><Link to={`/package-details/${pac?._id}`}>View Package</Link></button> */}
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default MyWishlist