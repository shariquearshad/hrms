import React from "react";
import { BorwserRouter, Switch, Route } from "react-router-dom";
import DashboardLayout from "./components/dashboardLayout/DashBoardLayout";
const Controller = () => {
  return (
    <DashboardLayout>
      this is dashboard
      <Switch>
        <Route />
      </Switch>
    </DashboardLayout>
  );
};
export default Controller;
