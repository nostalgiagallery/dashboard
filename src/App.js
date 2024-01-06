import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashBoardPage from "./features/Pages/DashBoardPage";
import AttendancePage from "./features/Pages/AttendancePage";
import LeavePage from "./features/Pages/LeavePage";
import PerformancePage from "./features/Pages/Performance";
import ExpensePgae from "./features/Pages/ExpensePgae";
import HelpDesk from "./features/Pages/HelpDesk";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <DashBoardPage />,
    },
    {
      path: "/attendance",
      element: <AttendancePage />,
    },
    {
      path: "/leave",
      element: <LeavePage />,
    },
    {
      path: "/performance",
      element: <PerformancePage />,
    },
    {
      path: "/expense-travel",
      element: <ExpensePgae />,
    },
    {
      path: "/helpdesk",
      element: <HelpDesk />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
