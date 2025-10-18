import { Link } from "react-router-dom";
import { Card, Typography, Button } from "@material-tailwind/react";
import { FaCheckCircle } from "react-icons/fa";

const Order = () => {
  const orderValues = {
    carImage:
      "https://www.usnews.com/object/image/00000191-ba19-d7a3-a99b-fb1952050000/p90505005-2.jpeg?update-time=1725404107264&size=responsiveGallery&format=webp",
    carName: "BMW 5 Series",
    carType: "Luxury Sedan",
    pickupDate: "Dec 20, 2024",
    returnDate: "Dec 24, 2024",
    durationDays: 4,
    dailyPrice: 89,
    insurance: 25.0,
    taxPercent: 12,
    serviceFee: 15.0,
  };

  const rentalCost = orderValues.dailyPrice * orderValues.durationDays;
  const taxAmount = (rentalCost * orderValues.taxPercent) / 100;
  const total =
    rentalCost + orderValues.insurance + taxAmount + orderValues.serviceFee;

  return (
    <Card className="p-6 shadow-md rounded-xl bg-white w-full md:w-[350px]">
      <Typography variant="h6" className="font-semibold mb-4">
        Order Summary
      </Typography>

      <div className="flex items-center gap-3 mb-4">
        <img
          src={orderValues.carImage}
          alt={orderValues.carName}
          className="w-20 h-16 rounded-md object-cover"
        />
        <div>
          <Typography variant="h6">{orderValues.carName}</Typography>
          <Typography color="gray" variant="small">
            {orderValues.carType}
          </Typography>
        </div>
      </div>

      <div className="space-y-1 mb-4">
        <div className="flex justify-between">
          <Typography color="gray">Pickup:</Typography>
          <Typography className="font-medium">
            {orderValues.pickupDate}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography color="gray">Return:</Typography>
          <Typography className="font-medium">
            {orderValues.returnDate}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography color="gray">Duration:</Typography>
          <Typography className="font-medium">
            {orderValues.durationDays} days
          </Typography>
        </div>
      </div>

      <hr className="my-3" />

      <div className="space-y-1 mb-4">
        <div className="flex justify-between">
          <Typography color="gray">
            ${orderValues.dailyPrice} × {orderValues.durationDays} days
          </Typography>
          <Typography className="font-medium">
            ${rentalCost.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography color="gray">Insurance</Typography>
          <Typography className="font-medium">
            ${orderValues.insurance.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography color="gray">Tax ({orderValues.taxPercent}%)</Typography>
          <Typography className="font-medium">
            ${taxAmount.toFixed(2)}
          </Typography>
        </div>
        <div className="flex justify-between">
          <Typography color="gray">Service Fee</Typography>
          <Typography className="font-medium">
            ${orderValues.serviceFee.toFixed(2)}
          </Typography>
        </div>
      </div>

      <hr className="my-3" />

      <div className="flex justify-between text-lg font-semibold mb-4">
        <span>Total</span>
        <span className="text-blue-600">${total.toFixed(2)}</span>
      </div>

      <div className="text-sm text-gray-600 space-y-2 mb-4">
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span>Free cancellation until 24h before pickup</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span>Comprehensive insurance included</span>
        </div>
        <div className="flex items-center gap-2">
          <FaCheckCircle className="w-5 h-5 text-green-600" />
          <span>24/7 roadside assistance</span>
        </div>
      </div>
      <Link to="/paymentmethods">
        <Button
          color="blue"
          fullWidth
          className="font-semibold bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          Complete Payment
        </Button>
      </Link>
    </Card>
  );
};

export default Order;
