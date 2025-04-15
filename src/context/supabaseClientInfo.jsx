import supabase from "@/supabase/client";
import { createContext, useContext, useState, useEffect } from "react";

export const ClientInfoContext = createContext(null);
export const ClientInfoProvider = ({ children }) => {
  const [clientData, setclientData] = useState([]);
  const [loading, setloading] = useState(false);
  const fetchData = async () => {
    try {
      setloading(true);
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();
      if (userError) throw userError;
      if (user) {
        try {
          const { data, error } = await supabase
            .from("Users")
            .select("*")
            .eq("user_Id", user.id);
          if (error) throw error;
          if (data) {
            setclientData(data);
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      setclientData([]);
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ClientInfoContext.Provider
      value={{
        loading,
        clientData,
        fetchData,
        clearClientData: () => setclientData([]),
      }}
    >
      {children}
    </ClientInfoContext.Provider>
  );
};

export const useClientInfo = () => useContext(ClientInfoContext);
