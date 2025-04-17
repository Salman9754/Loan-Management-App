import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "@/pages/SignUpPage";
import Login from "@/pages/Login";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoanRequestPage from "@/pages/dashboard/LoanRequestPage";
import NewLoanPage from "@/pages/dashboard/NewLoanPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import { AuthProvider } from "@/context/RoutesContext";
import PublicRoute from "./PublicRoute";
import AdminOnly from "@/pages/AdminOnly";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";

const AppRoutes = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
         <Route element={<AdminOnly/>}>
         <Route path="/admin" element={<AdminDashboard/>} />
         </Route>

          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          {/* Private Routes (Protected) */}
          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              {/* Nested Routes for Dashboard */}
              <Route index element={<DashboardPage />} /> {/* Default page */}
              <Route path="loans" element={<LoanRequestPage />} />
              <Route path="newloan" element={<NewLoanPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoutes;
