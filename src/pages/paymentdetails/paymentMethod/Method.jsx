import {
  Card,
  CardBody,
  Typography,
  Button,
  Input,
  Checkbox,
  Radio,
} from "@material-tailwind/react";
import {
  FaCreditCard,
  FaPaypal,
  FaLock,
  FaCcVisa,
  FaCcMastercard,
} from "react-icons/fa";

const Method = ({ method, setMethod }) => {
  return (
    <div className="w-full">
      <Typography
        variant="h6"
        color="blue-gray"
        className="mb-4 flex items-center gap-2"
      >
        <span className="border-l-4 border-blue-500 pl-2 text-light-primary_text dark:text-dark-secondary_text">
          Payment Method
        </span>
      </Typography>

      <div className="flex gap-4 flex-wrap">
        <Card
          onClick={() => setMethod("card")}
          className={`cursor-pointer border-2 bg-light-background dark:bg-dark-background ${
            method === "card" ? "border-blue-500" : "border-gray-300"
          } transition-all w-full md:w-[45%]`}
        >
          <CardBody className="flex items-center gap-3 flex-wrap">
            <FaCreditCard
              className={`text-2xl ${
                method === "card" ? "text-blue-600" : "text-gray-500"
              }`}
            />
            <div className="flex-1">
              <Typography
                variant="h6"
                className="text-light-primary_text dark:text-dark-header_text"
              >
                Credit/Debit Card
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-light-secondary_text dark:text-dark-secondary_text"
              >
                Visa, Mastercard, American Express
              </Typography>
            </div>
            <Radio
              name="payment"
              checked={method === "card"}
              onChange={() => setMethod("card")}
              color="blue"
            />
          </CardBody>
        </Card>

        <Card
          onClick={() => setMethod("paypal")}
          className={`cursor-pointer border-2 bg-light-background dark:bg-dark-background ${
            method === "paypal" ? "border-blue-500" : "border-gray-300"
          } transition-all w-full md:w-[45%]`}
        >
          <CardBody className="flex items-center gap-3 flex-wrap">
            <FaPaypal
              className={`text-2xl ${
                method === "paypal" ? "text-blue-600" : "text-gray-500"
              }`}
            />
            <div className="flex-1">
              <Typography
                variant="h6"
                className="text-light-primary_text dark:text-dark-header_text"
              >
                PayPal
              </Typography>
              <Typography
                variant="small"
                color="gray"
                className="text-light-secondary_text dark:text-dark-secondary_text"
              >
                Pay with your PayPal account
              </Typography>
            </div>
            <Radio
              name="payment"
              checked={method === "paypal"}
              onChange={() => setMethod("paypal")}
              color="blue"
            />
          </CardBody>
        </Card>
      </div>

      <div className="mt-6 dark:text-dark-background  ">
        {method === "card" ? (
          <div className="bg-white dark:bg-dark-background p-6 rounded-lg shadow-md">
            <Typography variant="h6" className="mb-4 flex items-center gap-2">
              <FaLock className="text-blue-500" />
              <span className="text-light-primary_text dark:text-dark-header_text">
                Card Information
              </span>
            </Typography>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                   bg-white dark:bg-dark-background text-gray-800 dark:text-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                   bg-white dark:bg-dark-background text-gray-800 dark:text-gray-100 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                     bg-white dark:bg-dark-background text-gray-800 dark:text-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-2 
                     bg-white dark:bg-dark-background text-gray-800 dark:text-gray-100 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between mt-3 gap-2 ">
                <Checkbox
                  className="dark:text-dark-secondary_text"
                  label="Save this card for future payments"
                  labelProps={{
                    className: "dark:text-dark-secondary_text",
                  }}
                />
                <div className="flex items-center gap-2 text-3xl">
                  <FaCcVisa className="text-blue-600" />
                  <FaCcMastercard className="text-orange-500" />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaPaypal className="text-blue-600 text-3xl" />
              </div>
            </div>
            <Typography variant="h6" className="font-semibold">
              Pay with PayPal
            </Typography>
            <Typography color="gray" className="mb-4">
              You'll be redirected to PayPal to complete your payment securely
            </Typography>
            <Button
              className="bg-gradient-to-r from-blue-600 to-cyan-500"
              color="blue"
            >
              Continue with PayPal
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Method;
