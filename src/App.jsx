import React from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/Scroll up/Scroll";

// Pages - Public
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/cardetails/CarDetails";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Pricing from "./pages/pricing/Pricing";

// Pages - User Protected
import Favourites from "./pages/favourites/Favourites";
import Booking from "./pages/booking/Booking";
import PaymentDetails from "./pages/paymentdetails/PaymentDetails";
import PaymentMethods from "./pages/paymentmethods/PaymentMethods";
import Wallet from "./pages/wallet/Wallet";

// Pages - Admin Protected
import AddNewCar from "./pages/Admin/AddNewCar";
import AdminDashboard from "./pages/Admin/AdminDashboard";
import CarManagement from "./pages/Admin/CarManagement";
import EditCar from "./pages/Admin/EditCar";
import ViewCarDetails from "./pages/Admin/ViewCarDetails";
import BookingDetails from "./pages/Admin/BookingDetails";

const AppContent = () => {
  const location = useLocation();

  // Hide header & footer in specific routes
  const hideLayout =
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/carmanagement" ||
    location.pathname === "/booking" ||
    location.pathname === "/addnewcar" ||
    location.pathname === "/admindashboard";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header (hidden on some pages) */}
      {!hideLayout && <Header />}

      {/* Main Content */}
      <main
        className={`flex-1 ${
          !hideLayout ? "pt-20" : ""
        } bg-light-background dark:bg-dark-background`}
      >
        {/* Auto-scroll to top on route change */}
        <ScrollToTop />

        <Routes>
          {/* ===== Public Routes ===== */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/cars/:carID" element={<CarDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ===== Protected User Routes ===== */}
          <Route
            path="/wallet"
            element={
              <ProtectedRoute>
                <Wallet />
              </ProtectedRoute>
            }
          />
          <Route
            path="/favourites"
            element={
              <ProtectedRoute>
                <Favourites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/booking"
            element={
              <ProtectedRoute>
                <Booking />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentdetails"
            element={
              <ProtectedRoute>
                <PaymentDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/paymentmethods"
            element={
              <ProtectedRoute>
                <PaymentMethods />
              </ProtectedRoute>
            }
          />

          {/* ===== Protected Admin Routes ===== */}
          <Route
            path="/admindashboard"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/addnewcar"
            element={
              <ProtectedRoute adminOnly={true}>
                <AddNewCar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/carmanagement"
            element={
              <ProtectedRoute adminOnly={true}>
                <CarManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/editcar"
            element={
              <ProtectedRoute adminOnly={true}>
                <EditCar />
              </ProtectedRoute>
            }
          />
          <Route
            path="/carmanagement/:carID"
            element={
              <ProtectedRoute adminOnly={true}>
                <ViewCarDetails />
              </ProtectedRoute>
            }
          />
          <Route
            path="/bookingdetails"
            element={
              <ProtectedRoute adminOnly={true}>
                <BookingDetails />
              </ProtectedRoute>
            }
          />

          {/* Redirect or 404 */}
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* Footer (hidden on some pages) */}
      {!hideLayout && <Footer />}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;
