import { useState, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookingStepper from "../../components/bookingCards/BookingStepper";
import { useAuth } from "../../context/AuthContext";
import { createBooking } from "../../services/bookings";

const Booking = () => {
  const location = useLocation();
  const { user, token } = useAuth();
  const navigate = useNavigate();

  const selectedCar = location.state?.car || null;

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState("");

  const dailyPrice = useMemo(
    () =>
      Number(
        selectedCar?.price ??
          selectedCar?._raw?.price ??
          selectedCar?.dailyPrice ??
          0
      ),
    [selectedCar]
  );

  const totalPrice = useMemo(() => {
    if (!startDate || !endDate || !dailyPrice) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const msInDay = 1000 * 60 * 60 * 24;
    const diff = Math.ceil((end - start) / msInDay);
    if (!Number.isFinite(diff) || diff <= 0) return 0;
    return diff * dailyPrice;
  }, [startDate, endDate, dailyPrice]);

  const datesValid = useMemo(() => {
    if (!startDate || !endDate) return false;
    const start = new Date(startDate);
    const end = new Date(endDate);
    return end > start;
  }, [startDate, endDate]);

  const canProceed = !!selectedCar && !!startDate && !!endDate && datesValid;

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

    const userId = user?.id || user?._id || user?.userId;
    if (!userId) {
      setSubmitError("Please sign in again to continue with your booking.");
      return;
    }

    const carId =
      selectedCar._id ||
      selectedCar.id ||
      selectedCar._raw?._id ||
      selectedCar._raw?.externalId ||
      null;
    if (!carId) {
      setSubmitError(
        "Selected vehicle is invalid for booking. Please re-open the car details and try again."
      );
      return;
    }

    const payload = {
      user: userId,
      car: carId,
      startDate,
      endDate,
      totalPrice,
    };

    try {
      setSubmitting(true);
      const res = await createBooking(payload, token);
      const booking = res?.booking || res;
      setSubmitSuccess("Booking created successfully.");
      navigate("/paymentdetails", {
        state: { booking, car: selectedCar, startDate, endDate, totalPrice },
      });
    } catch (err) {
      setSubmitError(err.message || "Failed to create booking");
    } finally {
      setSubmitting(false);
    }
  };

  if (!selectedCar) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-4">
        <h1 className="text-3xl font-bold text-light-primary_text dark:text-dark-header_text">
          No car selected
        </h1>
        <p className="text-gray-600 dark:text-dark-secondary_text">
          Pick a car to book first. You can choose one from our catalogue.
        </p>
        <Link
          className="px-4 py-2 rounded-lg bg-light-Buttons text-light-primary_text font-semibold"
          to="/cars"
        >
          Browse cars
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center items-top mt-4">
        <div className="p-1 w-4/5 text-center">
          <h1 className=" font-bold mb-1 text-4xl text-light-primary_text dark:text-dark-header_text">
            Complete Your Booking
          </h1>
          <p className="mb-6 text-gray-600">
            Reserve your premium vehicle with our simple 2-step booking process
          </p>
        </div>
      </div>
      <BookingStepper
        car={selectedCar}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        totalPrice={totalPrice}
        submitting={submitting}
        submitError={submitError}
        submitSuccess={submitSuccess}
        canProceed={canProceed}
        onSubmitBooking={handleSubmitBooking}
      />
    </div>
  );
};

export default Booking;
