// src/components/bookingSteps/utils.js
export const predefinedLocations = [
  {
    id: 1,
    name: "Main Office",
    address: "123 Premium Ave, New York, NY 10001",
    type: "office",
    coordinates: { x: 50, y: 50 },
    color: "bg-blue-500"
  },
  {
    id: 2,
    name: "JFK Airport",
    address: "JFK Airport, Queens, NY 11430",
    type: "airport",
    coordinates: { x: 30, y: 70 },
    color: "bg-green-500"
  },
  {
    id: 3,
    name: "Central Park",
    address: "Central Park, Manhattan, NY 10022",
    type: "park",
    coordinates: { x: 60, y: 40 },
    color: "bg-emerald-500"
  },
  {
    id: 4,
    name: "Times Square",
    address: "Times Square, Manhattan, NY 10036",
    type: "landmark",
    coordinates: { x: 70, y: 30 },
    color: "bg-purple-500"
  },
  {
    id: 5,
    name: "Brooklyn Bridge",
    address: "Brooklyn Bridge, NY 10038",
    type: "landmark",
    coordinates: { x: 40, y: 20 },
    color: "bg-orange-500"
  },
  {
    id: 6,
    name: "Your Location",
    address: "Use my current location",
    type: "current",
    coordinates: { x: 80, y: 60 },
    color: "bg-red-500"
  }
];

export const getMinDate = () => {
  const today = new Date();
  return today.toISOString().split("T")[0];
};

export const getMaxDate = () => {
  const maxDate = new Date();
  maxDate.setMonth(maxDate.getMonth() + 6);
  return maxDate.toISOString().split("T")[0];
};

export const calculateDays = (startDate, endDate) => {
  if (!startDate || !endDate) return 0;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const msInDay = 1000 * 60 * 60 * 24;
  const diff = Math.ceil((end - start) / msInDay);
  return diff > 0 ? diff : 0;
};