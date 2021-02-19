import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/Dashboard";
import "./style/main.scss";
const Controller = () => {
  return (
    <DashboardLayout>
      <Switch>
        <Route />
      </Switch>
    </DashboardLayout>
  );
};
export default Controller;
