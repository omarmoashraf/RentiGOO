import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Step1Card1 from "./Step1Card1";
import Step1Card2 from "./Step1Card2";
import PaymentDetails from "../../pages/paymentdetails/PaymentDetails";
import { FaArrowLeft } from "react-icons/fa";

function BookingStepper({
  car,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  totalPrice,
  submitting,
  submitError,
  submitSuccess,
  canProceed,
  onSubmitBooking,
}) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div>
      <div className="flex justify-center mt-1 px-2 bg-light-background dark:bg-dark-background">
        <div className="w-full max-w-5xl">
          <div className="w-full">
            {/* Stepper header */}
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step
                className="text-light-primary_text dark:text-light-primary_text dark:bg-light-background"
                onClick={() => setActiveStep(0)}
              >
                1
              </Step>
              <Step
                onClick={() => setActiveStep(1)}
                className={`cursor-pointer transition-colors duration-300 
                 ${
                 activeStep === 1
                 ? "text-light-primary_text dark:text-light-primary_text dark:bg-light-background"
                 : "text-light-primary_text dark:text-dark-header_text dark:bg-dark-background"
                }`}
              >
                2
              </Step>
            </Stepper>

            {/* Step content */}
            <div className="mt-10 text-center bg-light-background dark:bg-dark-background">
              {activeStep === 0 && (
                <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                  <div className="lg:w-3/4 w-full  shadow-md rounded-lg p-6 border border-gray-300 bg-light-background dark:bg-dark-background">
                    <Step1Card1
                      car={car}
                      startDate={startDate}
                      endDate={endDate}
                      onStartDateChange={setStartDate}
                      onEndDateChange={setEndDate}
                    />
                  </div>

                  <div className="lg:w-[35%] w-full bg-light-background dark:bg-dark-background shadow-md rounded-lg p-6 border border-gray-300 flex justify-center lg:justify-start">
                    <Step1Card2
                      startDate={startDate}
                      endDate={endDate}
                      totalPrice={totalPrice}
                      car={car}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {activeStep === 1 && (
        <div className="">
          <PaymentDetails
            bookingData={{
              car,
              startDate,
              endDate,
              totalPrice,
            }}
            onConfirm={onSubmitBooking}
            submitting={submitting}
            submitError={submitError}
            submitSuccess={submitSuccess}
          />
        </div>
      )}
      <div className="flex justify-center items-top mt-1">
        <div className="p-2 w-4/5 text-center">
          {/* Navigation buttons */}
          <div className="mt-10 flex justify-between ">
            <Button
              onClick={handlePrev}
              className="bg-light-Buttons text-light-primary_text dark:text-dark-header_text"
              disabled={isFirstStep}
            >
              Prev
            </Button>
            <Button
              onClick={handleNext}
              className="bg-light-Buttons text-light-primary_text dark:text-dark-header_text"
              disabled={isLastStep || (activeStep === 0 && !canProceed)}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingStepper;
