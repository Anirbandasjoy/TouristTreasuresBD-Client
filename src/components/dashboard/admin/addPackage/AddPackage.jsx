import toast from "react-hot-toast";
import useAxios from "../../../../hooks/useAxios";
import uploadImage from "../../../../api/uploadImage";
const tourTypes = [
    "Historical-Tours",
    "Adventure-Expeditions",
    "Cultural-Immersion",
    "Wildlife-Safaris",
    "Beach-Escapes",
    "City-Explorer",
    "Mountain-Trekking",
    "Culinary-Tours",
    "Luxury-Getaways",
    "Photography-Expeditions",
    "Wellness-Retreats",
    "Island-Hopping",
    "Educational-Tours",
];
const AddPackage = () => {
    const { axiosSecure } = useAxios()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const form = e.target;
        const tripTitle = form.tripTitle.value;
        const price = form.price.value;
        const tourType = form.tourType.value;
        const description = form.description.value;
        const image = form.image.files[0];

        try {
            const imageURL = await uploadImage(image);
            const packageData = { tripTitle, price, tourType, description, image: imageURL }
            const { data } = await axiosSecure.post("/package", packageData)
            console.log(data)
            if (data.status === 201) {
                toast.success("Package Added Successfully")
            }
        } catch (error) {
            console.log(error)
        }
        form.reset()
    }
    return (
        <div>
            <div className="flex justify-center border bg-blue-50 border-[#1e40af] items-center h-[calc(100vh-150px)]">

                <form className="w-3/4  mx-auto" onSubmit={handleSubmit}>
                    <h1 className="text-xl lg:text-3xl mb-8 text-center">Add Package</h1>
                    <div className="grid md:grid-cols-2 md:gap-6">
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="text" name="tripTitle" id="tripTitle" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_first_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Trip Title</label>
                        </div>
                        <div className="relative z-0 w-full mb-5 group">
                            <input type="number" name="price" id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                            <label htmlFor="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price</label>
                        </div>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="file" name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />

                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <label htmlFor="tourType" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                            Tour Type
                        </label>
                        <select
                            name="tourType"
                            id="tourType"
                            className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-blue-600 dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:ring-0 peer"
                            required
                        >
                            {tourTypes.map((type) => (
                                <option key={type} value={type} className="bg-blue-100 hover:bg-blue-200 text-blue-700">
                                    {type}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className=" z-0 w-full mb-5 group">

                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
                        <textarea name="description" id="description" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 outline-none dark:focus:border-blue-500" placeholder="Write description here..."></textarea>

                    </div>
                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                </form>

            </div>
        </div>
    )
}

export default AddPackage