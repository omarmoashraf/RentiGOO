// src/pages/booking/BookingConfirmation.jsx
import React from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { 
  CheckCircle, 
  Calendar, 
  MapPin, 
  Car, 
  CreditCard, 
  FileText,
  Printer,
  Download,
  ArrowLeft,
  Mail
} from "lucide-react";
import { Button } from "@material-tailwind/react";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const bookingData = location.state?.bookingData;

  if (!bookingData) {
    return (
      <div className="min-h-screen dark:bg-dark-background bg-light-background flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
            <FileText className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-light-primary_text dark:text-dark-header_text">
            No Booking Details Found
          </h1>
          <p className="text-gray-600 dark:text-dark-secondary_text mb-6">
            We couldn't find any booking information. Please start a new booking.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => navigate("/cars")}
              className="bg-gradient-to-r from-light-Buttons to-light-secondary"
            >
              Browse Cars
            </Button>
            <Button
              variant="outlined"
              onClick={() => navigate("/")}
              className="border-light-Buttons text-light-Buttons dark:border-dark-Buttons dark:text-dark-Buttons"
            >
              Go Home
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Generate a booking reference
  const bookingReference = `RENTIGO-${Date.now().toString().slice(-8)}`;
  
  // Format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Calculate total days
  const totalDays = () => {
    const start = new Date(bookingData.startDate);
    const end = new Date(bookingData.endDate);
    return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
  };

  const handlePrint = () => {
    window.print();
  };

  const handleEmailReceipt = () => {
    alert("Receipt has been sent to your email!");
  };

  return (
    <div className="min-h-screen dark:bg-dark-background bg-light-background py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate("/cars")}
            className="flex items-center gap-2 text-gray-600 dark:text-dark-secondary_text hover:text-light-Buttons dark:hover:text-dark-Buttons transition-colors mb-4"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Cars</span>
          </button>
          
          <div className="text-center mb-8">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-light-primary_text dark:text-dark-header_text mb-3">
              Booking Confirmed!
            </h1>
            <p className="text-gray-600 dark:text-dark-secondary_text">
              Your booking has been successfully processed. Here are your booking details.
            </p>
            <div className="mt-4 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full inline-block">
              <span className="font-semibold">Booking Reference:</span> {bookingReference}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white dark:bg-dark-secondary rounded-2xl shadow-lg overflow-hidden mb-8">
          {/* Booking Summary Card */}
          <div className="p-6 md:p-8 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-bold dark:text-dark-header_text mb-6">Booking Summary</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Vehicle Info */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                    <Car className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold dark:text-dark-header_text">Vehicle Details</h3>
                </div>
                <div className="flex items-start gap-4">
                  {bookingData.car.image ? (
                    <img
                      src={bookingData.car.image}
                      alt={bookingData.car.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                      <Car className="h-8 w-8 text-white" />
                    </div>
                  )}
                  <div>
                    <p className="font-semibold text-lg dark:text-dark-header_text">
                      {bookingData.car.name || `${bookingData.car.make} ${bookingData.car.model}`}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                      {bookingData.car.year} • {bookingData.car.type || "Premium Vehicle"}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-dark-secondary_text mt-1">
                      Daily Rate: <span className="font-semibold">${bookingData.dailyPrice?.toFixed(2) || bookingData.car.price?.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Rental Period */}
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-dark-background">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold dark:text-dark-header_text">Rental Period</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-dark-secondary_text">Pickup Date:</span>
                    <span className="font-medium dark:text-dark-header_text">{formatDate(bookingData.startDate)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-dark-secondary_text">Return Date:</span>
                    <span className="font-medium dark:text-dark-header_text">{formatDate(bookingData.endDate)}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-dark-secondary_text">Total Days:</span>
                    <span className="font-medium dark:text-dark-header_text">{totalDays()} days</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold dark:text-dark-header_text">Pickup Location</h3>
                </div>
                <p className="text-gray-700 dark:text-dark-header_text">{bookingData.pickupLocation?.address}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Please arrive 15 minutes before your scheduled pickup time
                </p>
              </div>

              <div className="p-4 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="font-bold dark:text-dark-header_text">
                    {bookingData.sameLocation ? "Return Location" : "Drop-off Location"}
                  </h3>
                </div>
                <p className="text-gray-700 dark:text-dark-header_text">
                  {bookingData.sameLocation ? "Same as pickup location" : bookingData.returnLocation?.address}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  Vehicle must be returned by {formatDate(bookingData.endDate)} at 5:00 PM
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="h-6 w-6 text-blue-500" />
                <h3 className="font-bold dark:text-dark-header_text">Payment Details</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-secondary_text">Subtotal ({totalDays()} days)</span>
                  <span className="font-medium dark:text-dark-header_text">
                    ${(bookingData.totalPrice / totalDays() * totalDays()).toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-secondary_text">Insurance</span>
                  <span className="font-medium dark:text-dark-header_text">$25.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-dark-secondary_text">Service Fee</span>
                  <span className="font-medium dark:text-dark-header_text">$15.00</span>
                </div>
                {bookingData.payment && (
                  <div className="flex justify-between pt-2 border-t border-blue-200 dark:border-blue-700">
                    <span className="text-gray-600 dark:text-dark-secondary_text">Payment Method</span>
                    <span className="font-medium dark:text-dark-header_text capitalize">
                      {bookingData.payment.method}
                    </span>
                  </div>
                )}
                <div className="flex justify-between pt-3 border-t border-blue-200 dark:border-blue-700">
                  <span className="text-lg font-bold dark:text-dark-header_text">Total Amount Paid</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                    ${(bookingData.totalPrice + 40).toFixed(2)}
                  </span>
                </div>
                {bookingData.payment?.transactionId && (
                  <div className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Transaction ID: {bookingData.payment.transactionId}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Important Information */}
          <div className="p-6 md:p-8">
            <h2 className="text-xl font-bold dark:text-dark-header_text mb-4">Important Information</h2>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <h3 className="font-bold dark:text-dark-header_text mb-2">📋 Required Documents</h3>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-dark-secondary_text">
                  <li>• Valid driver's license (must be held for at least 2 years)</li>
                  <li>• Credit card in the driver's name for security deposit</li>
                  <li>• Proof of insurance (if using your own insurance)</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
                <h3 className="font-bold dark:text-dark-header_text mb-2">⏰ Pickup & Return Instructions</h3>
                <ul className="space-y-1 text-sm text-gray-700 dark:text-dark-secondary_text">
                  <li>• Please arrive 15 minutes before your scheduled pickup time</li>
                  <li>• Complete vehicle inspection with our staff before departure</li>
                  <li>• Return vehicle with the same fuel level as at pickup</li>
                  <li>• Late returns will incur additional charges</li>
                </ul>
              </div>

              <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h3 className="font-bold dark:text-dark-header_text mb-2">📞 Need Help?</h3>
                <p className="text-sm text-gray-700 dark:text-dark-secondary_text">
                  Contact our customer support team at <span className="font-semibold">+20 100 123 4567</span> or email <span className="font-semibold">support@rentigo.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button
            onClick={handlePrint}
            className="flex items-center justify-center gap-2 bg-gray-800 dark:bg-gray-700 hover:bg-gray-900 dark:hover:bg-gray-800"
          >
            <Printer size={18} />
            Print Booking Details
          </Button>
          <Button
            onClick={handleEmailReceipt}
            className="flex items-center justify-center gap-2 border border-light-Buttons text-light-Buttons dark:border-dark-Buttons dark:text-dark-Buttons"
          >
            <Mail size={18} />
            Email Receipt
          </Button>
          <Button
            onClick={() => navigate("/my-bookings")}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-light-Buttons to-light-secondary dark:from-dark-Buttons dark:to-dark-secondary"
          >
            <Download size={18} />
            View My Bookings
          </Button>
        </div>

        {/* Next Steps */}
        <div className="text-center text-gray-600 dark:text-dark-secondary_text">
          <p className="mb-2">A confirmation email has been sent to your registered email address.</p>
          <p>Please check your spam folder if you don't see it within 5 minutes.</p>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;