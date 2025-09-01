

import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useGetVerifyTokenApiQuery } from "../redux/dashboardFeatures/verifyToken/dashboardVerifyToken";

const PrivatRoutes = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [hasAccess, setHasAccess] = useState(false);
  const location = useLocation();




  const token = localStorage.getItem("token");

  // if token get ok. then this api call
  const { data: getVerifyToken, isLoading } = useGetVerifyTokenApiQuery(undefined, {
    skip: !token, 
  });



  useEffect(() => {
    if (!token) {
      setHasAccess(false);
      setLoading(false);
      return;
    }

    if (isLoading) return;

    if (getVerifyToken?.success) {
      setHasAccess(true);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      setHasAccess(false);
    }

    setLoading(false);
  }, [getVerifyToken, isLoading, token]);





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