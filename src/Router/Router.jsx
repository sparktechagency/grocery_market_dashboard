import { createBrowserRouter } from "react-router-dom";
import Login from "../Auth/Login";
import ErrorCommon from "../Error/ErrorCommon";
import ForgetPass from "../Auth/ForgetPass";
import OTPCode from "../Auth/OTPCode";
import MainBothDashboard from "../MainLayout/MainBothDashboard";
import StoreDashboard from "../Store/StoreDashboard";
import StoreDashboardSidebar from "../Store/StoreDashboardSidebar";
import Inventory from "../Store/pages/Inventory";
import OrderManagement from "../Store/pages/OrderManagement";
import Shoppers from "../Store/pages/Shoppers";
import Promotions from "../Store/pages/Promotions";
import Subscriptions from "../Store/pages/Subscriptions";
import Settings from "../Store/pages/Settings";
import AboutUs from "../Store/pages/AboutUs";
import FAQ from "../Store/pages/FAQ";
import ChangePassword from "../Store/pages/ChangePassword";
import NotificationComponents from "../Store/pages/NotificationComponents";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <StoreDashboardSidebar />,
        errorElement: <ErrorCommon />,
        children: [
            {
                path: "/",
                element: <StoreDashboard />
            },
            {
                path: "/inventory",
                element: <Inventory />
            },
            {
                path: "/orderManagement",
                element: <OrderManagement />
            },
            {
                path: "/shoppers",
                element: <Shoppers />
            },
            {
                path: "/promotions",
                element: <Promotions />
            },
            {
                path: "/subscriptions",
                element: <Subscriptions />
            },
            {
                path: "/settings/change_pass",
                element: <ChangePassword />
            },
            {
                path: "/settings/shop_setting",
                element: <Settings />
            },
            {
                path: "/settings/about_us",
                element: <AboutUs />
            },
            {
                path: "/settings/faq",
                element: <FAQ />
            },
            {
                path: "/settings/notification",
                element: <NotificationComponents />
            },
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