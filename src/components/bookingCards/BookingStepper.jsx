import React from "react";
import { useState } from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Step1Card1 from "./Step1Card1";
import Step1Card2 from "./Step1Card2";
import PaymentDetails from "../../pages/paymentdetails/PaymentDetails";
import { FaArrowLeft } from "react-icons/fa";

function BookingStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);
  const [method, setMethod] = useState("card");
  const [sameAddress, setSameAddress] = useState(false);
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div>
      <div className="flex justify-center mt-1 px-2">
        <div className="w-full max-w-5xl">
          <div className="w-full">
            {/* Stepper header */}
            <Stepper
              activeStep={activeStep}
              isLastStep={(value) => setIsLastStep(value)}
              isFirstStep={(value) => setIsFirstStep(value)}
            >
              <Step onClick={() => setActiveStep(0)}>1</Step>
              <Step onClick={() => setActiveStep(1)}>2</Step>
            </Stepper>

            {/* Step content */}
            <div className="mt-10 text-center">
              {activeStep === 0 && (
                <div className="flex flex-col lg:flex-row justify-between w-full gap-6">
                  <div className="lg:w-3/4 w-full bg-white shadow-md rounded-lg p-6 border border-gray-300">
                    <Step1Card1 />
                  </div>

                  <div className="lg:w-[35%] w-full bg-white shadow-md rounded-lg p-6 border border-gray-300 flex justify-center lg:justify-start">
                    <Step1Card2 />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {activeStep === 1 && (
        <div className="">
          <PaymentDetails />
        </div>
      )}
      <div className="flex justify-center items-top mt-1">
        <div className="p-2 w-4/5 text-center">
          {/* Navigation buttons */}
          <div className="mt-10 flex justify-between">
            <Button onClick={handlePrev} disabled={isFirstStep}>
              Prev
            </Button>
            <Button onClick={handleNext} disabled={isLastStep}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookingStepper;
