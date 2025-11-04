import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryProvider } from "./lib/react-query/QueryProvider.tsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <QueryProvider>
      <Toaster />
      <div className="bg-gray-900 w-screen h-screen">
        <App />
      </div>
    </QueryProvider>
  </BrowserRouter>,
);
