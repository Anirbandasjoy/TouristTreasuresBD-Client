import { useParams } from "react-router-dom"
import useGetSingleStory from "../../../hooks/useGetSingleStory"


const StoryDetails = () => {
    const { id } = useParams()
    const { singleStory, isLoading } = useGetSingleStory(id)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (

        <div className="mb-40">
            <div className="max-w-5xl  mx-auto border border-blue-400 p-5 pb-20 mt-14">
                <h1 className="text-xl text-center lg:text-2xl mb-8 font-bold text-blue-400">{singleStory?.sportName} Tour Sport</h1>
                <p className="text-lg text-justify">{singleStory?.story}</p>
            </div>
        </div>
    )
}

export default StoryDetails