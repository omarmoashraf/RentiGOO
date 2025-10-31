import React from "react";
import Header from "../Header";
import Footer from "../Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-20 bg-light-background dark:bg-dark-background">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;