import React from "react";
import AdminSidebar from "./components/AdminSidebar"; 

const GropLyout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      
      <AdminSidebar />

      <div className="flex-1 p-8 overflow-auto">{children}</div>
    </div>
  );
};
export default GropLyout;
