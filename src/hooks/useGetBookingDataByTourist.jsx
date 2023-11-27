import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetBookingDataByTourist = (email) => {
    const { axiosSecure } = useAxios();
    const { data: bookingData, isLoading, refetch, error } = useQuery({
        queryKey: ['get-bookingDataByTourist', email],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/get-bookingDataByTourist?email=${email}`);
                return response.data;
            } catch (error) {
                console.error("Error fetching booking data:", error);
                throw new Error("Error fetching booking data");
            }
        },
    });

    return { bookingData, isLoading, refetch, error };
};

export default useGetBookingDataByTourist
