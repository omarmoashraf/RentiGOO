import Booking from "./bookingSummary/Booking";
import Payment from "./paymentSummary/Payment";
import Customer from "./customerInformation/Customer";
import Important from "./importantInformation/Important";
import { FaCheckCircle, FaPrint, FaHeart } from "react-icons/fa";
import { Button } from "@material-tailwind/react";

const PaymentMethods = () => {
  const bookingData = {
    reference: "RNT-2024-001234",
    car: {
      name: "BMW 5 Series",
      type: "Luxury Sedan",
      image:
        "https://www.usnews.com/object/image/00000191-ba19-d7a3-a99b-fb1952050000/p90505005-2.jpeg?update-time=1725404107264&size=responsiveGallery&format=webp",
      transmission: "Automatic",
      seats: "5 Seats",
      package: "Premium",
    },
    pickup: {
      date: "Dec 20, 2024",
      time: "10:00 AM",
      location: "Downtown Office - 123 Main St",
    },
    return: {
      date: "Dec 24, 2024",
      time: "10:00 AM",
      location: "Downtown Office - 123 Main St",
    },
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      duration: "4 days",
    },
    payment: {
      vehicle: 356.0,
      insurance: 25.0,
      tax: 42.72,
      service: 15.0,
      total: 438.72,
      method: "Visa ending in ****4567",
    },
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* الجزء العلوي full width */}
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

      {/* الجزء الرئيسي */}
      <div className="flex flex-col lg:flex-row gap-2 sm:gap-4 md:gap-8 p-4 sm:p-6 md:p-8 w-full max-w-full">
        {/* العمود الرئيسي */}
        <div className="flex-1 flex flex-col gap-6 w-full max-w-full">
          <Booking bookingData={bookingData} />
          <Customer bookingData={bookingData} />
          <Important />

          <div className="flex flex-wrap gap-4 mt-4 justify-center lg:justify-start">
            <Button
              color="blue"
              className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-500"
            >
              Back to Home
            </Button>

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

        {/* sidebar Payment Summary */}
        <div className="w-full lg:w-[30%] max-w-full h-fit sticky top-10 self-start lg:pl-4">
          <Payment bookingData={bookingData} />
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;
