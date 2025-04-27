// src/context/AuthContext.js
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import supabase from "@/supabase/client";

interface AuthContextType {
  user: any;
  loading: boolean;
  role: string | null;
  sessionChecked: boolean;
  [key: string]: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setloading] = useState<boolean>(false);
  const [role, setrole] = useState<string>("");
  const [sessionChecked, setSessionChecked] = useState<boolean>(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        setloading(true);
        const { data, error } = await supabase.auth.getSession();
        if (error) throw error;
        if (data?.session?.user) {
          setUser(data.session.user);
          try {
            const { data: UserData, error: UserError } = await supabase
              .from("Users")
              .select("role")
              .eq("user_Id", data.session.user.id);
            if (UserError) throw error;
            setrole(UserData[0].role);
          } catch (error) {
            console.log(error);
          }
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
    <AuthContext.Provider value={{ user, loading, sessionChecked, role }}>
      {children}
    </AuthContext.Provider>
  );
};
