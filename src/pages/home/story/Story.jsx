import { Link } from "react-router-dom";
import useGetAllStory from "../../../hooks/useGetAllStory"

const Story = () => {
    const { allStory, isLoading } = useGetAllStory();
    console.log(allStory)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <div className="my-32 max-w-5xl mx-auto">
            <h1 className="text-xl lg:text-2xl mb-8 font-bold text-blue-400">Story</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    allStory?.map((story) => {
                        return <div key={story?._id} className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <img src={story?.image} className="w-12 h-12 bg-gray-100 mb-3 rounded-full p-2" alt="" />
                            <Link >
                                <h5 className="mb-2 text-lg font-semibold tracking-tight text-gray-500 dark:text-white">{story?.name}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-sm text-gray-500 dark:text-gray-400">{story?.story.slice(0, 120)}</p>
                            <Link className="inline-flex items-center text-blue-600 hover:underline">
                                See details
                                <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778" />
                                </svg>
                            </Link>
                        </div>

                    })
                }
            </div>
        </div>
    )
}

export default Story