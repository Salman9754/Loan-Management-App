import { React, useEffect, useState } from "react";
import supabase from "@/supabase/client";
import { Navigate, Outlet } from "react-router-dom";

const AdminOnly = () => {
  const [loading, setloading] = useState(true);
  const [isAdmin, setisAdmin] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser();
        const { data, error } = await supabase
          .from("Users")
          .select("role")
          .eq("user_Id", user.id);
        if (error) throw error;
        console.log(data[0].role);
        const role = data[0].role;
        if (role === "admin") {
          setisAdmin(true);
        }
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) {
    return <div>Loading admin check…</div>;
  }
  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};

export default AdminOnly;
