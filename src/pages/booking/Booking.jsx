// src/pages/booking/Booking.jsx
import { useState, useMemo, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, AlertCircle } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import { createBooking } from "../../services/bookings";
import BookingStepper from "../../components/bookingSteps/BookingStepper";
import Step1DateSelection from "../../components/bookingSteps/Step1DateSelection";
import Step2LocationSelection from "../../components/bookingSteps/Step2LocationSelection";
import Step3ReviewBooking from "../../components/bookingSteps/Step3ReviewBooking";
import Step4PaymentMethods from "../../components/bookingSteps/Step4PaymentMethods";

const Booking = () => {
  const location = useLocation();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const selectedCar = location.state?.car || null;

  // State variables
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");
  const [activeStep, setActiveStep] = useState(0);
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [bookingId, setBookingId] = useState(null);
  
  // Location states
  const [pickupLocation, setPickupLocation] = useState(null);
  const [returnLocation, setReturnLocation] = useState(null);
  const [sameLocation, setSameLocation] = useState(true);
  const [selectedLocationType, setSelectedLocationType] = useState("pickup");
  const [customAddress, setCustomAddress] = useState("");

  // Calculations
  const dailyPrice = useMemo(
    () => Number(selectedCar?.price ?? selectedCar?._raw?.price ?? selectedCar?.dailyPrice ?? 0),
    [selectedCar]
  );

  const totalPrice = useMemo(() => {
    if (!startDate || !endDate || !dailyPrice) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const msInDay = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((end - start) / msInDay);
    return diff > 0 ? diff * dailyPrice : 0;
  }, [startDate, endDate, dailyPrice]);

  const datesValid = useMemo(() => {
    if (!startDate || !endDate) return false;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return end > start;
  }, [startDate, endDate]);

  const numberOfDays = useMemo(() => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const msInDay = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((end - start) / msInDay);
    return diff > 0 ? diff : 0;
  }, [startDate, endDate]);

  const canProceed = useMemo(() => {
    switch (activeStep) {
      case 0:
        return !!selectedCar && !!startDate && !!endDate && datesValid;
      case 1:
        return !!pickupLocation && (sameLocation || returnLocation);
      case 2:
        return true; // Always can proceed to payment
      case 3:
        return !submitting && !paymentCompleted;
      default:
        return false;
    }
  }, [activeStep, selectedCar, startDate, endDate, datesValid, pickupLocation, sameLocation, returnLocation, submitting, paymentCompleted]);

  const handleNextStep = () => {
    if (activeStep < 3 && canProceed) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  const handleStepClick = (stepIndex) => {
    if (stepIndex <= activeStep) {
      setActiveStep(stepIndex);
    }
  };

  const handleSubmitBooking = async () => {
    setSubmitError("");
    setSubmitSuccess("");

    if (!selectedCar || !startDate || !endDate) {
      setSubmitError("Select start and end dates before continuing.");
      return;
    }

    if (!datesValid) {
      setSubmitError("End date must be after start date.");
      return;
    }

    if (!pickupLocation) {
      setSubmitError("Please select a pickup location.");
      return;
    }

    if (!sameLocation && !returnLocation) {
      setSubmitError("Please select a return location.");
      return;
    }

    const userId = user?.id || user?._id || user?.userId;
    if (!userId) {
      setSubmitError("Please sign in again to continue with your booking.");
      return;
    }

    const carId = selectedCar._id || selectedCar.id || selectedCar._raw?._id || selectedCar._raw?.externalId || null;
    if (!carId) {
      setSubmitError("Selected vehicle is invalid for booking. Please re-open the car details and try again.");
      return;
    }

    const payload = {
      user: userId,
      car: carId,
      startDate,
      endDate,
      totalPrice,
      pickupLocation,
      returnLocation: sameLocation ? pickupLocation : returnLocation,
      sameLocation,
    };

    try {
      setSubmitting(true);
      const res = await createBooking(payload, token);
      const booking = res?.booking || res;
      setBookingId(booking._id || booking.id);
      setSubmitSuccess("Booking created successfully! Proceeding to payment...");
      setTimeout(() => {
        setActiveStep(3); // Move to payment step
        setSubmitting(false);
      }, 1500);
    } catch (err) {
      setSubmitError(err.message || "Failed to create booking. Please try again.");
      setSubmitting(false);
    }
  };

  // In Booking.jsx, make sure this function exists:
const handlePaymentComplete = (paymentData) => {
  setPaymentCompleted(true);
  setSubmitSuccess(`Payment successful! Transaction ID: ${paymentData.transactionId}`);
  
  // Navigate to confirmation page
  navigate("/booking-confirmation", {
    state: {
      bookingData: {
        bookingId,
        car: selectedCar,
        startDate,
        endDate,
        totalPrice,
        dailyPrice,
        pickupLocation,
        returnLocation: sameLocation ? pickupLocation : returnLocation,
        sameLocation,
        payment: paymentData
      }
    }
  });
};

  // Clear success/error messages after 5 seconds
  useEffect(() => {
    if (submitSuccess || submitError) {
      const timer = setTimeout(() => {
        setSubmitSuccess("");
        setSubmitError("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [submitSuccess, submitError]);

  if (!selectedCar) {
    return (
      <div className="min-h-screen dark:bg-dark-background bg-light-background transition-colors duration-200">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
              <AlertCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-light-primary_text dark:text-dark-header_text mb-4">
              No Car Selected
            </h1>
            <p className="text-gray-600 dark:text-dark-secondary_text text-lg mb-8 max-w-md mx-auto">
              You need to select a vehicle from our premium collection before proceeding with booking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary text-white font-semibold hover:opacity-90 transition-opacity shadow-lg"
                to="/cars"
              >
                Browse Premium Cars
              </Link>
              <Link
                className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text font-semibold hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
                to="/"
              >
                Return to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-dark-background bg-light-background transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Car Details</span>
          </button>
        </div>

        {/* Main Heading */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent mb-4">
              Complete Your Booking
            </h1>
            <p className="text-gray-600 dark:text-dark-secondary_text text-base sm:text-lg max-w-2xl mx-auto">
              Reserve your premium vehicle with our simple booking process
            </p>
          </div>

          {/* Stepper */}
          <BookingStepper activeStep={activeStep} onStepClick={handleStepClick} />

          {/* Step Content */}
          <div className="max-w-4xl mx-auto">
            {activeStep === 0 && (
              <Step1DateSelection
                startDate={startDate}
                setStartDate={setStartDate}
                endDate={endDate}
                setEndDate={setEndDate}
                dailyPrice={dailyPrice}
                totalPrice={totalPrice}
                datesValid={datesValid}
                numberOfDays={numberOfDays}
                onNext={handleNextStep}
              />
            )}

            {activeStep === 1 && (
              <Step2LocationSelection
                pickupLocation={pickupLocation}
                setPickupLocation={setPickupLocation}
                returnLocation={returnLocation}
                setReturnLocation={setReturnLocation}
                sameLocation={sameLocation}
                setSameLocation={setSameLocation}
                selectedLocationType={selectedLocationType}
                setSelectedLocationType={setSelectedLocationType}
                customAddress={customAddress}
                setCustomAddress={setCustomAddress}
                onBack={handlePrevStep}
                onNext={handleNextStep}
              />
            )}

            {activeStep === 2 && (
              <Step3ReviewBooking
                selectedCar={selectedCar}
                startDate={startDate}
                endDate={endDate}
                numberOfDays={numberOfDays}
                dailyPrice={dailyPrice}
                totalPrice={totalPrice}
                pickupLocation={pickupLocation}
                returnLocation={returnLocation}
                sameLocation={sameLocation}
                onBack={handlePrevStep}
                onSubmit={handleSubmitBooking}
                submitting={submitting}
              />
            )}

            {activeStep === 3 && (
              <Step4PaymentMethods
                totalPrice={totalPrice}
                bookingData={{
                  car: selectedCar,
                  startDate,
                  endDate,
                  pickupLocation,
                  returnLocation: sameLocation ? pickupLocation : returnLocation,
                  sameLocation
                }}
                onBack={handlePrevStep}
                onCompletePayment={handlePaymentComplete}
              />
            )}
          </div>
        </div>

        {/* Success/Error Messages */}
        {(submitSuccess || submitError) && (
          <div className="fixed bottom-6 right-6 max-w-sm z-50">
            <div
              className={`p-4 rounded-xl shadow-2xl border ${
                submitSuccess
                  ? "bg-green-50 dark:bg-green-900/30 border-green-200 dark:border-green-800"
                  : "bg-red-50 dark:bg-red-900/30 border-red-200 dark:border-red-800"
              }`}
            >
              <div className="flex items-start gap-3">
                {submitSuccess ? (
                  <AlertCircle className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0" />
                ) : (
                  <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400 flex-shrink-0" />
                )}
                <div className="flex-1">
                  <p className={`font-semibold ${
                    submitSuccess
                      ? "text-green-800 dark:text-green-300"
                      : "text-red-800 dark:text-red-300"
                  }`}>
                    {submitSuccess ? "Success!" : "Error"}
                  </p>
                  <p className={`text-sm mt-1 ${
                    submitSuccess
                      ? "text-green-700 dark:text-green-400"
                      : "text-red-700 dark:text-red-400"
                  }`}>
                    {submitSuccess || submitError}
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitSuccess("");
                    setSubmitError("");
                  }}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;