import Header from "../Header";
import Footer from "../Footer";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="pt-20 bg-light-background dark:bg-dark-background">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;