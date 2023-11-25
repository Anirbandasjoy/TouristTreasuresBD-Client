import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetSingleUser = (id) => {
    const { axiosSecure } = useAxios();

    const { data: singleUser, isLoading } = useQuery({
        queryKey: ['get-single-user-data', id],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/single-user/${id}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching role-relevant user data");
            }
        },
    });
    return { singleUser, isLoading };
};

export default useGetSingleUser;
