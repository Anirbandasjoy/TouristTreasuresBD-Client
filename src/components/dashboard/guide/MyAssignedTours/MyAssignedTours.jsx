import toast from "react-hot-toast"
import useGetBookingDataByGuide from "../../../../hooks/useGetBookingDataByGuide"
import { useContext } from "react"
import { AuthContext } from "../../../../context/AuthProvider"
import useAxios from "../../../../hooks/useAxios"

const MyAssignedTours = () => {
    const { axiosSecure } = useAxios()
    const { user } = useContext(AuthContext)
    const { bookingData, isLoading, refetch } = useGetBookingDataByGuide(user?.email)
    console.log(bookingData)
    const handleAccepect = async (id) => {
        console.log(id)
        try {
            const { data } = await axiosSecure.patch(`/update-status/${id}?status=${"Accepted"}`)
            refetch()
            console.log(data)
            toast.success("Accepted")
        } catch (error) {
            console.log(error)
        }
    }
    const handleRejct = async (id) => {
        console.log(id)
        try {
            const { data } = await axiosSecure.patch(`/update-status/${id}?status=${"Rejected"}`)
            refetch()
            console.log(data)
            toast.success("Rejected")
        } catch (error) {
            console.log(error)
        }
    }
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (!bookingData || bookingData.length === 0) {
        return <h1 className="text-3xl flex h-[calc(100vh-100px)] justify-center items-center">Not Avilable</h1>
    }
    return (
        <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Package Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tourist Name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tour Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Tour Price
                        </th>
                        <th scope="col" className="px-6 text-center  py-3">
                            <span className="">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {
                        bookingData?.map((book) => {
                            return <tr key={book?._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {book?.tripTitle}
                                </th>
                                <td className="px-6 py-4">
                                    {book?.touristName}
                                </td>
                                <td className="px-6 py-4">
                                    {book?.date}
                                </td>
                                <td className="px-6 py-4">

                                    ${book?.price}
                                </td>

                                <td className="px-6 text-right  lg:text-center py-4 space-y-2  space-x-2">
                                    {
                                        book?.status === "In-Review" && <>
                                            <button onClick={() => handleAccepect(book?._id)} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Accept</button>
                                            <button onClick={() => handleRejct(book?._id)} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Reject</button>

                                        </>
                                    }
                                    {
                                        book?.status === "Rejected" && <>
                                            <button onClick={() => handleAccepect(book?._id)} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Accept</button>
                                            <button disabled className="w-16 text-xs font-medium bg-yellow-500 text-white px-2 cursor-not-allowed py-1">Rejected</button>
                                        </>
                                    }
                                    {
                                        book?.status === "Accepted" && <>
                                            <button disabled className="w-16 cursor-not-allowed text-xs font-medium bg-yellow-500 text-white px-2 py-1">Accepted</button>
                                            <button onClick={() => handleRejct(book?._id)} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Reject</button>
                                        </>
                                    }


                                </td>
                            </tr>
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default MyAssignedTours