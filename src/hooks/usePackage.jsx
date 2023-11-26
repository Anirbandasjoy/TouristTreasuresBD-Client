import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePackage = () => {
    const { axiosSecure } = useAxios();

    const { data, isLoading, isError, refetch } = useQuery({
        queryKey: ["packages"],
        queryFn: async () => {

            const response = await axiosSecure.get("/packages");
            return response.data;

        },
    });

    return { data, isLoading, isError, refetch };
};

export default usePackage;
