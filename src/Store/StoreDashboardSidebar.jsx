import React from "react";
import { Button, Layout, Menu } from "antd";
import { Link, useNavigate, useLocation, Outlet } from "react-router-dom";
import ImageLogo from "../assets/images/logo/logo.jpg"
import ImageProfile from "../assets/images/profileImage.jpg";

import SubMenu from "antd/es/menu/SubMenu";
import "./Styled_components.css";
import { IconAboutBlack, IconAboutWhite, IconDashboardBlack, IconDashboardWhite, IconFAQBlack, IconFAQWhite, IconInventoryBlack, IconInventoryWhite, IconKeyBlack, IconKeyWhite, IconLogout, IconManageBlack, IconManageCategoryBlack, IconManageCategoryWhite, IconManageGeolocationBlack, IconManageGeolocationWhite, IconManageWhite, IconNotification, IconPromotionsBlack, IconPromotionsWhite, IconRightBlackArrow, IconSettingsBlack, IconSettingsWhite, IconShopBlack, IconShoppersBlack, IconShoppersWhite, IconShopWhite, IconStoreManagementBlack, IconStoreManagementWhite, IconSubscriptionsBlack, IconSubscriptionsWhite, ProductIconBlack, ProductIconWhite, StoreIconBlack, StoreIconWhite, TransitionIconBlack, TransitionIconWhite } from "../assets/icon";
import { useGetTotalNotificationApiQuery } from "../redux/dashboardFeatures/notification/dashboardNotificationApi";

const { Header, Sider, Content } = Layout;

const adminItems = [
    {
        path: "/supper_admin",
        title: "Dashboard",
        icon: IconDashboardBlack,
        activeIcon: IconDashboardWhite,
    },
    {
        path: "/supper_admin/store_management",
        title: "Store Management",
        icon: IconStoreManagementBlack,
        activeIcon: IconStoreManagementWhite,
    },
    {
        path: "/supper_admin/admin_order_management",
        title: "Order management",
        icon: IconManageBlack,
        activeIcon: IconManageWhite,
    },
    {
        path: "/supper_admin/manage_category",
        title: "Manage Category",
        icon: IconManageCategoryBlack,
        activeIcon: IconManageCategoryWhite,
    },
    {
        path: "/supper_admin/admin_shopper",
        title: "Shoppers",
        icon: IconShoppersBlack,
        activeIcon: IconShoppersWhite,
    },
    {
        path: "/supper_admin/admin_subscriptions",
        title: "Subscriptions",
        icon: IconSubscriptionsBlack,
        activeIcon: IconSubscriptionsWhite,
    },

    {
        path: "/settings",
        title: "Settings",
        icon: IconSettingsBlack,
        activeIcon: IconSettingsWhite,
        children: [
            {
                path: "/settings/change_pass",
                title: "Change Password",
                icon: IconKeyBlack,
                activeIcon: IconKeyWhite,
            },
            {
                path: "/settings/about_us",
                title: "About Us",
                icon: IconAboutBlack,
                activeIcon: IconAboutWhite,
            },
            {
                path: "/settings/faq",
                title: "FAQ",
                icon: IconFAQBlack,
                activeIcon: IconFAQWhite,
            },
        ],
    },
];


const shopperItems = [
    {
        path: "/",
        title: "Dashboard",
        icon: IconDashboardBlack,
        activeIcon: IconDashboardWhite,
    },
    {
        path: "/supper_admin/manage_category",
        title: "Manage Term",
        icon: IconManageCategoryBlack,
        activeIcon: IconManageCategoryWhite,
    },
    {
        path: "/orderManagement",
        title: "Order management",
        icon: IconManageBlack,
        activeIcon: IconManageWhite,
    },
    {
        path: "/manageGeolocation",
        title: "Manage geolocation",
        icon: IconManageGeolocationBlack,
        activeIcon: IconManageGeolocationWhite,
    },
    {
        path: "/shoppers",
        title: "Shoppers",
        icon: IconShoppersBlack,
        activeIcon: IconShoppersWhite,
    },
    {
        path: "/promotions",
        title: "Promotions",
        icon: IconPromotionsBlack,
        activeIcon: IconPromotionsWhite,
    },
    {
        path: "/transition",
        title: "Transitions",
        icon: TransitionIconBlack,
        activeIcon: TransitionIconWhite,
    },
        {
        path: "/allProducts",
        title: "All products",
        icon: ProductIconBlack,
        activeIcon: ProductIconWhite,
    },
    {
        path: "/allStore",
        title: "All store",
        icon: StoreIconBlack,
        activeIcon: StoreIconWhite,
    },
    {
        path: "/settings",
        title: "Settings",
        icon: IconSettingsBlack,
        activeIcon: IconSettingsWhite,
        children: [
            {
                path: "/settings/change_pass",
                title: "Change Password",
                icon: IconKeyBlack,
                activeIcon: IconKeyWhite,
            },
            // {
            //     path: "/settings/shop_setting",
            //     title: "Shop settings",
            //     icon: IconShopBlack,
            //     activeIcon: IconShopWhite,
            // },
            {
                path: "/settings/about_us",
                title: "About Us",
                icon: IconAboutBlack,
                activeIcon: IconAboutWhite,
            },
            {
                path: "/settings/faq",
                title: "FAQ",
                icon: IconFAQBlack,
                activeIcon: IconFAQWhite,
            },
        ],
    },
];

const StoreDashboardSidebar = () => {
    const { data: getAllNotifi } = useGetTotalNotificationApiQuery(undefined, {
        pollingInterval: 3000,
    });

    const notificationCount = getAllNotifi?.total




    // ====================================================================== change state shopper and admin ============================
    const [isAdmin, setIsAdmin] = React.useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleNotifications = () => {
        navigate("/notification");
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        navigate('/login')
    }

    const getTitle = () => {
        switch (location.pathname) {
            case "/":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Hello, Rich
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can see the total overview of your app from here.
                        </p>
                    </>
                );
            case "/supper_admin/manage_category":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Manage term
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can manage your term from here.
                        </p>
                    </>
                );
            case "/orderManagement":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Order management
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can see all of your stores from here.
                        </p>
                    </>
                );
            case "/manageGeolocation":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Geolocation Management
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            Manage store locations to improve delivery coverage and customer access.
                        </p>
                    </>
                );
            case "/shoppers":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Shoppers
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can manage all of the shoppers of your system from here.
                        </p>
                    </>
                );
            case "/promotions":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Promotion
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can promotion your store/products through slider images from here.
                        </p>
                    </>
                );
            case "/transition":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                           Transition
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                           You can see all of the transactions of your site and app from here.
                        </p>
                    </>
                );
                            case "/allProducts":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            All products
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            Manage your entire product catalog in one place.
                        </p>
                    </>
                );
            case "/allStore":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            All store
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                           Manage all your store locations and their settings in one place.
                        </p>
                    </>
                );
            case "/settings/change_pass":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            Your profile
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can manage your shop profile from here.
                        </p>
                    </>
                );
            case "/settings/about_us":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            About us
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can manage your shop’s about us section from here.
                        </p>
                    </>
                );
            case "/settings/faq":
                return (
                    <>
                        <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                            FAQ
                        </h1>
                        <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                            You can manage your shop’s faq section from here.
                        </p>
                    </>
                );

            case "/notification":
                return (
                    <h1 className="text-[#333333] font-semibold text-[24px]">
                        <>
                            <h1 className="text-white font-PoppinsSemiBold text-4xl mb-3">
                                Notifications
                            </h1>
                            <p className="font-PoppinsRegular text-white text-lg -mt-3 mb-4">
                                You can manage your shop’s all notifications from here.
                            </p>
                        </>
                    </h1>
                );
        }
    };



    const getMenuIcon = (
        icon, activeIcon, isActive) => {
        return isActive ? activeIcon : icon;
    };


    const MainMenu = isAdmin ? adminItems : shopperItems



    return (
        <Layout>
            <Sider
                width={300}
                className="sidebar-menu "
                style={{
                    position: "fixed",
                    left: 0,
                    top: 0,
                    bottom: 0,
                    overflow: "auto",
                    zIndex: 2,
                    backgroundColor: "#fff",
                    borderRadius: 8

                }}
                trigger={null}
            >
                <img src={ImageLogo} alt="Logo" className="mx-auto py-6 w-40 h-40" />
                <Menu
                    mode="inline"
                    defaultSelectedKeys={["1"]}
                >
                    {MainMenu.map((item, index) => {
                        const isActive = location.pathname === item.path;
                        if (item.children) {
                            return (
                                <SubMenu
                                    key={`submenu-${index}`}
                                    title={item.title}
                                    icon={getMenuIcon(item.icon, item.activeIcon, isActive)}
                                    style={{
                                        fontWeight: isActive ? "bold" : "normal",
                                        fontSize: "16px",
                                        marginBottom: "10px",
                                        backgroundColor: isActive ? "#23AA49" : "transparent",
                                    }}
                                    className="!text-black"
                                >
                                    {item.children.map((child, childIndex) => {
                                        const isSubActive = location.pathname === child.path;
                                        return (
                                            <Menu.Item
                                                key={`child-${childIndex}`}
                                                icon={getMenuIcon(
                                                    child.icon,
                                                    child.activeIcon,
                                                    location.pathname === child.path
                                                )}
                                                style={{
                                                    color: isSubActive ? "red" : "#fff",
                                                    fontWeight: isSubActive ? "bold" : "normal",
                                                    fontSize: "16px",
                                                    marginBottom: "10px",
                                                    backgroundColor: isSubActive
                                                        ? "#23AA49"
                                                        : "transparent",
                                                }}
                                            >
                                                <Link
                                                    style={{
                                                        color: isSubActive ? "white" : "black",
                                                    }}
                                                    to={child.path}
                                                >
                                                    {child.title}
                                                </Link>
                                            </Menu.Item>
                                        );
                                    })}
                                </SubMenu>
                            );
                        } else {
                            return (
                                <Menu.Item
                                    key={`item-${index}`}
                                    icon={getMenuIcon(item.icon, item.activeIcon, isActive)}
                                    style={{
                                        color: isActive ? "red" : "#fff",
                                        fontWeight: isActive ? "bold" : "normal",
                                        fontSize: "16px",
                                        marginBottom: "10px",
                                        backgroundColor: isActive ? "#23AA49" : "transparent",
                                    }}
                                >
                                    <Link
                                        style={{
                                            color: isActive ? "white" : "black",
                                        }}
                                        to={item.path}
                                    >
                                        {item.title}
                                    </Link>
                                </Menu.Item>
                            );
                        }
                    })}
                </Menu>
                <div className="mx-6 space-y-3">
                    <Button onClick={() => handleLogout()} className="gap-3 w-full justify-between items-center p-6 bg-lowRed text-base font-popping font-semibold text-red ">
                        <span className="flex gap-3">
                            <span>{IconLogout}</span>
                            Logout</span>
                        <span>{IconRightBlackArrow}</span>
                    </Button>
                    <Button onClick={() => navigate("/settings/change_pass")} className="gap-3 w-full flex justify-between items-center  p-6 bg-lowGray text-base font-popping font-semibold text-black ">
                        <span className="flex gap-3">


                            <img src={ImageProfile} alt="profile" className=" w-8 h-8 rounded-full" />
                            Rich
                        </span>
                        <span>{IconRightBlackArrow}</span>
                    </Button>
                </div>
            </Sider>

            {/* ----------- Header section static --------------------------- */}

            <Layout style={{ marginLeft: 300 }}>
                <Header
                    style={{
                        position: "fixed",
                        width: "calc(100% - 300px)",
                        top: 0,
                        left: 300,
                        background: "#23AA49",
                        height: "114px",
                        paddingTop: "20px",
                        zIndex: 10,
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <div className="w-full flex justify-between">
                        <div>{getTitle()}</div>
                        <div
                            onClick={handleNotifications} // notification 
                            className="cursor-pointer"
                            style={{ zIndex: 11 }}
                        >

                            <div className="relative flex justify-center items-center gap-4">
                                <span className="w-12 h-12 flex justify-center items-center bg-white rounded-full">{IconNotification}</span>
                                {
                                    notificationCount > 0 && (
                                        <p className="absolute -top-2 -right-2 bg-red w-6 h-6 rounded-full flex justify-center items-center text-xs text-white">
                                            {notificationCount}
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Header>

                {/* ============= children components -============= */}

                <div className="bg-lowGray">
                    <Content
                        style={{
                            marginTop: 80,
                            padding: "20px",
                            overflowY: "auto",
                            height: `calc(100vh - 80px)`,
                            background: "#F0F0F0",
                        }}
                    >
                        <div className="h-full m-2 rounded p-3 bg-lowGray">
                            <Outlet />
                        </div>
                    </Content>
                </div>
            </Layout>
        </Layout>
    )
}

export default StoreDashboardSidebar