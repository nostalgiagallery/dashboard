import React from "react";
import Dashboard from "../DashBoard/Dashboard";
import Content from "../DashBoard/Content";

const PerformancePage = () => {
  return (
    <Dashboard>
      <Content route={"Performance"} />
    </Dashboard>
  );
};

export default PerformancePage;
