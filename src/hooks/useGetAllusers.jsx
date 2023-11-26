import { useQuery } from "@tanstack/react-query"
import useAxios from "./useAxios"


const useGetAllusers = () => {
    const { axiosSecure } = useAxios()
    const { data: allUsers, isLoading, refetch } = useQuery({
        queryKey: ["all-users-data"],
        queryFn: async () => {
            const { data } = await axiosSecure.get("/users")
            return data
        }
    })

    return { allUsers, isLoading, refetch, }
}

export default useGetAllusers