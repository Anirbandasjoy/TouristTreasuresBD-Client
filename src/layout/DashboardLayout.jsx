import { Outlet, useNavigation } from "react-router-dom"
import Sidebar from "../components/dashboard/sidebar/Sidebar"
import DashboardLoading from "../components/dashboard/loading/dashboardLoading";

const DashboardLayout = () => {
    const navigation = useNavigation();
    return (
        <div className='relative min-h-screen md:flex'>
            {/* Sidebar Component */}
            <Sidebar />
            <div className='flex-1  md:ml-64'>
                <div className='p-5'>{/* Outlet for dynamic contents */}

                    {
                        navigation.state === "loading" ? <DashboardLoading /> :
                            <Outlet />
                    }

                </div>
            </div>
        </div>
    )
}

export default DashboardLayout