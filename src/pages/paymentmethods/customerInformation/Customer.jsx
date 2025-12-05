import { Card, CardBody, Typography } from "@material-tailwind/react";
import { FaUser, FaPhoneAlt, FaEnvelope, FaRegIdBadge } from "react-icons/fa";

const Customer = ({ bookingData }) => {
  const { customer } = bookingData;

  return (
    <Card className="p-6 rounded-lg shadow-md dark:bg-dark-background">
      <Typography variant="h5" className="mb-4 font-semibold dark:text-dark-header_text">
        Customer Information
      </Typography>

      <CardBody className="space-y-4">
        <div className="flex flex-col md:flex-row justify-between gap-4 pr-20">
          <div className="flex items-center gap-2">
            <FaUser className="text-blue-600" />
            <div>
              <Typography color="gray" className="text-sm dark:text-dark-header_text">
                Name
              </Typography>
              <Typography className="font-semibold dark:text-dark-secondary_text">{customer.name}</Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-blue-600" />
            <div>
              <Typography color="gray" className="text-sm dark:text-dark-header_text">
                Phone
              </Typography>
              <Typography className="font-semibold dark:text-dark-secondary_text">
                {customer.phone}
              </Typography>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 pr-24">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600" />
            <div>
              <Typography color="gray" className="text-sm dark:text-dark-header_text">
                Email
              </Typography>
              <Typography className="font-semibold dark:text-dark-secondary_text">
                {customer.email}
              </Typography>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <FaRegIdBadge className="text-blue-600" />
            <div>
              <Typography color="gray" className="text-sm dark:text-dark-header_text">
                Booking Duration
              </Typography>
              <Typography className="font-semibold dark:text-dark-secondary_text">
                {customer.duration}
              </Typography>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default Customer;
