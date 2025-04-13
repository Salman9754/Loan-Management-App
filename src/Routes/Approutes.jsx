import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "@/pages/SignUpPage";
import Login from "@/pages/Login";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import LoanRequestPage from "@/pages/dashboard/LoanRequestPage";
import NewLoanPage from "@/pages/dashboard/NewLoanPage";
import ProfilePage from "@/pages/dashboard/ProfilePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* Private Routes (Protected) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          {/* Nested Routes for Dashboard */}
          <Route index element={<DashboardPage />} />  {/* Default page */}
          <Route path="loans" element={<LoanRequestPage />} />
          <Route path="newloan" element={<NewLoanPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
