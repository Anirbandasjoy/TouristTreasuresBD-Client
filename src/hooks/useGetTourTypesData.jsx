import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetTourTypesData = (type) => {
    const { axiosSecure } = useAxios();

    const { data: packages, isLoading, refetch } = useQuery({
        queryKey: ['get-single-user-data', type],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/tourType?tourType=${type}`);
                return response.data;
            } catch (error) {
                console.log(error)
            }
        },
    });
    return { packages, isLoading, refetch };
};

export default useGetTourTypesData;
