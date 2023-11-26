import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useGetRoleUser from "../../../hooks/useGetRoleUser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";

const PackageDetails = () => {
    const { data: guide } = useGetRoleUser("Guide")
    const [startDate, setStartDate] = useState(new Date());
    const { axiosSecure } = useAxios();
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const [open, setOpen] = useState(false)
    const { data, isLoading } = useQuery({
        queryKey: ["singlePackage", id],
        queryFn: async () => {
            const response = await axiosSecure.get(`/package/${id}`);
            return response.data;
        },
    });

    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const touristName = form.touristName.value;
        const touristEmail = form.touristEmail.value;
        const touristImage = form.touristImage.value;
        const price = form.price.value;
        const guideEmail = form.guideEmail.value;
        const tripTitle = data?.tripTitle
        const tourImage = data?.image;
        const tourType = data?.tourType;
        const bookingInfo = { touristName, touristEmail, touristImage, price, guideEmail, date: startDate, tripTitle, tourImage, tourType }
        console.log(bookingInfo)
        try {
            const { data } = await axiosSecure.post("/create-booking", bookingInfo)
            toast.success("Booking Successfully")
            console.log(data)
        } catch (error) {
            console.log(error)
        }
        form.reset()
    }


    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    return <div className="max-w-3xl mx-auto mt-10 pb-40">
        <div>
            <img className="mx-auto w-full" src={data?.image} alt={data?.tripTitle} />
            <div className="mt-2 flex items-end gap-3">
                <h1 className="text-xl lg:text-3xl  text-gray-800">Eductino tour</h1>
                <p className="text-sm lg:text-xl text-blue-500">/ ${data?.price}</p>
            </div>
            <div className="w-full h-[.5px] bg-slate-400 mt-4"></div>
        </div>
        <div className="mt-4">
            <p className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto asperiores corrupti inventore sint. Molestiae reprehenderit impedit deserunt quasi at voluptatum atque accusantium alias, nihil nostrum eaque, qui fugiat ipsa, aliquam iure dolore. Repellendus, quos quas? Non recusandae dolor quod in.</p>
        </div>
        <button onClick={() => setOpen(true)} className="w-full   text-gray-600 hover:bg-blue-500 hover:text-white duration-500 px-4 py-2 mt-4 cursor-pointer bg-transparent border-2 border-blue-500">Book Now</button>

        {/* modal code start */}
        <div>
            {/* Modal toggle */}


            {/* Main modal */}
            <div
                id="crud-modal"
                tabIndex="-1"
                aria-hidden="true"
                className={`flex transform ${open ? " " : "-translate-y-[50rem] "} duration-1000 overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100vh-100px)] max-h-full`}
            >
                <div className="relative p-4 w-full max-w-2xl max-h-full">
                    {/* Modal content */}
                    <div className="relative bg-white shadow-2xl rounded-lg  dark:bg-gray-700">
                        {/* Modal header */}
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                                Please Insert Information
                            </h3>
                            <button
                                onClick={() => setOpen(false)}
                                type="button"
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-toggle="crud-modal"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        {/* Modal body */}
                        <form className="p-4 md:p-5" onSubmit={handleSubmit}>
                            <div className="grid gap-8 mb-4 grid-cols-2">
                                <div className="col-span-2">
                                    <div className="flex  gap-4">
                                        <div className="w-full">
                                            <label
                                                htmlFor="touristName"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Tourist Name
                                            </label>
                                            <input
                                                type="text"
                                                name="touristName"
                                                id="touristName"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Tourist Name"
                                                defaultValue={user?.displayName}
                                                readOnly
                                                required
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label
                                                htmlFor="touristEmail"
                                                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Tourist Email
                                            </label>
                                            <input
                                                type="text"
                                                name="touristEmail"
                                                id="touristEmail"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Tourist Email"
                                                defaultValue={user?.email}
                                                readOnly
                                                required
                                            />
                                        </div>
                                    </div>
                                    <label
                                        htmlFor="touristImage"
                                        className="block mb-2 mt-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Tourist Image
                                    </label>
                                    <input
                                        type="text"
                                        name="touristImage"
                                        id="touristImage"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Tourist Image"
                                        defaultValue={user?.photoURL}
                                        readOnly
                                        required
                                    />

                                    <div className="flex  gap-4 mt-2">
                                        <div className="w-full">
                                            <label
                                                htmlFor="touristName"
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Price
                                            </label>
                                            <input
                                                type="number"
                                                name="price"
                                                id="price"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                placeholder="Price"
                                                defaultValue={data?.price}
                                                readOnly
                                                required
                                            />
                                        </div>
                                        <div className="w-full">
                                            <label
                                                htmlFor="touristEmail"
                                                className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                Guide
                                            </label>
                                            <select
                                                name="guideEmail"
                                                id="guideEmail"
                                                className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 peer"
                                                required
                                            >
                                                {guide?.map((g) => (
                                                    <option key={g._id} value={g?.email} className="bg-blue-100 hover:bg-blue-200 text-blue-700">
                                                        {g?.name}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                    </div>
                                    <div className="mt-4">
                                        <label
                                            htmlFor="touristEmail"
                                            className="block mb-2  text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Date
                                        </label>
                                        <DatePicker

                                            showIcon
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            minDate={new Date()}
                                            dateFormat={"dd/MM/yyyy"}
                                            icon="fa fa-calendar"
                                            className="border border-gray-400 bg-slate-50 rounded-md"
                                        />
                                    </div>

                                </div>

                                {/* ... other form fields ... */}
                            </div>
                            <button
                                onClick={() => setOpen(false)}
                                type="submit"
                                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                            >

                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        {/* modal code end */}
    </div>;
};

export default PackageDetails;
