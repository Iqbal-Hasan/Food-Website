import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./Router/MyRouter.jsx";
import UserContext from "./Context/UserContext.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserContext>
        <ThemeProvider>
          <RouterProvider router={MyRouter}></RouterProvider>
        </ThemeProvider>
      </UserContext>
    </QueryClientProvider>
  </React.StrictMode>
);
