import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Dashboard from "../../Pages/Dashboard/Dashboard"
import Home from "../../Pages/Home/Home"
import Projects from "../../Pages/Projects/Projects"
import Reports from "../../Pages/Reports/Reports"
import TimeLog from "../../Pages/TimeLog/TimeLog"
import Employees from "../../Pages/Employees/Employees"
import Error404 from "../../Pages/Error-404/Error-404"
import App from "../../App/App"

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />
  },
  {
    path: "/home",
    element: <Home />
  },
  {
    path: "/dashboard",
    element: <Dashboard />
  },
  {
    path: "/projects",
    element: <Projects />
  },
  {
    path: "/reports",
    element: <Reports />
  },
  {
    path: "/timelog",
    element: <TimeLog />
  },
  {
    path: "/employees",
    element: <Employees />
  },
])

export { Routes }