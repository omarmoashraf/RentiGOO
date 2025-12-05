import React from "react";
import Footer from "../Footer";

const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      {children}
      <Footer/>
    </div>
  );
};

export default AuthLayout;