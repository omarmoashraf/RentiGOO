import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Download,
  CalendarDays,
  CheckCircle2,
  Clock,
  CheckCircle,
  Eye,
  Trash2,
} from "lucide-react";
import { Spinner } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";
import {
  fetchBookings,
  fetchBookingById,
  updateBooking,
  deleteBooking,
} from "../../services/bookings";

const StatusBadge = ({ status }) => {
  const statusMap = {
    confirmed: {
      text: "Confirmed",
      icon: <CheckCircle2 className="w-3 h-3 mr-1" />,
      className: "bg-green-100 text-green-700",
    },
    completed: {
      text: "Completed",
      icon: <CheckCircle className="w-3 h-3 mr-1" />,
      className: "bg-blue-100 text-blue-700",
    },
    pending: {
      text: "Pending",
      icon: <Clock className="w-3 h-3 mr-1" />,
      className: "bg-yellow-100 text-yellow-700",
    },
    cancelled: {
      text: "Cancelled",
      icon: <Clock className="w-3 h-3 mr-1" />,
      className: "bg-red-100 text-red-700",
    },
  };

  const currentStatus = statusMap[status] || statusMap.pending;

  return (
    <span
      className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${currentStatus.className}`}
    >
      {currentStatus.icon}
      {currentStatus.text}
    </span>
  );
};

const StatCard = ({ title, value, icon: Icon, color, bgColor }) => {
  return (
    <div className="bg-white dark:bg-dark-background p-5 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-dark-header_text">
          {title}
        </p>
        <p className="text-2xl font-semibold text-gray-900 mt-1 dark:text-dark-secondary_text">
          {value}
        </p>
      </div>
      <div className={`p-3 rounded-full ${bgColor} ${color}`}>
        <Icon className="w-6 h-6" />
      </div>
    </div>
  );
};

const normalizeBooking = (raw) => {
  const user = raw?.user || {};
  const car = raw?.car || {};
  return {
    id: raw?._id || raw?.id,
    startDate: raw?.startDate,
    endDate: raw?.endDate,
    status: raw?.status || "pending",
    totalPrice: raw?.totalPrice,
    userName: user?.name || user?.username || "Unknown user",
    userEmail: user?.email || "",
    carName: car?.name || "Vehicle",
    carImage:
      car?.image ||
      car?.thumbnail ||
      (Array.isArray(car?.images) && car.images[0]) ||
      "https://placehold.co/120x80/eee/ccc?text=Car",
    carId: car?._id || car?.id,
    raw,
  };
};

const formatRange = (start, end) => {
  if (!start || !end) return "Dates not set";
  return `${new Date(start).toLocaleDateString()} - ${new Date(
    end
  ).toLocaleDateString()}`;
};

const getDuration = (start, end) => {
  if (!start || !end) return null;
  const diff = Math.ceil(
    (new Date(end) - new Date(start)) / (1000 * 60 * 60 * 24)
  );
  return diff > 0 ? diff : null;
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
    } catch (err) {
      setError(err.message || "Failed to delete booking");
    } finally {
      setDeletingId(null);
    }
  };

  const handleView = async (id) => {
    try {
      const data = await fetchBookingById(id, token);
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

    return [
      {
        title: "Total Bookings",
        value: String(total),
        icon: CalendarDays,
        color: "text-blue-600",
        bgColor: "bg-blue-100",
      },
      {
        title: "Confirmed",
        value: String(confirmed),
        icon: CheckCircle2,
        color: "text-green-600",
        bgColor: "bg-green-100",
      },
      {
        title: "Pending",
        value: String(pending),
        icon: Clock,
        color: "text-yellow-600",
        bgColor: "bg-yellow-100",
      },
      {
        title: "Cancelled",
        value: String(cancelled),
        icon: CalendarDays,
        color: "text-red-600",
        bgColor: "bg-red-100",
      },
    ];
  }, [bookings]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Spinner className="h-10 w-10" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-background p-4 sm:p-8 font-inter antialiased">
      <div className="max-w-screen-xl mx-auto ">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <button
              className="p-2 text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors"
              onClick={() => navigate("/admindashboard")}
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent">
                Booking Management
              </h1>
              <p className="text-gray-600 mt-1">
                Manage and track all rental bookings
              </p>
            </div>
          </div>
          <button className="flex items-center gap-2  px-4 py-2 rounded-lg shadow-sm border border-gray-300 hover:bg-blue-600 transition-colors w-full sm:w-auto justify-center bg-light-Buttons text-black">
            <Download className="w-4 h-4" />
            Export
          </button>
        </header>

        {error && (
          <div className="mb-4 text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-lg">
            {error}
          </div>
        )}

        {/* Stats Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 ">
          {stats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              value={stat.value}
              icon={stat.icon}
              color={stat.color}
              bgColor={stat.bgColor}
            />
          ))}
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white dark:bg-dark-background rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 w-full">
            {/* Search Bar */}
            <div className="flex-1 w-full ">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search bookings..."
                className="w-full border border-gray-300 dark:bg-dark-background dark:text-dark-header_text rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              />
            </div>

            {/* Status Filter */}
            <div className="w-full md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full border border-gray-300 rounded-lg dark:bg-dark-background dark:text-dark-header_text px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        {/* Recent Bookings Table Section */}
        <div className="bg-white dark:bg-dark-background dark:text-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 border-b border-gray-200 dark:text-dark-background">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-dark-header_text">
              Recent Bookings
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              {/* Table Header */}
              <thead className="bg-gray-50 border-b  dark:bg-dark-background   border-gray-200">
                <tr>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Booking ID
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Customer
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Vehicle
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Duration
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Amount
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Status
                  </th>
                  <th className="text-left text-xs font-medium text-gray-900 dark:text-dark-header_text uppercase tracking-wider px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody className="divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr
                    key={booking.id}
                    className="hover:bg-gray-50 transition-colors "
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-dark-Buttons">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-dark-secondary_text">
                        {booking.userName}
                      </div>
                      <div className="text-sm text-gray-500 dark:text-dark-secondary_text">
                        {booking.userEmail}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3 dark:text-dark-secondary_text">
                        <img
                          src={booking.carImage}
                          alt={booking.carName}
                          className="w-16 h-10 object-cover rounded-md border border-gray-200"
                          onError={(e) => {
                            e.target.src =
                              "https://placehold.co/120x80/eee/ccc?text=Error";
                          }}
                        />
                        <span className="text-sm font-medium text-gray-900 dark:text-dark-secondary_text">
                          {booking.carName}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900 dark:text-dark-secondary_text">
                        {getDuration(booking.startDate, booking.endDate) || "--"}{" "}
                        days
                      </div>
                      <div className="text-sm text-gray-500">
                        {formatRange(booking.startDate, booking.endDate)}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-dark-secondary_text">
                      {booking.totalPrice ? `$${booking.totalPrice}` : "--"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <StatusBadge status={booking.status} />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          onClick={() => handleView(booking.id)}
                        >
                          <Eye className="w-5 h-5" />
                        </button>
                        <select
                          value={booking.status}
                          onChange={(e) =>
                            handleStatusChange(booking.id, e.target.value)
                          }
                          disabled={updatingId === booking.id}
                          className="border border-gray-300 rounded-md px-2 py-1 text-sm"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                        <button
                          className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          onClick={() => handleDelete(booking.id)}
                          disabled={deletingId === booking.id}
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedBooking && (
          <div className="mt-6 bg-white dark:bg-dark-background p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-dark-header_text">
              Booking Details
            </h3>
            <div className="text-sm text-gray-700 dark:text-dark-secondary_text space-y-1">
              <p>
                <strong>ID:</strong> {selectedBooking.id}
              </p>
              <p>
                <strong>User:</strong> {selectedBooking.userName} (
                {selectedBooking.userEmail || "no email"})
              </p>
              <p>
                <strong>Vehicle:</strong> {selectedBooking.carName}
              </p>
              <p>
                <strong>Dates:</strong>{" "}
                {formatRange(selectedBooking.startDate, selectedBooking.endDate)}
              </p>
              <p>
                <strong>Status:</strong> {selectedBooking.status}
              </p>
              <p>
                <strong>Total:</strong>{" "}
                {selectedBooking.totalPrice
                  ? `$${selectedBooking.totalPrice}`
                  : "N/A"}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
