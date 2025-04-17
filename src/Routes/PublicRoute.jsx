import React from "react";
import { useAuth } from "@/context/RoutesContext";
import { Navigate, Outlet } from "react-router-dom";
import { Skeleton } from "@/components/ui/skeleton";
const PublicRoute = () => {
  const { user, role, sessionChecked } = useAuth();

  if (!sessionChecked || (user && !role)) {
    return null; // Or a loader
  }

  if (user) {
    return role === "admin" ? (
      <Navigate to="/admin" />
    ) : (
      <Navigate to="/dashboard" />
    );
  }

  return <Outlet />;
};

export default PublicRoute;
