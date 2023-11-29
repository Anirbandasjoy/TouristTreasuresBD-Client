import { FcSynchronize } from "react-icons/fc";
const DashboardLoading = () => {
    return (
        <div className="h-[calc(100vh-100px)] flex justify-center items-center">
            <FcSynchronize className="animate-spin" size={50} />
        </div>
    )
}

export default DashboardLoading