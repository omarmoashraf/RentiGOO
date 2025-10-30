const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-light-background dark:bg-dark-background">
      {children}
    </div>
  );
};

export default AuthLayout;