import supabase from "@/supabase/client";
import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useAuth } from "./RoutesContext";

interface ClientDataType {
  id: string;
  user_Id: string;
  [key: string]: any;
}

interface LoanDataType {
  id: string;
  user_id: string;
  loan_amount: number;
  [key: string]: any;
}

interface ClientInfoContextType {
  loading: boolean;
  clientData: ClientDataType[];
  LoanData: LoanDataType[];
  fetchData: () => Promise<void>;
  clearClientData: () => void;
}
interface ClientInfoProviderProps {
  children: ReactNode;
}

export const ClientInfoContext = createContext<
  ClientInfoContextType | undefined
>(undefined);
export const ClientInfoProvider = ({ children }: ClientInfoProviderProps) => {
  const { user, sessionChecked } = useAuth();
  const [clientData, setclientData] = useState<ClientDataType[]>([]);
  const [LoanData, setLoanData] = useState<LoanDataType[]>([]);
  const [loading, setloading] = useState(true);
  const fetchData = async () => {
    try {
      if (user) {
        try {
          const { data, error } = await supabase
            .from("Users")
            .select("*")
            .eq("user_Id", user.id);
          if (error) throw error;
          if (data) {
            setclientData(data);
            try {
              const { data: LoanData, error: LoanError } = await supabase
                .from("Loan_Requests")
                .select("*")
                .eq("user_id", user.id);
              if (LoanError) throw LoanError;
              if (LoanData) {
                setLoanData(LoanData);
              }
            } catch (error) {
              console.log(error);
            }
          }
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error: any) {
      setclientData([]);
      console.log(error.message);
    } finally {
      setloading(false);
    }
  };
  useEffect(() => {
    if (sessionChecked) {
      fetchData();
    }
  }, [user, sessionChecked]);

  return (
    <ClientInfoContext.Provider
      value={{
        loading,
        clientData,
        LoanData,
        fetchData,
        clearClientData: () => setclientData([]),
      }}
    >
      {children}
    </ClientInfoContext.Provider>
  );
};

export const useClientInfo = () => {
  const context = useContext(ClientInfoContext);
  if (!context) {
    throw new Error("useClientInfo must be used within a ClientInfoProvider");
  }
  return context;
};
