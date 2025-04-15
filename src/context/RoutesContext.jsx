// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import supabase from "@/supabase/client";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(false);
  const [sessionChecked, setSessionChecked] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        setloading(true);
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (data?.session?.user) {
          setUser(data.session.user);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setloading(false);
        setSessionChecked(true);
      }
    };

    checkSession();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user,loading,sessionChecked }}>{children}</AuthContext.Provider>
  );
};
