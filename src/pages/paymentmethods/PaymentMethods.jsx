import { Link, useLocation, Navigate } from "react-router-dom";
import Booking from "./bookingSummary/Booking";
import Payment from "./paymentSummary/Payment";
import Customer from "./customerInformation/Customer";
import Important from "./importantInformation/Important";
import { FaCheckCircle, FaPrint, FaHeart } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const PaymentMethods = () => {
  const { state } = useLocation();
  const bookingData = state?.bookingData;

  // If the page is opened directly without state, send back to booking
  if (!bookingData) {
    return <Navigate to="/booking" replace />;
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-20 w-full max-w-full">
      <div className="w-full flex flex-col items-center text-center mb-4">
        <FaCheckCircle className="text-green-500 text-5xl mb-4" />
        <h2 className="text-2xl font-bold text-gray-800 mb-1">
          Payment Successful!
        </h2>
        <p className="text-gray-600 max-w-md">
          Your booking has been confirmed. We've sent a confirmation email to
          your inbox.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 p-4 sm:p-6 md:p-8 w-full">
        <div className="flex-1 flex flex-col gap-6">
          <Booking bookingData={bookingData} />
          <Customer bookingData={bookingData} />
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
          <Payment bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
