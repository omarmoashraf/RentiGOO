import React from "react";
import AdminSidebar from "../../pages/Admin/components/AdminSidebar";
import Footer from "../Footer";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-dark-background">
      {/* Main content with sidebar */}
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Page content */}
          <main className="flex-1 overflow-y-auto p-6">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default AdminLayout;
