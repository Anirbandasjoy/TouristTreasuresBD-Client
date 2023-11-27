import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetBookingStatus = (email) => {
    const { axiosSecure } = useAxios();

    const { data: staus, isLoading } = useQuery({
        queryKey: ['get-booking-status', email],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`/get-booking-status/${email}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching role-relevant user data");
            }
        },
    });

    return { staus, isLoading };
};

export default useGetBookingStatus;
