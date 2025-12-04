import { Card, CardBody, Typography, Input } from "@material-tailwind/react";
import { FaCar, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

const fallbackImage =
  "https://via.placeholder.com/320x200.png?text=Select+a+car+to+book";

function Step1Card1({
  car,
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
}) {
  const image =
    car?.image ||
    (Array.isArray(car?.images) && car.images[0]) ||
    car?._raw?.thumbnail ||
    fallbackImage;
  const name = car?.name || "Select a car to continue";
  const type = car?.type || car?.category || "";
  const price = car?.price ?? car?._raw?.price ?? 0;

  return (
    <Card
      className="w-full max-w-4xl mx-auto rounded-2xl border-0 shadow-none p-4 bg-light-background dark:bg-dark-background"
      color=""
      variant="gradient"
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaCar className="text-blue-600 text-lg" />
        <Typography
          variant="h6"
          className="text-gray-800 dark:text-dark-secondary_text font-semibold"
        >
          Vehicle & Dates
        </Typography>
      </div>

      <CardBody className="p-0 ">
        {/* Vehicle Info */}
        <div className="flex justify-between items-center rounded-xl p-4 mb-6 bg-light-background dark:bg-dark-background">
          <div className="flex gap-4 items-center">
            <img
              src={image}
              alt={name}
              className="w-24 h-16 rounded-lg object-cover"
              onError={(e) => (e.target.src = fallbackImage)}
            />
            <div>
              <Typography
                variant="h6"
                className="text-gray-900 dark:text-dark-header_text font-semibold"
              >
                {name}
              </Typography>
              <Typography variant="small" className="text-gray-600">
                {type || "Vehicle"}
              </Typography>
              <div className="mt-1 bg-gray-100 text-gray-800 text-sm px-2 py-1 rounded-lg inline-block">
                ${price}/day
              </div>
            </div>
          </div>
          <Typography className="text-gray-500 text-sm">
            Booking details are based on your selected vehicle.
          </Typography>
        </div>

        {/* Pickup & Return Details */}
        <div className="flex-col gap-5">
          {/* Pickup Section */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <Typography
                variant="h6"
                className="text-gray-800 font-semibold dark:text-dark-secondary_text"
              >
                Pickup Details
              </Typography>
            </div>
            <div className="flex flex-col gap-3 bg-light-background dark:bg-dark-background  ">
              <div className="flex flex-col sm:flex-row gap-3 w-full ">
                <div className="w-full sm:w-1/2">
                  <Input
                    type="date"
                    icon={<FaCalendarAlt />}
                    label="Start date"
                    variant="outlined"
                    color="blue"
                    value={startDate}
                    onChange={(e) => onStartDateChange?.(e.target.value)}
                    className="text-light-secondary_text dark:text-dark-secondary_text"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Input
                    label="Time"
                    variant="outlined"
                    color="blue"
                    className="text-light-secondary_text dark:text-dark-secondary_text"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Return Section */}
          <div>
            <div className="flex items-center gap-2 mb-3 mt-3">
              <FaMapMarkerAlt className="text-blue-600" />
              <Typography
                variant="h6"
                className="text-gray-800 font-semibold dark:text-dark-secondary_text"
              >
                Return Details
              </Typography>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3 w-full">
                <div className="w-full sm:w-1/2">
                  <Input
                    type="date"
                    icon={<FaCalendarAlt />}
                    label="End date"
                    variant="outlined"
                    color="blue"
                    value={endDate}
                    onChange={(e) => onEndDateChange?.(e.target.value)}
                    className="text-light-secondary_text dark:text-dark-secondary_text"
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <Input
                    label="Time"
                    variant="outlined"
                    color="blue"
                    className="text-light-secondary_text dark:text-dark-secondary_text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>

      {/* Divider */}
      <div className="w-[80%] mx-auto border-t border-gray-300 opacity-50 my-6"></div>
    </Card>
  );
}

export default Step1Card1;
