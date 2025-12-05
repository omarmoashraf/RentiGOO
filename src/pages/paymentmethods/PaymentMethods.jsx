import { Link, useLocation, Navigate } from "react-router-dom";
import Booking from "./bookingSummary/Booking";
import Payment from "./paymentSummary/Payment";
import Customer from "./customerInformation/Customer";
import Important from "./importantInformation/Important";
import { FaCheckCircle, FaPrint, FaHeart } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const PaymentMethods = () => {
  const { state } = useLocation();
  const raw = state?.bookingData;

  // If the page is opened directly without state, send back to booking
  if (!raw) {
    return <Navigate to="/booking" replace />;
  }

  const days = (() => {
    if (!raw.startDate || !raw.endDate) return 0;
    const diff =
      (new Date(raw.endDate).getTime() - new Date(raw.startDate).getTime()) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.ceil(diff) : 0;
  })();

  const normalizedBooking = {
    reference:
      raw.booking?._id ||
      raw.booking?.id ||
      raw.booking?.reference ||
      "BOOKING",
    car: {
      name: raw.car?.name || "Booked Vehicle",
      type: raw.car?.type || raw.car?.category || "",
      image:
        raw.car?.image ||
        (Array.isArray(raw.car?.images) && raw.car.images[0]) ||
        "https://via.placeholder.com/320x200.png?text=Vehicle",
      transmission:
        raw.car?.specs?.transmission || raw.car?.transmission || "Automatic",
      seats: raw.car?.specs?.seats || raw.car?.seats || "4 Seats",
      package: raw.car?.package || "Standard",
    },
    pickup: {
      date: raw.startDate || "TBD",
      time: "10:00 AM",
      location: raw.car?.location || "Pickup location",
    },
    return: {
      date: raw.endDate || "TBD",
      time: "10:00 AM",
      location: raw.car?.location || "Return location",
    },
    customer: {
      name: raw.booking?.user?.name || "Customer",
      email: raw.booking?.user?.email || "example@email.com",
      phone: raw.booking?.user?.phone || "+1 (555) 123-4567",
      duration: days > 0 ? `${days} days` : "Duration",
    },
    payment: {
      vehicle: raw.totalPrice || 0,
      insurance: 0,
      tax: 0,
      service: 0,
      total: raw.totalPrice || 0,
      method: raw.method || "Card payment",
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20 w-full max-w-full dark:bg-dark-background">
      <div className="w-full flex flex-col items-center text-center mb-4">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-1 dark:text-dark-header_text">
          Payment Successful!
        </h2>
        <p className="text-gray-600 max-w-md dark:text-dark-secondary_text">
          Your booking has been confirmed. We've sent a confirmation email to
          your inbox.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-8 w-full">
        <div className="flex-1 flex flex-col gap-6">
          <Booking bookingData={normalizedBooking} />
          <Customer bookingData={normalizedBooking} />
          <Important />

          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <Link to="/">
              <Button
                color="blue"
                className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500"
              >
                Back to Home
              </Button>
            </Link>

            <Button
              variant="outlined"
              color="blue"
              className="flex items-center gap-2 px-6 py-2"
            >
              <FaHeart /> Add to Favorites
            </Button>

            <Button
              variant="outlined"
              color="blue"
              className="flex items-center gap-2 px-6 py-2"
            >
              <FaPrint /> Print Confirmation
            </Button>
          </div>
        </div>

        <div className="w-full lg:w-[30%] h-fit sticky top-10 self-start">
          <Payment bookingData={normalizedBooking} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
