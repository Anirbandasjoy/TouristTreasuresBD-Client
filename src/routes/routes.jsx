import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PackageDetails from "../pages/home/travelGuide/PackageDetails";
import PribetRoutes from "./PribetRoutes";
import DashboardLayout from "../layout/DashboardLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "package-details/:id",
                element: <PribetRoutes><PackageDetails /></PribetRoutes>,
            }
        ]
    },

    {
        path: "/dashboard",
        element: <DashboardLayout />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/register",
        element: <Register />
    }
])