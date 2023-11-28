import { Link } from "react-router-dom";
import { FacebookShareButton, FacebookIcon } from "react-share";
import { FaFacebook } from "react-icons/fa6";
import useGetAllStory from "../../../hooks/useGetAllStory";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import useGetRole from "../../../hooks/useGetRole";

const Story = () => {
    const { user, loading } = useContext(AuthContext);
    const { role } = useGetRole(user, loading);
    const { allStory, isLoading } = useGetAllStory();

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="my-32 max-w-5xl mx-auto">
            <h1 className="text-xl lg:text-2xl mb-8 font-bold text-blue-400">Story</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {allStory?.slice(0, 4).map((story) => (
                    <div key={story?._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        {role === "Admin" && <p className="text-right text-lg cursor-pointer">X</p>}
                        <div className="flex gap-4">
                            <img src={story?.image} className="w-12 h-12 bg-gray-100 mb-3 rounded-full p-2" alt="" />
                            <div>
                                <h2 className="text-sm">{story?.name}</h2>
                                <h2 className="text-xs">{story?.email}</h2>
                            </div>
                        </div>
                        <div className="bg-gray-300 h-[.5px] w-full mb-2"></div>
                        <Link to={`/story-details/${story?._id}`} className="mb-2 text-lg font-semibold tracking-tight text-gray-500 dark:text-white">
                            {story?.sportName}
                        </Link>
                        <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">{story?.story.slice(0, 120)}</p>
                        <Link to={`/story-details/${story?._id}`} className="inline-flex items-center text-blue-600 hover:underline">
                            See details
                            <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                            </svg>
                        </Link>
                        <div className="bg-gray-300 h-[2px] w-full mt-5"></div>
                        <div className="mt-6 text-center">
                            {user ? (  // Check if the user is logged in
                                <FacebookShareButton url={`https://assignment12-848ad.web.app/story-details/${story?._id}`} quote={story?.story || ''}>
                                    <div className="flex items-center text-blue-600 hover:underline">
                                        <span className="mr-2">Share on Facebook</span>
                                        <FacebookIcon size={20} round />
                                    </div>
                                </FacebookShareButton>
                            ) : (
                                <Link to="/login">  {/* Redirect to the login page if the user is not logged in */}
                                    <div className="text-blue-600 flex items-center gap-3 hover:underline">
                                        <p> Share on Facebook </p>
                                        <FaFacebook />
                                    </div>
                                </Link>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-3">
                <Link to="/all-story">
                    <button className="relative mt-10 inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            All Storys
                        </span>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Story;
