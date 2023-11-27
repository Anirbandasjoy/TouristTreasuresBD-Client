import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetBookingDataByGuide = (email) => {
    const { axiosSecure } = useAxios();
    const { data: bookingData, isLoading, refetch, error } = useQuery({
        queryKey: ['get-bookingDataByGuide', email],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/get-bookingDataByGuide?email=${email}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching booking data:", error);
                throw new Error("Error fetching booking data");
            }
        },
    });

    return { bookingData, isLoading, refetch, error };
};

export default useGetBookingDataByGuide
