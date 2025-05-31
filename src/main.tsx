import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import AppRoutes from "./app-routes.tsx";
import "./index.css";
import { persistor, store } from "./stores/index.ts";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "./components/ui/sonner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRoutes />
          <Toaster position="top-center" />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
