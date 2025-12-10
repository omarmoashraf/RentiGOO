import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  CalendarDays,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Trash2,
  Search,
  Filter,
  ChevronDown,
  MoreVertical,
  RefreshCw,
  AlertCircle,
  User,
  Car,
  DollarSign,
  Calendar,
  Mail,
  Phone,
  MapPin,
  CreditCard
} from "lucide-react";
import { Spinner, Dialog, DialogBody, DialogFooter, Button } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import {
  fetchBookings,
  getBookingById,
  updateBooking,
  deleteBooking,
} from "../../services/bookings";

const StatusBadge = ({ status }) => {
  const statusMap = {
    confirmed: {
      text: "Confirmed",
      icon: <CheckCircle2 className="w-3 h-3 mr-1" />,
      className: "bg-green-50 text-green-700 border border-green-200",
      dot: "bg-green-500"
    },
    completed: {
      text: "Completed",
      icon: <CheckCircle2 className="w-3 h-3 mr-1" />,
      className: "bg-blue-50 text-blue-700 border border-blue-200",
      dot: "bg-blue-500"
    },
    pending: {
      text: "Pending",
      icon: <Clock className="w-3 h-3 mr-1" />,
      className: "bg-yellow-50 text-yellow-700 border border-yellow-200",
      dot: "bg-yellow-500"
    },
    cancelled: {
      text: "Cancelled",
      icon: <XCircle className="w-3 h-3 mr-1" />,
      className: "bg-red-50 text-red-700 border border-red-200",
      dot: "bg-red-500"
    },
  };

  const currentStatus = statusMap[status] || statusMap.pending;

  return (
    <div className="flex items-center">
      <span className={`relative flex h-2 w-2 mr-2 ${currentStatus.dot ? 'visible' : 'invisible'}`}>
        <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${currentStatus.dot} opacity-75`}></span>
        <span className={`relative inline-flex rounded-full h-2 w-2 ${currentStatus.dot}`}></span>
      </span>
      <span
        className={`inline-flex items-center text-xs font-medium px-3 py-1 rounded-full ${currentStatus.className}`}
      >
        {currentStatus.icon}
        {currentStatus.text}
      </span>
    </div>
  );
};

const StatCard = ({ title, value, icon: Icon, color, bgColor, trend }) => {
  return (
    <div className="bg-white dark:bg-dark-background p-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:-translate-y-1">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-dark-secondary_text mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-gray-900 dark:text-dark-header_text">
            {value}
          </p>
          {trend && (
            <div className={`inline-flex items-center mt-2 text-xs ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {trend > 0 ? '↗' : '↘'} {Math.abs(trend)}%
            </div>
          )}
        </div>
        <div className={`p-3 rounded-xl ${bgColor} ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};

const BookingCard = ({ booking, onView, onStatusChange, onDelete, updatingId, deletingId }) => {
  const [showActions, setShowActions] = useState(false);

  return (
    <div className="bg-white dark:bg-dark-background rounded-xl shadow-md border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300 lg:hidden">
      <div className="flex justify-between items-start mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-medium text-gray-500 dark:text-dark-secondary_text">ID:</span>
            <span className="text-sm font-semibold text-gray-900 dark:text-dark-header_text truncate max-w-[120px]">
              {booking.id?.substring(0, 8)}...
            </span>
          </div>
          <StatusBadge status={booking.status} />
        </div>
        <button
          onClick={() => setShowActions(!showActions)}
          className="p-2 text-gray-500 hover:text-gray-700 dark:text-dark-secondary_text dark:hover:text-dark-header_text"
        >
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
            <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900 dark:text-dark-header_text">{booking.userName}</p>
            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">{booking.userEmail}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
            <Car className="w-4 h-4 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="flex items-center gap-2">
            <img
              src={booking.carImage}
              alt={booking.carName}
              className="w-12 h-8 object-cover rounded-md border border-gray-200 dark:border-gray-600"
              onError={(e) => {
                e.target.src = "https://placehold.co/120x80/eee/ccc?text=Car";
              }}
            />
            <p className="text-sm font-medium text-gray-900 dark:text-dark-header_text">{booking.carName}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Duration</p>
              <p className="text-sm font-medium text-gray-900 dark:text-dark-header_text">
                {getDuration(booking.startDate, booking.endDate) || "--"} days
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-gray-400" />
            <div>
              <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Amount</p>
              <p className="text-sm font-medium text-gray-900 dark:text-dark-header_text">
                {booking.totalPrice ? `$${booking.totalPrice}` : "--"}
              </p>
            </div>
          </div>
        </div>

        {showActions && (
          <div className="flex gap-2 pt-3 border-t border-gray-100 dark:border-gray-700">
            <button
              onClick={() => onView(booking.id)}
              className="flex-1 flex items-center justify-center gap-1 p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              <span className="text-xs">View</span>
            </button>
            <select
              value={booking.status}
              onChange={(e) => onStatusChange(booking.id, e.target.value)}
              disabled={updatingId === booking.id}
              className="flex-1 border border-gray-300 dark:border-gray-600 dark:bg-dark-background dark:text-dark-header_text rounded-lg px-2 py-1 text-xs"
            >
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="cancelled">Cancelled</option>
            </select>
            <button
              onClick={() => onDelete(booking.id)}
              disabled={deletingId === booking.id}
              className="flex-1 flex items-center justify-center gap-1 p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
            >
              <Trash2 className="w-4 h-4" />
              <span className="text-xs">Delete</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const normalizeBooking = (raw) => {
  const user = raw?.user || {};
  const car = raw?.car || {};
  const payment = raw?.payment || {};
  
  return {
    id: raw?._id || raw?.id,
    startDate: raw?.startDate,
    endDate: raw?.endDate,
    status: raw?.status || "pending",
    totalPrice: raw?.totalPrice,
    userName: user?.name || user?.username || "Unknown user",
    userEmail: user?.email || "",
    userPhone: user?.phone || "N/A",
    userAddress: user?.address || "N/A",
    carName: car?.name || "Vehicle",
    carImage: car?.image || car?.thumbnail || (Array.isArray(car?.images) && car.images[0]) || "https://placehold.co/120x80/eee/ccc?text=Car",
    carId: car?._id || car?.id,
    carModel: car?.model || "N/A",
    carYear: car?.year || "N/A",
    paymentMethod: payment?.method || "N/A",
    paymentStatus: payment?.status || "pending",
    pickupLocation: raw?.pickupLocation || "N/A",
    dropoffLocation: raw?.dropoffLocation || "N/A",
    createdAt: raw?.createdAt,
    raw,
  };
};

const formatRange = (start, end) => {
  if (!start || !end) return "Dates not set";
  const startDate = new Date(start);
  const endDate = new Date(end);
  return `${startDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${endDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;
};

const getDuration = (start, end) => {
  if (!start || !end) return null;
  const diff = Math.ceil((new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : null;
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount || 0);
};

export default function BookingDetails() {
  const navigate = useNavigate();
  const { token } = useAuth();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);
  const [deletingId, setDeletingId] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [bookingToDelete, setBookingToDelete] = useState(null);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await fetchBookings(token);
      const payload = Array.isArray(data) ? data : data?.bookings || [];
      setBookings(payload.map(normalizeBooking));
    } catch (err) {
      setError(err.message || "Failed to load bookings");
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      setUpdatingId(id);
      const res = await updateBooking(id, { status }, token);
      const updated = normalizeBooking(res?.booking || res);
      setBookings((prev) =>
        prev.map((b) => (b.id === id ? { ...b, ...updated } : b))
      );
      if (selectedBooking?.id === id) {
        setSelectedBooking(updated);
      }
    } catch (err) {
      setError(err.message || "Failed to update booking");
    } finally {
      setUpdatingId(null);
    }
  };

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);
      await deleteBooking(id, token);
      setBookings((prev) => prev.filter((b) => b.id !== id));
      if (selectedBooking?.id === id) setSelectedBooking(null);
      setShowDeleteDialog(false);
    } catch (err) {
      setError(err.message || "Failed to delete booking");
    } finally {
      setDeletingId(null);
      setBookingToDelete(null);
    }
  };

  const confirmDelete = (id) => {
    setBookingToDelete(id);
    setShowDeleteDialog(true);
  };

  const handleView = async (id) => {
    try {
      const data = await getBookingById(id, token);
      setSelectedBooking(normalizeBooking(data));
    } catch (err) {
      setError(err.message || "Failed to fetch booking details");
    }
  };

  const filteredBookings = useMemo(() => {
    return bookings.filter((b) => {
      const matchesStatus = statusFilter === "all" || b.status === statusFilter;
      const q = search.toLowerCase();
      const matchesSearch =
        q === "" ||
        b.userName.toLowerCase().includes(q) ||
        b.userEmail.toLowerCase().includes(q) ||
        b.carName.toLowerCase().includes(q) ||
        (b.id && b.id.toLowerCase().includes(q));
      return matchesStatus && matchesSearch;
    });
  }, [bookings, search, statusFilter]);

  const stats = useMemo(() => {
    const total = bookings.length;
    const confirmed = bookings.filter((b) => b.status === "confirmed").length;
    const pending = bookings.filter((b) => b.status === "pending").length;
    const cancelled = bookings.filter((b) => b.status === "cancelled").length;
    const revenue = bookings
      .filter(b => b.status === 'completed' || b.status === 'confirmed')
      .reduce((sum, b) => sum + (b.totalPrice || 0), 0);

    return [
      {
        title: "Total Bookings",
        value: total.toLocaleString(),
        icon: CalendarDays,
        color: "text-blue-600",
        bgColor: "bg-blue-100 dark:bg-blue-900/30",
        trend: 12
      },
      {
        title: "Confirmed",
        value: confirmed.toLocaleString(),
        icon: CheckCircle2,
        color: "text-green-600",
        bgColor: "bg-green-100 dark:bg-green-900/30",
        trend: 8
      },
      {
        title: "Pending",
        value: pending.toLocaleString(),
        icon: Clock,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/30",
        trend: -3
      },
      {
        title: "Revenue",
        value: formatCurrency(revenue),
        icon: DollarSign,
        color: "text-purple-600",
        bgColor: "bg-purple-100 dark:bg-purple-900/30",
        trend: 15
      },
    ];
  }, [bookings]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Spinner className="h-12 w-12 text-blue-500 mb-4" />
        <p className="text-gray-600 dark:text-dark-secondary_text">Loading bookings...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background p-4 md:p-6 lg:p-8 font-inter antialiased">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-3">
            <button
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-dark-header_spaces dark:text-dark-secondary_text dark:hover:text-dark-header_text rounded-full transition-all duration-200"
              onClick={() => navigate("/admindashboard")}
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
                Booking Management
              </h1>
              <p className="text-gray-600 dark:text-dark-secondary_text mt-1">
                Manage and track all rental bookings • {bookings.length} total bookings
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 w-full lg:w-auto">
            <button
              onClick={loadBookings}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white dark:bg-dark-secondary text-gray-700 dark:text-dark-header_text border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-dark-header_spaces transition-colors"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-light-Buttons to-light-secondary text-white shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300">
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0" />
            <p className="text-red-700 dark:text-red-300">{error}</p>
          </div>
        )}

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              bgColor={stat.bgColor}
              trend={stat.trend}
            />
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces p-4 md:p-6 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 dark:text-dark-secondary_text" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search by customer, vehicle, or booking ID..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-dark-header_spaces dark:bg-dark-background dark:text-dark-header_text rounded-xl focus:outline-none focus:ring-2 focus:ring-light-Buttons focus:border-transparent transition-all"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-3 w-full lg:w-auto">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-dark-secondary_text" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 dark:border-dark-header_spaces dark:bg-dark-background dark:text-dark-header_text rounded-xl focus:outline-none focus:ring-2 focus:ring-light-Buttons focus:border-transparent appearance-none"
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                  <option value="completed">Completed</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-dark-secondary_text pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {filteredBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onView={handleView}
              onStatusChange={handleStatusChange}
              onDelete={confirmDelete}
              updatingId={updatingId}
              deletingId={deletingId}
            />
          ))}
          {filteredBookings.length === 0 && (
            <div className="col-span-full text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-header_spaces mb-4">
                <Search className="w-8 h-8 text-gray-400 dark:text-dark-secondary_text" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-2">
                No bookings found
              </h3>
              <p className="text-gray-500 dark:text-dark-secondary_text">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white dark:bg-dark-background rounded-2xl shadow-lg border border-gray-100 dark:border-dark-header_spaces overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:border-dark-header_spaces flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text">
                Recent Bookings
              </h2>
              <p className="text-sm text-gray-500 dark:text-dark-secondary_text mt-1">
                Showing {filteredBookings.length} of {bookings.length} bookings
              </p>
            </div>
            <div className="text-sm text-gray-500 dark:text-dark-secondary_text">
              {new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-dark-header_spaces border-b border-gray-200 dark:border-dark-header_spaces">
                <tr>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      Customer
                    </div>
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    Vehicle
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    Duration
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    Amount
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    Status
                  </th>
                  <th className="text-left text-xs font-semibold text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-4">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-dark-header_spaces">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50 dark:hover:bg-dark-header_spaces transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center">
                            <User className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                          </div>
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900 dark:text-dark-header_text">
                            {booking.userName}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-dark-secondary_text">
                            {booking.userEmail}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-dark-secondary_text mt-1">
                            ID: {booking.id?.substring(0, 8)}...
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <img
                          src={booking.carImage}
                          alt={booking.carName}
                          className="w-16 h-10 object-cover rounded-lg border border-gray-200 dark:border-gray-600 shadow-sm"
                          onError={(e) => {
                            e.target.src = "https://placehold.co/120x80/eee/ccc?text=Car";
                          }}
                        />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-dark-header_text">
                            {booking.carName}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-dark-secondary_text">
                            {booking.carModel || 'Standard'}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-dark-header_text">
                        {getDuration(booking.startDate, booking.endDate) || "--"} days
                      </div>
                      <div className="text-xs text-gray-500 dark:text-dark-secondary_text">
                        {formatRange(booking.startDate, booking.endDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm font-bold text-gray-900 dark:text-dark-header_text">
                        {formatCurrency(booking.totalPrice)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleView(booking.id)}
                          className="p-2 text-gray-500 hover:text-light-Buttons hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                          title="View details"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <select
                          value={booking.status}
                          onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                          disabled={updatingId === booking.id}
                          className="text-sm border border-gray-300 dark:border-dark-header_spaces dark:bg-dark-background dark:text-dark-header_text rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-light-Buttons"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="completed">Completed</option>
                        </select>
                        <button
                          onClick={() => confirmDelete(booking.id)}
                          disabled={deletingId === booking.id}
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors disabled:opacity-50"
                          title="Delete booking"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {filteredBookings.length === 0 && (
            <div className="text-center py-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-dark-header_spaces mb-4">
                <Search className="w-8 h-8 text-gray-400 dark:text-dark-secondary_text" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-2">
                No bookings found
              </h3>
              <p className="text-gray-500 dark:text-dark-secondary_text mb-4">
                Try adjusting your search or filter criteria
              </p>
              <button
                onClick={() => { setSearch(''); setStatusFilter('all'); }}
                className="text-light-Buttons dark:text-dark-Buttons hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Booking Details Modal */}
        {selectedBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-dark-background rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-200 dark:border-dark-header_spaces">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-dark-header_text">
                    Booking Details
                  </h3>
                  <button
                    onClick={() => setSelectedBooking(null)}
                    className="p-2 text-gray-500 hover:text-gray-700 dark:text-dark-secondary_text dark:hover:text-dark-header_text rounded-lg hover:bg-gray-100 dark:hover:bg-dark-header_spaces"
                  >
                    <XCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-dark-secondary_text mb-2">CUSTOMER INFORMATION</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <User className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text font-medium">{selectedBooking.userName}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Full Name</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text">{selectedBooking.userEmail}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Email Address</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text">{selectedBooking.userPhone}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Phone Number</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-dark-secondary_text mb-2">VEHICLE INFORMATION</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Car className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text font-medium">{selectedBooking.carName}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">{selectedBooking.carModel} • {selectedBooking.carYear}</p>
                          </div>
                        </div>
                        <img
                          src={selectedBooking.carImage}
                          alt={selectedBooking.carName}
                          className="w-full h-40 object-cover rounded-lg border border-gray-200 dark:border-gray-700"
                          onError={(e) => {
                            e.target.src = "https://placehold.co/600x300/eee/ccc?text=Vehicle+Image";
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-dark-secondary_text mb-2">BOOKING DETAILS</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text">{formatRange(selectedBooking.startDate, selectedBooking.endDate)}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Rental Period • {getDuration(selectedBooking.startDate, selectedBooking.endDate)} days</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text">Pickup: {selectedBooking.pickupLocation}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Drop-off: {selectedBooking.dropoffLocation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-500 dark:text-dark-secondary_text mb-2">PAYMENT & STATUS</h4>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <CreditCard className="w-4 h-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-900 dark:text-dark-header_text">{selectedBooking.paymentMethod}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Payment Method</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <StatusBadge status={selectedBooking.status} />
                          <div className="ml-2">
                            <p className="text-sm text-gray-900 dark:text-dark-header_text font-bold">{formatCurrency(selectedBooking.totalPrice)}</p>
                            <p className="text-xs text-gray-500 dark:text-dark-secondary_text">Total Amount</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-dark-header_spaces flex justify-end gap-3">
                  <button
                    onClick={() => handleStatusChange(selectedBooking.id, 'cancelled')}
                    className="px-4 py-2 text-red-600 border border-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                  >
                    Cancel Booking
                  </button>
                  <button
                    onClick={() => {
                      // Implement print or share functionality
                    }}
                    className="px-4 py-2 bg-light-Buttons text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Print Invoice
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Delete Confirmation Dialog */}
        <Dialog open={showDeleteDialog} handler={() => setShowDeleteDialog(false)}>
          <DialogBody className="p-6">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text mb-2">
                Delete Booking
              </h3>
              <p className="text-gray-600 dark:text-dark-secondary_text mb-6">
                Are you sure you want to delete this booking? This action cannot be undone.
              </p>
            </div>
          </DialogBody>
          <DialogFooter className="gap-3 p-6 border-t border-gray-200 dark:border-dark-header_spaces">
            <Button
              variant="outlined"
              onClick={() => {
                setShowDeleteDialog(false);
                setBookingToDelete(null);
              }}
              className="border-gray-300 dark:border-dark-header_spaces text-gray-700 dark:text-dark-header_text"
              fullWidth
            >
              Cancel
            </Button>
            <Button
              variant="gradient"
              color="red"
              onClick={() => handleDelete(bookingToDelete)}
              disabled={deletingId === bookingToDelete}
              className="bg-gradient-to-r from-red-600 to-red-700"
              fullWidth
            >
              {deletingId === bookingToDelete ? 'Deleting...' : 'Delete Booking'}
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
    </div>
  );
}