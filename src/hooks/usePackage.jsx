import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const usePackage = () => {
    const { axiosSecure } = useAxios();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["packages"],
        queryFn: async () => {

            const response = await axiosSecure.get("/packages");
            return response.data;

        },
    });

    return { data, isLoading, isError };
};

export default usePackage;
