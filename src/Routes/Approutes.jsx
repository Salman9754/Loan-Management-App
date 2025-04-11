import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import SignUpPage from "@/pages/SignUpPage";
import Login from "@/pages/Login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRoutes;
