import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetRoleUser = (role) => {
    const { axiosSecure } = useAxios();

    const { data, isLoading } = useQuery({
        queryKey: ['role-relevant-user', role],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`get-guide/${role}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching role-relevant user data");
            }
        },
    });

    return { data, isLoading };
};

export default useGetRoleUser;
