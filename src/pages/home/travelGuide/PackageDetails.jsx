import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxios from "../../../hooks/useAxios";

const PackageDetails = () => {
    const { axiosSecure } = useAxios();
    const { id } = useParams();

    const { data, isLoading } = useQuery({
        queryKey: ["singlePackage", id],
        queryFn: async () => {
            const response = await axiosSecure.get(`/package/${id}`);
            return response.data;
        },
    });

    if (isLoading) {
        return <h1>Loading.....</h1>
    }

    return <div className="max-w-3xl mx-auto mt-10 ">
        <div>
            <img className="mx-auto w-full" src={data?.image} alt={data?.tripTitle} />
        </div>
        <div className="mt-4">
            <p className="text-justify">{data?.description}</p>

        </div>
    </div>;
};

export default PackageDetails;
