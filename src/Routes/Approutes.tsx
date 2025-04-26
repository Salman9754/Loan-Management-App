// src/routes/AppRoutes.js
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "@/pages/SignUpPage";
import Login from "@/pages/Login";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoanRequestPage from "@/pages/dashboard/LoanRequestPage";
import NewLoanPage from "@/pages/dashboard/NewLoanPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";
import PublicRoute from "./PublicRoute";
import RoleBasedRoutes from "./RoleBaseRoutes";
import AdminDashboard from "@/pages/dashboard/AdminDashboard";

const AppRoutes = () => {
  return (
   
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route element={<RoleBasedRoutes requiredRole="admin" />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>

          {/* Public Routes */}
          <Route element={<PublicRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Route>

          {/* User Routes */}
          <Route element={<RoleBasedRoutes requiredRole="user" />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<DashboardPage />} />
              <Route path="loans" element={<LoanRequestPage />} />
              <Route path="newloan" element={<NewLoanPage />} />
              <Route path="profile" element={<ProfilePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
  );
};

export default AppRoutes;
