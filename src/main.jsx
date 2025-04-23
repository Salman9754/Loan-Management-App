import { createRoot } from "react-dom/client";
import { AuthProvider } from "./context/RoutesContext";
import "./index.css";
import App from "./App.jsx";
import { ClientInfoProvider } from "./context/supabaseClientInfo";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ClientInfoProvider>
      <App />
    </ClientInfoProvider>
  </AuthProvider>
);
