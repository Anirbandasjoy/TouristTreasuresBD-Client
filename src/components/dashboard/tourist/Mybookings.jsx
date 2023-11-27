import { useContext } from "react";
import useGetBookingDataByTourist from "../../../hooks/usegetBookingDataByTourist";
import { AuthContext } from "../../../context/AuthProvider";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
const Mybookings = () => {
    const { user } = useContext(AuthContext);
    const { axiosSecure } = useAxios()
    const { bookingData, isLoading, refetch } = useGetBookingDataByTourist(user?.email);
    const handleDelete = (id) => {
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
                    const { data } = await axiosSecure.delete(`/delete-booking/${id}`)
                    refetch()
                    console.log(data)
                    toast.success("Deleted Successfully")
                } catch (error) {
                    console.log(error)
                }
            }
        });
    }
    const handlePaymentSystem = () => {
        toast.success("Payment Successfully")
    }
    if (isLoading) {
        return <h1>Loading...</h1>;
    }
    if (!bookingData || bookingData.length === 0) {
        return <h1 className="text-3xl flex h-[calc(100vh-100px)] justify-center items-center">Not Avilable</h1>
    }
    return (
        <div>
            <h1 className="text-xl lg:text-2xl mb-8 font-bold text-blue-400 ">My Bookings</h1>
            <div className="relative  overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Package Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Guide Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Tour Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                            <th scope="col" className="px-6  text-center py-3">
                                <span className="">Action</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {bookingData?.map((book) => (
                            <tr key={book._id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {book?.tripTitle}
                                </th>
                                <td className="px-6 py-4">
                                    {book?.guideEmail}
                                </td>
                                <td className="px-6 py-4">
                                    {book?.date}
                                </td>
                                <td className="px-6 py-4">

                                    ${book?.price}
                                </td>
                                <td className="px-6 py-4">
                                    {book?.status}
                                </td>
                                <td className="px-6 py-4   space-y-2 lg:text-center text-right space-x-2">
                                    {
                                        book?.status === "Accepted" ? <button onClick={handlePaymentSystem} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Pay</button> : <button disabled className="w-16 text-xs font-medium bg-blue-200 text-black  px-2 py-1 cursor-not-allowed">Pay</button>
                                    }
                                    {
                                        book?.status === "In-Review" ? <button onClick={() => handleDelete(book?._id)} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Cancel</button> : <button disabled className="w-16 text-xs cursor-not-allowed font-medium bg-blue-200 text-gray-700 px-2 py-1">Cancel</button>
                                    }
                                    <button disabled className="w-16 cursor-not-allowed text-xs font-medium bg-blue-200 text-gray-700 px-2 py-1">Apply</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Mybookings;
