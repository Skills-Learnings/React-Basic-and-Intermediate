import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router"
import { nestedRoutes } from "./router"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Router basics */}
    {/* <RouterProvider router={router} /> */}
    {/* Nested routes */}
    {<RouterProvider router={nestedRoutes} />}
  </React.StrictMode>
)
