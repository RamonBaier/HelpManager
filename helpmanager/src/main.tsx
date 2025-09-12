import ReactDOM from "react-dom/client";
import App from "./App";
import "./GlobalCss.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";

import { AuthProvider } from "./context/AuthContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Theme appearance="dark" accentColor="green">
    <AuthProvider>
      <App />
    </AuthProvider>
  </Theme >
);
