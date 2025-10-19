import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/notfound/NotFound";
import Cars from "./pages/cars/Cars";
import CarDetails from "./pages/cardetails/CarDetails";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Favourites from "./pages/favourites/Favourites";
import Booking from "./pages/booking/Booking";
import PaymentDetails from "./pages/paymentdetails/PaymentDetails";
import PaymentMethods from "./pages/paymentmethods/PaymentMethods";
import Pricing from "./pages/pricing/Pricing";
import Wallet from "./pages/wallet/Wallet";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const hideLayout =
    location.pathname === "/login" || location.pathname === "/register";

  return (
    <div>
      {!hideLayout && <Header />}
      <main className={`${!hideLayout ? "pt-24" : ""}`}>  {/* this for appear on top pages and disappear in login and resgister */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="/paymentmethods" element={<PaymentMethods />} />
          <Route path="/cardetails" element={<CarDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
