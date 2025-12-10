// src/pages/booking/MyBookings.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  Car, 
  CheckCircle, 
  Clock, 
  XCircle,
  Search,
  Filter,
  Download,
  Eye
} from "lucide-react";
import { Button, Input } from "@material-tailwind/react";
import { useAuth } from "../../context/AuthContext";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  useEffect(() => {
    // For demo - in real app, fetch from API
    const mockBookings = [
      {
        id: "1",
        reference: "RENTIGO-98765432",
        car: {
          name: "BMW 5 Series",
          image: "https://images.unsplash.com/photo-1656772119648-8fb884516e36?w=400",
          type: "Luxury Sedan"
        },
        startDate: "2024-03-15",
        endDate: "2024-03-18",
        totalPrice: 267,
        status: "confirmed",
        pickupLocation: "Main Office, 123 Premium Ave",
        createdAt: "2024-03-10"
      },
      {
        id: "2",
        reference: "RENTIGO-87654321",
        car: {
          name: "Tesla Model 3",
          image: "https://images.unsplash.com/photo-1651544022918-92083a5b7d8b?w-400",
          type: "Electric Sedan"
        },
        startDate: "2024-03-20",
        endDate: "2024-03-22",
        totalPrice: 150,
        status: "pending",
        pickupLocation: "JFK Airport",
        createdAt: "2024-03-12"
      },
      {
        id: "3",
        reference: "RENTIGO-76543210",
        car: {
          name: "Range Rover Sport",
          image: "https://images.unsplash.com/photo-1758411898310-ada9284a3086?w=400",
          type: "Luxury SUV"
        },
        startDate: "2024-02-28",
        endDate: "2024-03-05",
        totalPrice: 420,
        status: "completed",
        pickupLocation: "Central Park",
        createdAt: "2024-02-25"
      }
    ];
    
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = 
      booking.reference.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.car.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || booking.status === statusFilter;
    
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "confirmed":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
            <CheckCircle className="inline h-3 w-3 mr-1" />
            Confirmed
          </span>
        );
      case "pending":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300">
            <Clock className="inline h-3 w-3 mr-1" />
            Pending
          </span>
        );
      case "completed":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
            <CheckCircle className="inline h-3 w-3 mr-1" />
            Completed
          </span>
        );
      case "cancelled":
        return (
          <span className="px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300">
            <XCircle className="inline h-3 w-3 mr-1" />
            Cancelled
          </span>
        );
      default:
        return null;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading your bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-dark-background bg-light-background py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-light-primary_text dark:text-dark-header_text mb-2">
            My Bookings
          </h1>
          <p className="text-gray-600 dark:text-dark-secondary_text">
            View and manage all your rental bookings
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-dark-secondary rounded-xl p-4 mb-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                label="Search bookings..."
                icon={<Search className="h-4 w-4" />}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="dark:text-dark-header_text"
                labelProps={{ className: "dark:text-dark-secondary_text" }}
              />
            </div>
            <div className="w-full md:w-48">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons"
              >
                <option value="all">All Status</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
            <Button className="flex items-center gap-2 bg-gradient-to-r from-light-Buttons to-light-secondary">
              <Filter size={16} />
              Filter
            </Button>
          </div>
        </div>

        {/* Bookings List */}
        <div className="space-y-4">
          {filteredBookings.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <Calendar className="h-10 w-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold mb-2 dark:text-dark-header_text">No Bookings Found</h3>
              <p className="text-gray-600 dark:text-dark-secondary_text mb-6">
                {searchTerm ? "Try adjusting your search terms" : "You haven't made any bookings yet"}
              </p>
              <Link to="/cars">
                <Button className="bg-gradient-to-r from-light-Buttons to-light-secondary">
                  Browse Cars
                </Button>
              </Link>
            </div>
          ) : (
            filteredBookings.map((booking) => (
              <div key={booking.id} className="bg-white dark:bg-dark-secondary rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                  {/* Car Image */}
                  <div className="lg:w-48">
                    <img
                      src={booking.car.image}
                      alt={booking.car.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>

                  {/* Booking Details */}
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold dark:text-dark-header_text">{booking.car.name}</h3>
                          {getStatusBadge(booking.status)}
                        </div>
                        <p className="text-gray-600 dark:text-dark-secondary_text mb-1">{booking.car.type}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Ref: {booking.reference}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold bg-gradient-to-r from-light-Buttons to-light-secondary bg-clip-text text-transparent">
                          ${booking.totalPrice}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Total Amount</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <Calendar className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Rental Period</p>
                          <p className="font-medium dark:text-dark-header_text">
                            {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <MapPin className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">Pickup Location</p>
                          <p className="font-medium dark:text-dark-header_text truncate">{booking.pickupLocation}</p>
                        </div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        size="sm"
                        className="flex items-center gap-2 bg-gradient-to-r from-light-Buttons to-light-secondary"
                      >
                        <Eye size={14} />
                        View Details
                      </Button>
                      <Button
                        size="sm"
                        variant="outlined"
                        className="flex items-center gap-2 border-light-Buttons text-light-Buttons dark:border-dark-Buttons dark:text-dark-Buttons"
                      >
                        <Download size={14} />
                        Download Invoice
                      </Button>
                      {booking.status === "pending" && (
                        <Button size="sm" variant="text" className="text-red-600 hover:text-red-700">
                          Cancel Booking
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default MyBookings;