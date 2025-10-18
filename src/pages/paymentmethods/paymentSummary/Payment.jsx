import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import {
  FaCheckCircle,
  FaPhoneAlt,
  FaEnvelope,
  FaRegCreditCard,
} from "react-icons/fa";

const Payment = ({ bookingData }) => {
  const { payment } = bookingData;

  return (
    <Card className="p-6 rounded-xl shadow-md bg-white border border-gray-100">
      {/* العنوان */}
      <div className="flex items-center gap-2 mb-4">
        <FaRegCreditCard className="text-blue-600 text-lg" />
        <Typography variant="h6" className="font-semibold text-gray-900">
          Payment Summary
        </Typography>
      </div>

      <CardBody className="space-y-3">
        {/* تفاصيل الدفع */}
        <div className="flex justify-between">
          <Typography color="gray">Vehicle (4 days)</Typography>
          <Typography className="font-medium">
            ${payment.vehicle.toFixed(2)}
          </Typography>
        </div>

        <div className="flex justify-between">
          <Typography color="gray">Insurance</Typography>
          <Typography className="font-medium">
            ${payment.insurance.toFixed(2)}
          </Typography>
        </div>

        <div className="flex justify-between">
          <Typography color="gray">Tax (12%)</Typography>
          <Typography className="font-medium">
            ${payment.tax.toFixed(2)}
          </Typography>
        </div>

        <div className="flex justify-between">
          <Typography color="gray">Service Fee</Typography>
          <Typography className="font-medium">
            ${payment.service.toFixed(2)}
          </Typography>
        </div>

        {/* خط فاصل */}
        <hr className="my-4 border-gray-200" />

        {/* الإجمالي */}
        <div className="flex justify-between items-center text-lg font-semibold mb-2">
          <Typography>Total Paid</Typography>
          <Typography className="text-green-600">
            ${payment.total.toFixed(2)}
          </Typography>
        </div>

        {/* بوكس تأكيد الدفع */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-3 flex items-start gap-3 mb-4">
          <FaCheckCircle className="text-green-600 text-lg mt-1" />
          <div>
            <Typography className="text-green-700 font-medium">
              Payment Confirmed
            </Typography>
            <Typography color="gray" className="text-sm">
              {payment.method}
            </Typography>
          </div>
        </div>

        {/* Need Help Section */}
        <Typography
          variant="small"
          className="font-semibold text-gray-900 mb-2"
        >
          Need Help?
        </Typography>

        <div className="flex flex-col gap-2">
          <Button
            variant="outlined"
            color="blue"
            className="flex items-center justify-center gap-2 border-gray-300 text-gray-700"
          >
            <FaPhoneAlt className="text-gray-600" /> Call Support
          </Button>
          <Button
            variant="outlined"
            color="blue"
            className="flex items-center justify-center gap-2 border-gray-300 text-gray-700"
          >
            <FaEnvelope className="text-gray-600" /> Email Us
          </Button>
        </div>
      </CardBody>
    </Card>
  );
};

export default Payment;
