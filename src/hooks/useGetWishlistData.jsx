import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";

const useGetWishlistData = (email) => {
    const { axiosSecure } = useAxios();

    const { data: wishlistData, isLoading, refetch } = useQuery({
        queryKey: ['get-single-user-data', email],
        queryFn: async () => {
            try {
                const response = await axiosSecure.get(`get-wishlistData/${email}`);
                return response.data;
            } catch (error) {
                throw new Error("Error fetching role-relevant user data");
            }
        },
    });
    return { wishlistData, isLoading, refetch };
};

export default useGetWishlistData;
