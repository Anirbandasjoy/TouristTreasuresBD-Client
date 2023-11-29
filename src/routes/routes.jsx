import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import PackageDetails from "../pages/home/travelGuide/PackageDetails";
import PribetRoutes from "./PribetRoutes";
import DashboardLayout from "../layout/DashboardLayout";
import Profile from "../components/dashboard/Profile/Profile";
import Mybookings from "../components/dashboard/tourist/Mybookings";
import MyWishlist from "../components/dashboard/tourist/MyWishlist";
import AddPackage from "../components/dashboard/admin/addPackage/AddPackage";
import MyAssignedTours from "../components/dashboard/guide/MyAssignedTours/MyAssignedTours";
import ManageUsers from "../components/dashboard/admin/manageUsers/ManageUsers";
import GuideDetails from "../pages/home/travelGuide/GuideDetails";
import Allpackage from "../pages/home/home/allpackage/Allpackage";
import TourTypePackage from "../pages/home/tourType/tourTypePackage";
import AdminRoutes from "./AdminRoutes";
import GuideRoutes from "./GuideRoutes";
import StoryDetails from "../pages/home/story/StoryDetails";
import AllStory from "../pages/home/story/AllStory";
import WishlistDetails from "../components/dashboard/tourist/WishlistDetails";
import ErrorPage from "../pages/error/ErrorPage";
import Contact from "../pages/contact/Contact";
import Blog from "../pages/blog/Blog";
import About from "../pages/about/About";
import Community from "../pages/community/Community";
import Payment from "../components/dashboard/tourist/payment/Payment";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "package-details/:id",
                element: <PribetRoutes><PackageDetails /></PribetRoutes>,
            },
            {
                path: "guide-details/:id",
                element: <GuideDetails />
            },
            {
                path: "all-packages",
                element: <Allpackage />
            },
            {
                path: "tourType-data/:type",
                element: <TourTypePackage />
            },
            {
                path: "story-details/:id",
                element: <StoryDetails />

            },
            {
                path: "all-story",
                element: <AllStory />
            },
            {
                path: "wishlist-details/:id",
                element: <WishlistDetails />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "blog",
                element: <Blog />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "community",
                element: <Community />
            },

        ]
    },

    {
        path: "/dashboard",
        element: <PribetRoutes><DashboardLayout /></PribetRoutes>,
        children: [
            {
                index: true,
                element: <PribetRoutes><Profile /></PribetRoutes>
            },
            {
                path: "wishlist",
                element: <PribetRoutes><MyWishlist /></PribetRoutes>
            },

            {
                path: "my-bookings",
                element: <PribetRoutes><Mybookings /></PribetRoutes>
            },
            {
                path: "add-package",
                element: <PribetRoutes><AdminRoutes><AddPackage /></AdminRoutes></PribetRoutes>
            },
            {
                path: "my-assigned-tours",
                element: <PribetRoutes><GuideRoutes><MyAssignedTours /></GuideRoutes></PribetRoutes>
            },
            {
                path: "manage-users",
                element: <PribetRoutes><AdminRoutes><ManageUsers /></AdminRoutes></PribetRoutes>
            },
            {
                path: "payment",
                element: <Payment />
            }
        ]
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