import { useState } from "react";
import { Button } from "./ui/button";
import supabase from "@/supabase/client";
import { useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";

const LogOutBtn = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      console.log("User logged out successfully!");
      navigate("/login"); 
    } catch (error) {
      console.log("Error during logout:", error.message);
    }
  };

  return (
    <Button className='bg-blue-500' onClick={handleLogout}> <LogOut/> Log Out</Button>
  );
};

export default LogOutBtn;
