import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";

// Components
import ProtectedRoute from "./components/ProtectedRoute";
import ScrollToTop from "./components/Scroll up/Scroll";

// Layouts
import UserLayout from "./components/Layouts/UserLayout";
import AdminLayout from "./components/Layouts/AdminLayout";
import AuthLayout from "./components/Layouts/AuthLayout";

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

function App() {
  return (
    <AuthProvider>
      <ScrollToTop />
      
      <Routes>
        {/* ===== Public Routes with User Layout ===== */}
        <Route path="/" element={<UserLayout><Home /></UserLayout>} />
        <Route path="/about" element={<UserLayout><About /></UserLayout>} />
        <Route path="/contact" element={<UserLayout><Contact /></UserLayout>} />
        <Route path="/cars" element={<UserLayout><Cars /></UserLayout>} />
        <Route path="/pricing" element={<UserLayout><Pricing /></UserLayout>} />
        <Route path="/cars/:carID" element={<UserLayout><CarDetails /></UserLayout>} />

        {/* ===== Auth Routes (Login/Register) with Auth Layout ===== */}
        <Route path="/login" element={<AuthLayout><Login /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><Register /></AuthLayout>} />

        {/* ===== Protected User Routes with User Layout ===== */}
        <Route
          path="/wallet"
          element={
            <ProtectedRoute>
              <UserLayout><Wallet /></UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/favourites"
          element={
            <ProtectedRoute>
              <UserLayout><Favourites /></UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/booking"
          element={
            <ProtectedRoute>
              <UserLayout><Booking /></UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/paymentdetails"
          element={
            <ProtectedRoute>
              <UserLayout><PaymentDetails /></UserLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/paymentmethods"
          element={
            <ProtectedRoute>
              <UserLayout><PaymentMethods /></UserLayout>
            </ProtectedRoute>
          }
        />

        {/* ===== Protected Admin Routes with Admin Layout ===== */}
        <Route
          path="/AdminDashboard"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><AdminDashboard /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/AddNewCar"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><AddNewCar /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/CarManagement"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><CarManagement /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/EditCar"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><EditCar /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/CarManagement/:carID"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><ViewCarDetails /></AdminLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/BookingDetails"
          element={
            <ProtectedRoute adminOnly={true}>
              <AdminLayout><BookingDetails /></AdminLayout>
            </ProtectedRoute>
          }
        />

        {/* Redirect or 404 */}
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<UserLayout><NotFound /></UserLayout>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;