import React from "react";
import AdminSidebar from "../../pages/Admin/components/AdminSidebar";
import Header from './../Header';
import Footer from './../Footer';


const AdminLayout = ({ children }) => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark-background">
      
      <AdminSidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-6 lg:p-8">
          {children}
          <Footer/>
        </main>
      </div>
      
    </div>
  );
};

export default AdminLayout;