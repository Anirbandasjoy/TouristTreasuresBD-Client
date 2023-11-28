import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"
const useGetAllStory = () => {
    const { axiosSecure } = useAxios()
    const { data: allStory, isLoading, refetch } = useQuery({
        queryKey: ["all-story-data"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/get-story")
            return data
        }
    })

    return { allStory, isLoading, refetch, }
}

export default useGetAllStory