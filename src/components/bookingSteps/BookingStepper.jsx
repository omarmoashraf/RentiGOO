// src/components/bookingSteps/BookingStepper.jsx
import React from "react";
import { Stepper, Step } from "@material-tailwind/react";

const BookingStepper = ({ activeStep, onStepClick }) => {
  const steps = [
    { number: 1, label: "Dates" },
    { number: 2, label: "Locations" },
    { number: 3, label: "Review" },
    { number: 4, label: "Payment" }
  ];

  const getStepClassName = (index) => {
    if (index < activeStep) {
      return "!bg-green-500 !text-white";
    } else if (index === activeStep) {
      return "!bg-light-Buttons !text-white dark:!bg-dark-Buttons";
    } else {
      return "!bg-gray-200 dark:!bg-gray-700 !text-gray-500 dark:!text-gray-400";
    }
  };

  return (
    <div className="max-w-4xl mx-auto mb-8">
      <Stepper
        activeStep={activeStep}
        activeLineClassName="bg-gradient-to-r from-light-Buttons to-light-secondary dark:from-dark-Buttons dark:to-dark-secondary"
        className="mb-6"
      >
        {steps.map((step, index) => (
          <Step
            key={step.number}
            className={`h-10 w-10 cursor-pointer ${getStepClassName(index)}`}
            onClick={() => index <= activeStep && onStepClick && onStepClick(index)}
            activeClassName="ring-0"
            completedClassName="ring-0"
          >
            {index < activeStep ? "✓" : step.number}
            <div className="absolute -bottom-6 w-max text-center">
              <div className={`text-xs font-medium mt-1 ${
                index === activeStep 
                  ? "text-light-Buttons dark:text-dark-Buttons font-semibold"
                  : index < activeStep
                  ? "text-green-600 dark:text-green-400"
                  : "text-gray-500 dark:text-gray-400"
              }`}>
                {step.label}
              </div>
            </div>
          </Step>
        ))}
      </Stepper>
      
      <div className="text-center">
        <h2 className="text-xl font-bold dark:text-dark-header_text">
          {activeStep === 0 && "Select Dates"}
          {activeStep === 1 && "Choose Locations"}
          {activeStep === 2 && "Review Booking"}
          {activeStep === 3 && "Payment Method"}
        </h2>
        <p className="text-gray-600 dark:text-dark-secondary_text text-sm mt-1">
          Step {activeStep + 1} of 4
        </p>
      </div>
    </div>
  );
};

export default BookingStepper;