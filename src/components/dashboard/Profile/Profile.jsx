import { useContext, useState } from "react"
import { AuthContext } from "../../../context/AuthProvider"
import useGetRole from "../../../hooks/useGetRole"
import useAxios from "../../../hooks/useAxios"
const Profile = () => {
    const { user, loading } = useContext(AuthContext)
    const { role } = useGetRole(user, loading)
    const [open, setOpen] = useState(false)
    const { axiosSecure } = useAxios()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const sportName = form.sportName.value;
        const story = form.story.value;
        const name = user?.displayName;
        const email = user?.email;
        const image = user?.photoURL;
        const storyInfo = { sportName, story, name, email, image }
        try {
            const { data } = await axiosSecure.post("/create-story", storyInfo)
            console.log(data)
        } catch (error) {
            console.log(error)
        }

        form.reset()
    }



    if (loading) {
        return <h1>Loading.....</h1>
    }

    return (
        <div className="flex justify-center  items-center h-[calc(100vh-200px)]">
            <div>
                <div className="">
                    <div className="space-y-4">
                        <img className="w-28 h-28 rounded-full mx-auto" src={user?.photoURL} alt="user" />
                        <h2 className="text-xl text-center lg:text-3xl">Welcome, {user?.displayName}</h2>
                    </div>
                </div>
                <div className="mt-10 p-5 bg-slate-100 shadow-sm">
                    <h1><strong>UserId</strong> : {user?.uid}</h1>
                    <h1><strong>Name</strong> : {user?.displayName}</h1>
                    <h1><strong>Email</strong> : {user?.email}</h1>
                    <h1><strong>Role</strong> : {role}</h1>
                </div>
                {
                    role === "Tourist" && <button onClick={() => setOpen(true)} className="bg-blue-300 mt-3 w-full px-3 py-2 text-gray-100 font-medium">Add Story</button>
                }
            </div>

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
                                    Please Insert Your Story
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
                            <form className="p-4 md:p-5" onSubmit={handleSubmit} >
                                <div className="grid gap-8 mb-4 grid-cols-2">
                                    <div className="col-span-2">
                                        <div className="mb-5">
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sport Name</label>
                                            <input type="text" name="sportName" id="sportName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Sport Name" required />
                                        </div>
                                        <div className="flex  gap-4">

                                            <div className="w-full">

                                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Story</label>
                                                <textarea minLength={200} id="story" name="story" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your story here..."></textarea>

                                            </div>

                                        </div>

                                    </div>

                                    {/* ... other form fields ... */}
                                </div>
                                <button

                                    type="submit"
                                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >

                                    Confrim
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* modal code end */}
        </div>
    )
}

export default Profile