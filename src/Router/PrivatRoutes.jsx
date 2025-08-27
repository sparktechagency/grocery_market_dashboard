import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivatRoutes = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [hasAccess, setHasAccess] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const checkToken = () => {
            const token = localStorage.getItem("token");
            const role = localStorage.getItem("role");

            if (token && role === "admin") {
                setHasAccess(true);
            } else {
                setHasAccess(false);
            }

            setLoading(false);
        };
        setTimeout(checkToken, 300);
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-lg font-semibold">Loading...</p>
            </div>
        );
    }

    if (!hasAccess) {
        return <Navigate to="/login" state={{ from: location?.pathname }} replace />;
    }

    return children;
};

export default PrivatRoutes;
