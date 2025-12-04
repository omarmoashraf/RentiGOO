import { Link, useLocation } from "react-router-dom";
import { useState, useMemo } from "react";
import Method from "./paymentMethod/Method";
import Billing from "./billingAddress/Billing";
import Secure from "./secure/Secure";
import Order from "./orderSummary/Order";
import { Button } from "@material-tailwind/react";
import { FaArrowLeft } from "react-icons/fa";

const PaymentDetails = ({
  bookingData,
  onConfirm,
  submitting = false,
  submitError = "",
  submitSuccess = "",
}) => {
  const location = useLocation();
  const [method, setMethod] = useState("card");
  const [sameAddress, setSameAddress] = useState(false);

  const derivedBooking = useMemo(() => {
    const stateData = location.state || {};
    const payload = bookingData || stateData;
    const car = payload?.car || payload?.booking?.car || stateData?.car;

    return {
      car,
      startDate: payload?.startDate || stateData?.startDate || "",
      endDate: payload?.endDate || stateData?.endDate || "",
      totalPrice: payload?.totalPrice || stateData?.totalPrice || 0,
      booking: payload?.booking || stateData?.booking || null,
    };
  }, [bookingData, location.state]);

  return (
    <div className="flex flex-col lg:flex-row gap-8 p-8 bg-light-background dark:bg-dark-background min-h-screen pt-20">
      <div className="flex-1 flex flex-col gap-6">
        <div className="flex items-center justify-between  flex-wrap">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-dark-header_text">
              Payment Details
            </h1>
            <p className="text-gray-500">Secure payment processing</p>
          </div>
          <Link to="/booking">
            <Button
              color="blue"
              variant="outlined"
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold "
            >
              <FaArrowLeft /> Back to Booking
            </Button>
          </Link>
        </div>

        <Method method={method} setMethod={setMethod} />
        <Billing sameAddress={sameAddress} setSameAddress={setSameAddress} />
        <Secure />
      </div>

      <div className="w-full lg:w-[30%] h-fit sticky top-10 self-start">
        <Order
          bookingData={derivedBooking}
          onConfirm={onConfirm}
          submitting={submitting}
          submitError={submitError}
          submitSuccess={submitSuccess}
        />
      </div>
    </div>
  );
};

export default PaymentDetails;
