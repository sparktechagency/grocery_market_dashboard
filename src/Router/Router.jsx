import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import ErrorCommon from "../Error/ErrorCommon";
import ForgetPass from "../Auth/ForgetPass";
import OTPCode from "../Auth/OTPCode";
import MainBothDashboard from "../MainLayout/MainBothDashboard";
import StoreDashboard from "../Store/StoreDashboard";
import StoreDashboardSidebar from "../Store/StoreDashboardSidebar";
import Inventory from "../Store/pages/Inventory";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StoreDashboardSidebar />,
        errorElement: <ErrorCommon />,
        children: [
            {
                path: "dashboard",
                element: <StoreDashboard />
            },
            {
                path: "/inventory",
                element: <Inventory />
            }
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/forgotPassword",
        element: <ForgetPass />
    },
    {
        path: "/otp",
        element: <OTPCode />
    },

])