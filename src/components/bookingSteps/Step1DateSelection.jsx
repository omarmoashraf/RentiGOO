// src/components/bookingSteps/Step1DateSelection.jsx
import React from "react";
import { Calendar, Navigation, AlertCircle } from "lucide-react";

const Step1DateSelection = ({ 
  startDate, 
  setStartDate, 
  endDate, 
  setEndDate,
  dailyPrice,
  totalPrice,
  datesValid,
  numberOfDays,
  onNext
}) => {
  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 6);
    return maxDate.toISOString().split("T")[0];
  };

  const handleQuickSelect = (days) => {
    const today = new Date();
    const end = new Date();
    end.setDate(today.getDate() + days);
    
    setStartDate(today.toISOString().split("T")[0]);
    setEndDate(end.toISOString().split("T")[0]);
  };

  const quickSelectOptions = [
    { days: 1, label: "1 Day" },
    { days: 3, label: "3 Days" },
    { days: 7, label: "1 Week" },
    { days: 14, label: "2 Weeks" },
    { days: 30, label: "1 Month" },
  ];

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
            <Calendar className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-dark-header_text">
              Select Rental Dates
            </h2>
            <p className="text-gray-600 dark:text-dark-secondary_text">
              Choose when you want to pick up and return the vehicle
            </p>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium dark:text-dark-header_text mb-3">
            Quick Select Duration:
          </p>
          <div className="flex flex-wrap gap-3">
            {quickSelectOptions.map((option) => (
              <button
                key={option.days}
                onClick={() => handleQuickSelect(option.days)}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text hover:border-light-Buttons dark:hover:border-dark-Buttons hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-sm font-medium"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
              Pick-up Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text" size={20} />
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                min={getMinDate()}
                max={getMaxDate()}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
              Return Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text" size={20} />
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate || getMinDate()}
                max={getMaxDate()}
                disabled={!startDate}
                className={`w-full pl-12 pr-4 py-3 border rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all ${
                  !startDate
                    ? "border-gray-300 dark:border-gray-600 opacity-60 cursor-not-allowed"
                    : "border-gray-300 dark:border-gray-600"
                }`}
              />
            </div>
          </div>
        </div>

        {startDate && endDate && !datesValid && (
          <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 mb-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-red-800 dark:text-red-300">
                  Invalid Date Selection
                </p>
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">
                  Return date must be after pick-up date.
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="flex justify-end">
          <button
            onClick={onNext}
            disabled={!startDate || !endDate || !datesValid}
            className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              startDate && endDate && datesValid
                ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Locations
            <Navigation size={18} />
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-lg">
        <h3 className="text-xl font-bold dark:text-dark-header_text mb-6">
          Booking Summary
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-dark-secondary_text">Daily Rate</span>
            <span className="font-semibold dark:text-dark-header_text">
              ${dailyPrice.toFixed(2)}/day
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600 dark:text-dark-secondary_text">Rental Duration</span>
            <span className="font-semibold dark:text-dark-header_text">
              {numberOfDays} day{numberOfDays !== 1 ? "s" : ""}
            </span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <span className="text-lg font-bold dark:text-dark-header_text">Total Amount</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
              ${totalPrice.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1DateSelection;