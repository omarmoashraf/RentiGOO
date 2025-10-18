import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaInfoCircle } from "react-icons/fa";

const Important = () => {
  return (
    <Card className="p-6 rounded-lg shadow-md bg-white border border-gray-200">
      <CardBody className="space-y-4">
        <div className="flex items-center gap-3 mb-4 border-b pb-3">
          <div className="bg-blue-100 p-2 rounded-full">
            <FaInfoCircle className="text-blue-600 text-lg" />
          </div>
          <Typography variant="h6" className="font-semibold text-gray-900">
            Important Information
          </Typography>
        </div>

        <div className="space-y-5">
          <div>
            <div className="flex items-start gap-2">
              <FaInfoCircle className="text-blue-500 mt-1 text-sm" />

              <Typography className="font-semibold text-gray-900">
                Bring Required Documents
              </Typography>
            </div>
            <Typography className="text-gray-600 text-sm">
              Valid driver's license, credit card, and government-issued ID
            </Typography>
          </div>

          <div>
            <div className="flex items-start gap-2">
              <FaInfoCircle className="text-blue-500 mt-1 text-sm" />
              <Typography className="font-semibold text-gray-900">
                Arrival Time
              </Typography>
            </div>
            <Typography className="text-gray-600 text-sm">
              Please arrive 15 minutes before your scheduled pickup time
            </Typography>
          </div>

          <div>
            <div className="flex items-start gap-2">
              <FaInfoCircle className="text-blue-500 mt-1 text-sm" />
              <Typography className="font-semibold text-gray-900">
                Cancellation Policy
              </Typography>
            </div>
            <Typography className="text-gray-600 text-sm">
              Free cancellation up to 24 hours before pickup time
            </Typography>
          </div>

          <div>
            <div className="flex items-start gap-2">
              <FaInfoCircle className="text-blue-500 mt-1 text-sm" />
              <Typography className="font-semibold text-gray-900">
                Support
              </Typography>
            </div>
            <Typography className="text-gray-600 text-sm">
              24/7 customer support available at +1 (800) RENTIGO
            </Typography>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Important;
