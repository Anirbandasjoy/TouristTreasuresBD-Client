import toast from "react-hot-toast"

const MyAssignedTours = () => {
    const handleAccepect = () => {
        toast.success("Accepted")
    }
    const handleRejct = () => {
        toast.success("Reject")
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
                        <th scope="col" className="px-6 text-center py-3">
                            <span className="">Action</span>
                        </th>
                    </tr>
                </thead>
                <tbody>

                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            tripTitle
                        </th>
                        <td className="px-6 py-4">
                            guideEmail
                        </td>
                        <td className="px-6 py-4">
                            date
                        </td>
                        <td className="px-6 py-4">

                            price
                        </td>

                        <td className="px-6 py-4 space-y-2 text-right space-x-2">
                            <button onClick={handleAccepect} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Accepet</button>

                            <button onClick={handleRejct} className="w-16 text-xs font-medium bg-blue-500 text-white px-2 py-1">Reject</button>


                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}

export default MyAssignedTours