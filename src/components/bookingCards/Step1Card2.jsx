import { Card, CardHeader, CardBody, Typography } from "@material-tailwind/react";
import { CiCalendar } from "react-icons/ci";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

function formatDate(value) {
  if (!value) return "Select a date";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Select a valid date";
  return date.toLocaleDateString();
}

function getDays(startDate, endDate) {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const msInDay = 1000 * 60 * 60 * 24;
  const diff = Math.ceil((end - start) / msInDay);
  return diff > 0 ? diff : 0;
}

function Step1Card2({ startDate, endDate, totalPrice, car }) {
  const days = getDays(startDate, endDate);
  const dailyPrice =
    car?.price ?? car?._raw?.price ?? car?.dailyPrice ?? undefined;

  return (
    <Card
      color=""
      variant="gradient"
      className="w-full max-w-[20rem] border-0 shadow-none bg-light-background dark:bg-dark-background"
    >
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 pb-4 text-center"
      >
        <Typography
          variant="small"
          color="black"
          className="font-normal uppercase text-light-primary_text dark:text-dark-header_text"
        >
          Pricing Summary
        </Typography>
        <Typography
          variant="h1"
          color="text-gray-700"
          className="mt-6 flex justify-center gap-1 text-7xl font-normal"
        >
          <CiCalendar className="text-light-primary_text dark:text-dark-header_text" />
        </Typography>
        <div className="text-gray-700 dark:text-dark-secondary_text">
          <p>
            {days > 0 && dailyPrice
              ? `${days} day rental at $${dailyPrice}/day`
              : "Select pickup and return dates to see pricing"}
          </p>
          <p className="text-sm mt-1">
            {startDate && endDate
              ? `${formatDate(startDate)} → ${formatDate(endDate)}`
              : "Dates not set"}
          </p>
          {totalPrice > 0 && (
            <p className="text-lg font-semibold text-light-primary_text dark:text-dark-header_text">
              Estimated total: ${totalPrice.toFixed(2)}
            </p>
          )}
        </div>
      </CardHeader>
      <div className="w-full mx-auto border-t border-gray-700 pb-4 opacity-25"></div>
      <CardBody className="p-0">
        <h1 className="text-start text-black dark:text-dark-header_text text-xl pb-3">What's Included</h1>
        <ul className="flex flex-col gap-4 align-items-end">
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              Unlimited mileage
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 text-start dark:text-dark-secondary_text">
              Comprehensive insurance
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 text-start dark:text-dark-secondary_text">
              24/7 roadside assistance
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              Free cancellation (24h)
            </Typography>
          </li>
          <li className="flex items-center gap-0">
            <span className="rounded-full border border-white/20 bg-white/20 p-1 text-blue-600">
              <IoCheckmarkCircleOutline className="text-green-400" />
            </span>
            <Typography className="font-normal text-gray-700 dark:text-dark-secondary_text text-start">
              GPS navigation system
            </Typography>
          </li>
        </ul>
      </CardBody>
    </Card>
  );
}
export default Step1Card2;
