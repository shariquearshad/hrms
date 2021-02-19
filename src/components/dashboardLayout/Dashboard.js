import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="dashboard-Layout">
      <nav className="side-nav-bar">this isn side nav bar</nav>
      <div className="main-container">
        {children}
        this is main container
      </div>
    </div>
  );
};
export default DashboardLayout;
