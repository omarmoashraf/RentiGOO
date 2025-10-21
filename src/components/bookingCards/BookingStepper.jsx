import React from "react";
import { Stepper, Step, Button } from "@material-tailwind/react";
import Step1Card1 from "./Step1Card1";
import Step1Card2 from "./Step1Card2";

function BookingStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full py-4 px-8">
      {/* Stepper header */}
      <Stepper
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step onClick={() => setActiveStep(0)}>1</Step>
        <Step onClick={() => setActiveStep(1)}>2</Step>
        <Step onClick={() => setActiveStep(2)}>3</Step>
      </Stepper>

      {/* Step content */}
      <div className="mt-10 text-center">
        {activeStep === 0 && (
          <div className="flex justify-between w-full gap-6">
            <div className="w-3/4 bg-white shadow-md rounded-lg p-6 border border-gray-300">
              <Step1Card1 />
            </div>

            <div className="w-[35%] bg-white shadow-md rounded-lg p-6 border border-gray-300">
              <Step1Card2 />
            </div>
          </div>
        )}
        {activeStep === 1 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Step 2: Payment Info</h2>
            <p className="text-gray-600">
              Add your payment method and billing details.
            </p>
          </div>
        )}
        {activeStep === 2 && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Step 3: Confirmation</h2>
            <p className="text-gray-600">Review and confirm your booking.</p>
          </div>
        )}
      </div>

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
  );
}

export default BookingStepper;
