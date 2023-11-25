import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetRole = (user, loading) => {
    const { axiosSecure } = useAxios();

    const { data: role, isLoading } = useQuery({
        queryKey: ["user-role", user],
        enabled: !loading,
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/get-role/${user?.email}`);
            return data;
        },
    });

    return { role, isLoading };
};

export default useGetRole;
