// import AdminSidebar from "../Admin/AdminSidebar"; // You'll need to create this
// import AdminHeader from "../Admin/AdminHeader"; // You'll need to create this

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <AdminSidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AdminHeader />
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;