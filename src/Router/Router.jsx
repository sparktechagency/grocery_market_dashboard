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
import StoreManagement from "../SupperAdmin/StoreManagement";
import OrderManagementAdmin from "../SupperAdmin/OrderManagementAdmin";
import ShopperAdmin from "../SupperAdmin/ShopperAdmin";
import ManageCategory from "../SupperAdmin/ManageCategory";
import SubscriptionsAdmin from "../SupperAdmin/SubscriptionsAdmin";
import SubscribeShopper from "../SupperAdmin/SubscribeShopper";
import ManageGeolocation from "../SupperAdmin/ManageGeolocation";
import CreateNewPassword from "../Auth/CreateNewPassword";

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
                path: "/manageGeolocation",
                element: <ManageGeolocation />
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
                path: "/notification",
                element: <NotificationComponents />
            },
        ]
    },





   //============================ This section not work ============= 
    {
        path: "/supper_admin",
        element: <StoreDashboardSidebar />,
        children: [
            {
                path: "store_management",
                element: <StoreManagement />
            },
            {
                path: "admin_order_management",
                element: <OrderManagementAdmin />
            },
            {
                path: "manage_category",
                element: <ManageCategory />
            },
            {
                path: "admin_shopper",
                element: <ShopperAdmin />
            },
            {
                path: "admin_subscriptions",
                element: <SubscriptionsAdmin />
            },
            {
                path: "admin_subscriptions/subscribe_shopper",
                element: <SubscribeShopper />
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
    {
        path: "/create-new-password",
        element: <CreateNewPassword />
    },

])