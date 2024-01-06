import React, { useEffect, useState } from "react";
import Dashboard from "../DashBoard/Dashboard";
import Content from "../DashBoard/Content";

const AttendancePage = () => {
  return (
    <>
      <Dashboard>
        <Content route={"Attendance"} />
      </Dashboard>
    </>
  );
};

export default AttendancePage;
