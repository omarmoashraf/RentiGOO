// src/components/bookingSteps/Step3ReviewBooking.jsx
import React from "react";
import { CheckCircle, MapPin, Car } from "lucide-react";

const Step3ReviewBooking = ({
  selectedCar,
  startDate,
  endDate,
  numberOfDays,
  dailyPrice,
  totalPrice,
  pickupLocation,
  returnLocation,
  sameLocation,
  onBack,
  onSubmit,
  submitting
}) => {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
            <CheckCircle className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-dark-header_text">
              Review & Complete Booking
            </h2>
            <p className="text-gray-600 dark:text-dark-secondary_text">
              Review your booking details before proceeding to payment
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-dark-background">
            <h3 className="font-bold dark:text-dark-header_text mb-3">Vehicle Details</h3>
            <div className="flex items-start gap-4">
              {selectedCar.image ? (
                <img
                  src={selectedCar.image}
                  alt={selectedCar.name || selectedCar.make}
                  className="w-16 h-16 rounded-lg object-cover"
                />
              ) : (
                <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                  <Car className="h-8 w-8 text-white" />
                </div>
              )}
              <div>
                <p className="font-semibold dark:text-dark-header_text">
                  {selectedCar.name || `${selectedCar.make} ${selectedCar.model}`}
                </p>
                <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                  {selectedCar.year} • {selectedCar.type || "Premium Vehicle"}
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-gray-50 dark:bg-dark-background">
            <h3 className="font-bold dark:text-dark-header_text mb-3">Rental Period</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-dark-secondary_text">Pickup:</span>
                <span className="font-medium dark:text-dark-header_text">
                  {new Date(startDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600 dark:text-dark-secondary_text">Return:</span>
                <span className="font-medium dark:text-dark-header_text">
                  {new Date(endDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
                <span className="text-gray-600 dark:text-dark-secondary_text">Duration:</span>
                <span className="font-medium dark:text-dark-header_text">
                  {numberOfDays} day{numberOfDays !== 1 ? "s" : ""}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold dark:text-dark-header_text">Pickup Location</h3>
            </div>
            <p className="text-gray-700 dark:text-dark-header_text">{pickupLocation?.address}</p>
            <button
              onClick={onBack}
              className="mt-3 text-sm text-light-Buttons dark:text-dark-Buttons hover:underline flex items-center gap-1"
            >
              <MapPin size={14} />
              Change location
            </button>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                <MapPin className="h-4 w-4 text-white" />
              </div>
              <h3 className="font-bold dark:text-dark-header_text">
                {sameLocation ? "Return Location" : "Drop-off Location"}
              </h3>
            </div>
            <p className="text-gray-700 dark:text-dark-header_text">
              {sameLocation ? "Same as pickup" : returnLocation?.address}
            </p>
            <button
              onClick={onBack}
              className="mt-3 text-sm text-light-Buttons dark:text-dark-Buttons hover:underline flex items-center gap-1"
            >
              <MapPin size={14} />
              Change location
            </button>
          </div>
        </div>

        <div className="p-6 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 mb-8">
          <h3 className="font-bold dark:text-dark-header_text mb-4">Price Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-dark-secondary_text">
                ${dailyPrice.toFixed(2)} × {numberOfDays} days
              </span>
              <span className="font-medium dark:text-dark-header_text">${(dailyPrice * numberOfDays).toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-blue-200 dark:border-blue-700">
              <span className="text-lg font-bold dark:text-dark-header_text">Total Amount</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={onSubmit}
            disabled={submitting}
            className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all text-lg ${
              !submitting
                ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            {submitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Booking...
              </div>
            ) : (
              "Proceed to Payment"
            )}
          </button>
          <button
            onClick={onBack}
            className="px-6 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text font-semibold hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
          >
            Edit Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step3ReviewBooking;