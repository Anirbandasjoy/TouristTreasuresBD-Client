import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetSingleStory = (id) => {
    const { axiosSecure } = useAxios();

    const { data: singleStory, isLoading } = useQuery({
        queryKey: ['get-single-story-data', id],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/get-signleDetails/${id}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching story-relevant user data");
            }
        },
    });
    return { singleStory, isLoading };
};

export default useGetSingleStory;
