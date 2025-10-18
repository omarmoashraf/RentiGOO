import { Card, Typography, Button } from "@material-tailwind/react";
import {
  FaCheckCircle,
  FaDownload,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaClock,
  FaCar,
  FaUserFriends,
  FaCogs,
} from "react-icons/fa";

const Booking = ({ bookingData }) => {
  return (
    <Card className="p-6 rounded-xl shadow-md bg-white ">
      <div className="flex items-center flex-wrap justify-between mb-4">
        <Typography variant="h5" className="font-semibold">
          Booking Confirmed
        </Typography>
        <div className="flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-lg text-sm font-medium">
          <FaCheckCircle />
          <span>Confirmed</span>
        </div>
      </div>

      <div className="bg-gray-100 p-4 rounded-lg flex items-center flex-wrap justify-between mb-6">
        <div>
          <Typography className="text-gray-600 text-sm">
            Booking Reference
          </Typography>
          <Typography className="font-semibold">
            {bookingData.reference}
          </Typography>
        </div>
        <Button
          color="blue"
          variant="outlined"
          size="sm"
          className="flex items-center gap-2 flex-wrap"
        >
          <FaDownload /> Download
        </Button>
      </div>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <img
          src={bookingData.car.image}
          alt={bookingData.car.name}
          className="w-32 h-24 object-cover rounded-lg"
        />
        <div>
          <Typography variant="h6" className="font-semibold">
            {bookingData.car.name}
          </Typography>
          <Typography color="gray" className="text-sm">
            {bookingData.car.type}
          </Typography>
          <div className="flex flex-wrap gap-3 text-gray-600 text-sm mt-2">
            <div className="flex items-center gap-1">
              <FaCogs /> <span>{bookingData.car.transmission}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaUserFriends /> <span>{bookingData.car.seats}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaCar /> <span>{bookingData.car.package}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <Typography variant="h6" className="text-blue-600 mb-2">
            Pick-up Details
          </Typography>
          <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
            <FaCalendarAlt /> <span>{bookingData.pickup.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
            <FaClock /> <span>{bookingData.pickup.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaMapMarkerAlt /> <span>{bookingData.pickup.location}</span>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
          <Typography variant="h6" className="text-blue-600 mb-2">
            Return Details
          </Typography>
          <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
            <FaCalendarAlt /> <span>{bookingData.return.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
            <FaClock /> <span>{bookingData.return.time}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-sm">
            <FaMapMarkerAlt /> <span>{bookingData.return.location}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Booking;
