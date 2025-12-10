// src/components/bookingSteps/Step4PaymentMethods.jsx
import React, { useState } from "react";
import { CreditCard, Smartphone, Wallet, CheckCircle, Lock, ArrowRight } from "lucide-react";

const Step4PaymentMethods = ({
  totalPrice,
  bookingData,
  onBack,
  onCompletePayment
}) => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [processing, setProcessing] = useState(false);

  const paymentMethods = [
    {
      id: "visa",
      name: "Visa / MasterCard",
      icon: <CreditCard className="h-6 w-6" />,
      description: "Pay with your credit or debit card",
      color: "bg-blue-500"
    },
    {
      id: "instapay",
      name: "InstaPay",
      icon: <Smartphone className="h-6 w-6" />,
      description: "Instant bank transfer via InstaPay",
      color: "bg-purple-500"
    },
    {
      id: "vodafone",
      name: "Vodafone Cash",
      icon: <Wallet className="h-6 w-6" />,
      description: "Pay using Vodafone Cash wallet",
      color: "bg-red-500"
    }
  ];

  const handlePayment = async () => {
    if (!selectedMethod) return;
    
    setProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setProcessing(false);
      onCompletePayment({
        method: selectedMethod,
        amount: totalPrice,
        transactionId: `TXN${Date.now()}`,
        timestamp: new Date().toISOString()
      });
    }, 2000);
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
            <CreditCard className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-dark-header_text">
              Select Payment Method
            </h2>
            <p className="text-gray-600 dark:text-dark-secondary_text">
              Choose your preferred payment method to complete the booking
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {paymentMethods.map((method) => (
            <button
              key={method.id}
              onClick={() => setSelectedMethod(method.id)}
              className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedMethod === method.id
                  ? "border-light-Buttons dark:border-dark-Buttons bg-blue-50 dark:bg-blue-900/20"
                  : "border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600"
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className={`${method.color} w-10 h-10 rounded-lg flex items-center justify-center text-white`}>
                  {method.icon}
                </div>
                <div className="text-left">
                  <h3 className="font-bold dark:text-dark-header_text">{method.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-dark-secondary_text">
                    {method.description}
                  </p>
                </div>
              </div>
              {selectedMethod === method.id && (
                <div className="flex items-center justify-center mt-2">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Card Payment Form */}
        {selectedMethod === "visa" && (
          <div className="mb-8 p-6 rounded-xl bg-gray-50 dark:bg-dark-background border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold dark:text-dark-header_text mb-4">Card Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                  maxLength="19"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                    CVV
                  </label>
                  <input
                    type="password"
                    placeholder="123"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                    maxLength="3"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                  Cardholder Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={cardName}
                  onChange={(e) => setCardName(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                />
              </div>
            </div>
          </div>
        )}

        {/* Mobile Payment Form */}
        {selectedMethod === "instapay" && (
          <div className="mb-8 p-6 rounded-xl bg-gray-50 dark:bg-dark-background border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold dark:text-dark-header_text mb-4">InstaPay Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  placeholder="+20 10 1234 5678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                />
              </div>
              <div className="text-sm text-gray-600 dark:text-dark-secondary_text">
                <p>You will receive a payment request on your mobile banking app.</p>
                <p className="mt-1">Please approve the payment to complete your booking.</p>
              </div>
            </div>
          </div>
        )}

        {/* Vodafone Cash Form */}
        {selectedMethod === "vodafone" && (
          <div className="mb-8 p-6 rounded-xl bg-gray-50 dark:bg-dark-background border border-gray-200 dark:border-gray-700">
            <h3 className="font-bold dark:text-dark-header_text mb-4">Vodafone Cash Details</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
                  Vodafone Cash Number
                </label>
                <input
                  type="tel"
                  placeholder="010 1234 5678"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons"
                />
              </div>
              <div className="text-sm text-gray-600 dark:text-dark-secondary_text">
                <p>You will receive a payment request on your Vodafone Cash app.</p>
                <p className="mt-1">Enter your PIN to approve the payment.</p>
              </div>
            </div>
          </div>
        )}

        {/* Payment Summary */}
        <div className="p-6 rounded-xl bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border border-blue-200 dark:border-blue-800 mb-8">
          <h3 className="font-bold dark:text-dark-header_text mb-4">Payment Summary</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-dark-secondary_text">Booking Total</span>
              <span className="font-medium dark:text-dark-header_text">${totalPrice.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600 dark:text-dark-secondary_text">Service Fee</span>
              <span className="font-medium dark:text-dark-header_text">$0.00</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-blue-200 dark:border-blue-700">
              <span className="text-lg font-bold dark:text-dark-header_text">Amount to Pay</span>
              <span className="text-2xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
                ${totalPrice.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="flex items-start gap-3 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 mb-8">
          <Lock className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-green-800 dark:text-green-300">Secure Payment</p>
            <p className="text-sm text-green-700 dark:text-green-400 mt-1">
              Your payment is secured with SSL encryption. We never store your card details.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={handlePayment}
            disabled={!selectedMethod || processing}
            className={`flex-1 px-6 py-4 rounded-lg font-semibold transition-all text-lg flex items-center justify-center gap-2 ${
              selectedMethod && !processing
                ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            {processing ? (
              <>
                <div className="h-6 w-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing Payment...
              </>
            ) : (
              <>
                Pay ${totalPrice.toFixed(2)}
                <ArrowRight size={20} />
              </>
            )}
          </button>
          <button
            onClick={onBack}
            className="px-6 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text font-semibold hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
          >
            Back to Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step4PaymentMethods;