import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ClientInfoProvider } from "./context/supabaseClientInfo";

createRoot(document.getElementById("root")).render(
  <ClientInfoProvider>
    <App />
  </ClientInfoProvider>
);
