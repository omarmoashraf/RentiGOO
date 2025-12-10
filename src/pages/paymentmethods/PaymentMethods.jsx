import { useState } from "react";
import { Link, useLocation, Navigate } from "react-router-dom";
import { 
  FaCheckCircle, 
  FaPrint, 
  FaHeart, 
  FaDownload,
  FaShareAlt,
  FaCalendarCheck,
  FaCar,
  FaMapMarkerAlt,
  FaUser,
  FaCreditCard,
  FaShieldAlt,
  FaPhone,
  FaEnvelope,
  FaFileContract,
  FaQuestionCircle
} from "react-icons/fa";
import { 
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
  Chip,
  IconButton,
  Tooltip
} from "@material-tailwind/react";
import Booking from "./bookingSummary/Booking";
import Payment from "./paymentSummary/Payment";
import Customer from "./customerInformation/Customer";
import Important from "./importantInformation/Important";

const PaymentMethods = () => {
  const { state } = useLocation();
  const raw = state?.bookingData;
  
  const [isFavorited, setIsFavorited] = useState(false);
  const [isShared, setIsShared] = useState(false);

  // If the page is opened directly without state, send back to booking
  if (!raw) {
    return <Navigate to="/booking" replace />;
  }

  const days = (() => {
    if (!raw.startDate || !raw.endDate) return 0;
    const diff =
      (new Date(raw.endDate).getTime() - new Date(raw.startDate).getTime()) /
      (1000 * 60 * 60 * 24);
    return diff > 0 ? Math.ceil(diff) : 0;
  })();

  const normalizedBooking = {
    reference:
      raw.booking?._id ||
      raw.booking?.id ||
      raw.booking?.reference ||
      "BOOKING-" + Math.random().toString(36).substr(2, 9).toUpperCase(),
    car: {
      name: raw.car?.name || `${raw.car?.make || ''} ${raw.car?.model || ''}`.trim() || "Premium Vehicle",
      type: raw.car?.type || raw.car?.category || "Luxury Sedan",
      image:
        raw.car?.image ||
        (Array.isArray(raw.car?.images) && raw.car.images[0]) ||
        "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=800&auto=format&fit=crop",
      transmission:
        raw.car?.specs?.transmission || raw.car?.transmission || "Automatic",
      seats: raw.car?.specs?.seats || raw.car?.seats || "4",
      package: raw.car?.package || "Premium Package",
      year: raw.car?.year || "2024",
      color: raw.car?.color || "Midnight Black",
    },
    pickup: {
      date: raw.startDate || new Date().toISOString().split('T')[0],
      time: "10:00 AM",
      location: raw.pickupLocation?.address || "Main Office - 123 Premium Ave, New York, NY",
    },
    return: {
      date: raw.endDate || new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: "10:00 AM",
      location: raw.returnLocation?.address || raw.pickupLocation?.address || "Same as Pickup",
    },
    customer: {
      name: raw.booking?.user?.name || "John Doe",
      email: raw.booking?.user?.email || "john.doe@example.com",
      phone: raw.booking?.user?.phone || "+1 (555) 123-4567",
      duration: days > 0 ? `${days} day${days !== 1 ? 's' : ''}` : "1 day",
      loyaltyPoints: raw.booking?.user?.loyaltyPoints || 850,
    },
    payment: {
      vehicle: raw.totalPrice || 0,
      insurance: Math.round((raw.totalPrice || 0) * 0.15),
      tax: Math.round((raw.totalPrice || 0) * 0.08),
      service: 25,
      total: Math.round((raw.totalPrice || 0) * 1.23) + 25,
      method: raw.method || "Credit Card (Visa)",
      status: "paid",
      transactionId: "TXN-" + Math.random().toString(36).substr(2, 12).toUpperCase(),
      date: new Date().toISOString().split('T')[0],
    },
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Booking Confirmation',
          text: `I just booked ${normalizedBooking.car.name} on RentiGOO!`,
          url: window.location.href,
        });
        setIsShared(true);
      } catch (error) {
        console.log('Error sharing:', error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
      setIsShared(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // Simulate download
    const content = JSON.stringify(normalizedBooking, null, 2);
    const blob = new Blob([content], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `booking-confirmation-${normalizedBooking.reference}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const actionButtons = [
    {
      label: "Back to Home",
      icon: null,
      variant: "filled",
      color: "blue",
      className: "bg-gradient-to-r from-light-Buttons to-light-secondary",
      to: "/",
      action: null,
    },
    {
      label: isFavorited ? "Favorited" : "Add to Favorites",
      icon: <FaHeart className={isFavorited ? "text-red-500" : ""} />,
      variant: "outlined",
      color: "gray",
      to: null,
      action: () => setIsFavorited(!isFavorited),
    },
    {
      label: "Print",
      icon: <FaPrint />,
      variant: "outlined",
      color: "gray",
      to: null,
      action: handlePrint,
    },
    {
      label: "Share",
      icon: <FaShareAlt />,
      variant: "outlined",
      color: "gray",
      to: null,
      action: handleShare,
    },
    {
      label: "Download",
      icon: <FaDownload />,
      variant: "outlined",
      color: "gray",
      to: null,
      action: handleDownload,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-dark-background dark:to-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4 py-8">
        {/* Success Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="relative inline-block mb-6">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center animate-pulse">
              <FaCheckCircle className="text-white text-4xl" />
            </div>
            <div className="absolute -top-2 -right-2">
              <Chip
                value="Confirmed"
                color="green"
                className="font-bold px-4 py-1"
              />
            </div>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent mb-4">
            Booking Confirmed!
          </h1>
          
          <p className="text-gray-600 dark:text-dark-secondary_text text-lg max-w-2xl mx-auto mb-6">
            Your premium vehicle booking has been successfully confirmed. 
            We've sent a detailed confirmation email with all the information you need.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <Chip
              value={`Ref: ${normalizedBooking.reference}`}
              className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 font-mono"
            />
            <Chip
              value={`${normalizedBooking.customer.duration} Rental`}
              className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"
            />
            <Chip
              value={normalizedBooking.payment.status.toUpperCase()}
              className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Left Column - Main Content */}
          <div className="xl:w-2/3 space-y-8">
            {/* Quick Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                      <FaCar className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h6" className="dark:text-dark-header_text">
                        {normalizedBooking.car.name}
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                        {normalizedBooking.car.year} • {normalizedBooking.car.color}
                      </Typography>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 dark:text-dark-secondary_text">Package</span>
                    <span className="font-semibold dark:text-dark-header_text">
                      {normalizedBooking.car.package}
                    </span>
                  </div>
                </CardBody>
              </Card>

              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center">
                      <FaCalendarCheck className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h6" className="dark:text-dark-header_text">
                        Rental Period
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                        {normalizedBooking.customer.duration}
                      </Typography>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-dark-secondary_text">From</span>
                      <span className="font-semibold dark:text-dark-header_text">
                        {new Date(normalizedBooking.pickup.date).toLocaleDateString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-dark-secondary_text">To</span>
                      <span className="font-semibold dark:text-dark-header_text">
                        {new Date(normalizedBooking.return.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>

              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-400 flex items-center justify-center">
                      <FaUser className="text-white text-xl" />
                    </div>
                    <div className="flex-1">
                      <Typography variant="h6" className="dark:text-dark-header_text">
                        Customer
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                        {normalizedBooking.customer.name}
                      </Typography>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <FaEnvelope className="text-gray-400 dark:text-dark-secondary_text" size={14} />
                      <span className="text-gray-600 dark:text-dark-secondary_text truncate">
                        {normalizedBooking.customer.email}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaPhone className="text-gray-400 dark:text-dark-secondary_text" size={14} />
                      <span className="text-gray-600 dark:text-dark-secondary_text">
                        {normalizedBooking.customer.phone}
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Main Booking Details */}
            <div className="space-y-6">
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="rounded-t-2xl border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-gray-50 to-white dark:from-dark-background dark:to-gray-800 p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                        <FaCar className="text-white" />
                      </div>
                      <div>
                        <Typography variant="h5" className="dark:text-dark-header_text">
                          Booking Details
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          Complete information about your rental
                        </Typography>
                      </div>
                    </div>
                    <Tooltip content="View full booking details">
                      <IconButton variant="text" className="text-gray-600 dark:text-dark-secondary_text">
                        <FaQuestionCircle />
                      </IconButton>
                    </Tooltip>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <Booking bookingData={normalizedBooking} />
                </CardBody>
              </Card>

              {/* Location Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-emerald-400 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                        <Typography variant="h6" className="dark:text-dark-header_text">
                          Pickup Location
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          {normalizedBooking.pickup.time}
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-gray-700 dark:text-dark-header_text">
                      {normalizedBooking.pickup.location}
                    </Typography>
                    <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <Typography variant="small" className="text-blue-700 dark:text-blue-300">
                        Please arrive 15 minutes early for vehicle inspection
                      </Typography>
                    </div>
                  </CardBody>
                </Card>

                <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                  <CardBody className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <div>
                        <Typography variant="h6" className="dark:text-dark-header_text">
                          Return Location
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          {normalizedBooking.return.time}
                        </Typography>
                      </div>
                    </div>
                    <Typography className="text-gray-700 dark:text-dark-header_text">
                      {normalizedBooking.return.location}
                    </Typography>
                    <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <Typography variant="small" className="text-green-700 dark:text-green-300">
                        Late returns may incur additional charges
                      </Typography>
                    </div>
                  </CardBody>
                </Card>
              </div>

              {/* Customer Information */}
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                <CardBody className="p-6">
                  <Customer bookingData={normalizedBooking} />
                </CardBody>
              </Card>

              {/* Important Information */}
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                <CardBody className="p-6">
                  <Important />
                </CardBody>
              </Card>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
                {actionButtons.map((btn, index) => (
                  btn.to ? (
                    <Link key={index} to={btn.to}>
                      <Button
                        variant={btn.variant}
                        color={btn.color}
                        className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${btn.className || ''}`}
                        fullWidth={window.innerWidth < 640}
                      >
                        {btn.icon}
                        {btn.label}
                      </Button>
                    </Link>
                  ) : (
                    <Button
                      key={index}
                      variant={btn.variant}
                      color={btn.color}
                      onClick={btn.action}
                      className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all ${btn.className || ''}`}
                      fullWidth={window.innerWidth < 640}
                    >
                      {btn.icon}
                      {btn.label}
                    </Button>
                  )
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Payment Summary */}
          <div className="xl:w-1/3">
            <div className="sticky top-8 space-y-6">
              {/* Payment Summary Card */}
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-xl">
                <CardHeader
                  floated={false}
                  shadow={false}
                  className="rounded-t-2xl border-b border-gray-200 dark:border-gray-700 bg-gradient-to-r from-light-Buttons to-light-secondary p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center backdrop-blur-sm">
                        <FaCreditCard className="text-white" />
                      </div>
                      <div>
                        <Typography variant="h5" className="text-white">
                          Payment Summary
                        </Typography>
                        <Typography variant="small" className="text-white/80">
                          Transaction #{normalizedBooking.payment.transactionId}
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardBody className="p-6">
                  <Payment bookingData={normalizedBooking} />
                </CardBody>
              </Card>

              {/* Support Card */}
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                <CardBody className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-yellow-400 flex items-center justify-center">
                      <FaShieldAlt className="text-white" />
                    </div>
                    <div>
                      <Typography variant="h6" className="dark:text-dark-header_text">
                        24/7 Support
                      </Typography>
                      <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                        We're here to help
                      </Typography>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <FaPhone className="text-blue-500" />
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Emergency Roadside
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          +1 (800) 123-4567
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <FaEnvelope className="text-green-500" />
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Customer Support
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          support@rentigoo.com
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors cursor-pointer">
                      <FaFileContract className="text-purple-500" />
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Rental Agreement
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          View terms & conditions
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Next Steps */}
              <Card className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary shadow-lg">
                <CardBody className="p-6">
                  <Typography variant="h6" className="dark:text-dark-header_text mb-4">
                    Next Steps
                  </Typography>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        1
                      </div>
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Check your email
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          Confirmation sent to {normalizedBooking.customer.email}
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        2
                      </div>
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Download the app
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          For easy access to your booking
                        </Typography>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center text-white text-xs font-bold mt-0.5">
                        3
                      </div>
                      <div>
                        <Typography variant="small" className="font-medium dark:text-dark-header_text">
                          Bring required documents
                        </Typography>
                        <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                          Driver's license & payment card
                        </Typography>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-light-Buttons/10 to-light-secondary/10 dark:from-light-Buttons/20 dark:to-light-secondary/20 border border-light-Buttons/20 dark:border-light-Buttons/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <Typography variant="h5" className="dark:text-dark-header_text mb-2">
                Need to make changes?
              </Typography>
              <Typography variant="small" className="text-gray-600 dark:text-dark-secondary_text">
                You can modify your booking up to 24 hours before pickup
              </Typography>
            </div>
            <div className="flex gap-3">
              <Link to="/booking">
                <Button
                  variant="outlined"
                  className="border-light-Buttons dark:border-dark-Buttons text-light-Buttons dark:text-dark-Buttons hover:bg-light-Buttons/10 dark:hover:bg-dark-Buttons/10"
                >
                  Modify Booking
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  className="bg-gradient-to-r from-light-Buttons to-light-secondary text-white"
                >
                  Contact Support
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethods;