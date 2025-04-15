// src/routes/PrivateRoute.js
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/context/RoutesContext";
import { Skeleton } from "@/components/ui/skeleton";

const PrivateRoute = () => {
  const { user, loading, sessionChecked } = useAuth();
  if (!sessionChecked || loading) {
    return (
      <>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 p-4 mt-8">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="h-8 w-1/2" />
              <Skeleton className="h-6 w-full" />
              <Skeleton className="h-6 w-3/4" />
            </div>
          ))}
        </div>
      </>
    );
  }
  return user ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
