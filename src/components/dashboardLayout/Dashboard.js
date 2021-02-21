import React from "react";
import Header from "../navbar/Header";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashbord-Layout">
      <nav className="side-nav-bar">
        <Header />
      </nav>
      <div className="main-container">
        {children}
        this is main container
      </div>
    </div>
  );
};
export default DashboardLayout;
