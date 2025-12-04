import { Link } from "react-router-dom";
import { Card, Typography, Button } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";

function getDurationDays(startDate, endDate) {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const diff = Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 0;
}

const Order = ({
  bookingData,
  onConfirm,
  submitting = false,
  submitError = "",
  submitSuccess = "",
}) => {
  const defaultValues = {
    carImage:
      "https://www.usnews.com/object/image/00000191-ba19-d7a3-a99b-fb1952050000/p90505005-2.jpeg?update-time=1725404107264&size=responsiveGallery&format=webp",
    carName: "BMW 5 Series",
    carType: "Luxury Sedan",
    startDate: "2024-12-20",
    endDate: "2024-12-24",
    durationDays: 4,
    dailyPrice: 89,
    insurance: 25.0,
    taxPercent: 12,
    serviceFee: 15.0,
  };

  const durationDays =
    getDurationDays(bookingData?.startDate, bookingData?.endDate) ||
    defaultValues.durationDays;

  const dailyPrice =
    bookingData?.car?.price ??
    bookingData?.booking?.totalPrice ??
    bookingData?.totalPrice ??
    defaultValues.dailyPrice;

  const orderValues = {
    carImage:
      bookingData?.car?.image ||
      (Array.isArray(bookingData?.car?.images) &&
        bookingData?.car?.images[0]) ||
      defaultValues.carImage,
    carName: bookingData?.car?.name || defaultValues.carName,
    carType: bookingData?.car?.type || defaultValues.carType,
    pickupDate:
      bookingData?.startDate ||
      defaultValues.startDate ||
      bookingData?.booking?.startDate,
    returnDate:
      bookingData?.endDate ||
      defaultValues.endDate ||
      bookingData?.booking?.endDate,
    durationDays,
    dailyPrice,
    insurance: defaultValues.insurance,
    taxPercent: defaultValues.taxPercent,
    serviceFee: defaultValues.serviceFee,
  };

  const rentalCost = orderValues.dailyPrice * orderValues.durationDays;
  const taxAmount = (rentalCost * orderValues.taxPercent) / 100;
  const totalFromBooking = bookingData?.totalPrice || bookingData?.booking?.totalPrice;
  const total =
    typeof totalFromBooking === "number" && totalFromBooking > 0
      ? totalFromBooking
      : rentalCost + orderValues.insurance + taxAmount + orderValues.serviceFee;

  return (
    <Card className="p-6 shadow-md rounded-xl bg-white dark:bg-dark-background w-full md:w-[350px]">
      <Typography variant="h6" className="font-semibold mb-4 text-light-primary_text dark:text-dark-header_text">
        Order Summary
      </Typography>

      <div className="flex items-center gap-3 mb-4 text-light-secondary_text dark:text-dark-secondary_text">
        <img
          src={orderValues.carImage}
          alt={orderValues.carName}
          className="w-20 h-16 rounded-md object-cover "
        />
        <div className="">
          <Typography variant="h6">{orderValues.carName}</Typography>
          <Typography color="gray" variant="small">
            {orderValues.carType}
          </Typography>
        </div>
      </div>

      <div className="space-y-1 mb-4">
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">Pickup:</Typography>
          <Typography className="font-medium">
            {orderValues.pickupDate}
          </Typography>
        </div>
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">Return:</Typography>
          <Typography className="font-medium ">
            {orderValues.returnDate}
          </Typography>
        </div>
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">Duration:</Typography>
          <Typography className="font-medium">
            {orderValues.durationDays} days
          </Typography>
        </div>
      </div>

      <hr className="my-3" />

      <div className="space-y-1 mb-4">
        <div className="flex justify-between">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">
            ${orderValues.dailyPrice} × {orderValues.durationDays} days
          </Typography>
          <Typography className="font-medium text-light-primary_text dark:text-dark-secondary_text">
            ${rentalCost.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">Insurance</Typography>
          <Typography className="font-medium text-light-primary_text dark:text-dark-secondary_text">
            ${orderValues.insurance.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray"className="text-light-primary_text dark:text-dark-secondary_text">Tax ({orderValues.taxPercent}%)</Typography>
          <Typography className="font-medium text-light-primary_text dark:text-dark-secondary_text">
            ${taxAmount.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between text-light-primary_text dark:text-dark-secondary_text">
          <Typography color="gray" className="text-light-primary_text dark:text-dark-secondary_text">Service Fee</Typography>
          <Typography className="font-medium text-light-primary_text dark:text-dark-secondary_text">
            ${orderValues.serviceFee.toFixed(2)}
          </Typography>
        </div>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-semibold mb-4 text-light-primary_text dark:text-dark-secondary_text">
        <span>Total</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>

      <div className="text-sm text-gray-600 space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-light-primary_text dark:text-dark-secondary_text">Free cancellation until 24h before pickup</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-light-primary_text dark:text-dark-secondary_text">Comprehensive insurance included</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-light-primary_text dark:text-dark-secondary_text">24/7 roadside assistance</span>
        </div>
      </div>
      {submitError && (
        <div className="text-red-600 text-sm mb-2">{submitError}</div>
      )}
      {submitSuccess && (
        <div className="text-green-600 text-sm mb-2">{submitSuccess}</div>
      )}
      {onConfirm ? (
        <Button
          color="blue"
          fullWidth
          disabled={submitting}
          onClick={onConfirm}
          className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          {submitting ? "Submitting booking..." : "Confirm Booking"}
        </Button>
      ) : (
        <Link to="/paymentmethods">
          <Button
            color="blue"
            fullWidth
            className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500"
          >
            Continue
          </Button>
        </Link>
      )}
    </Card>
  );
};

export default Order;
