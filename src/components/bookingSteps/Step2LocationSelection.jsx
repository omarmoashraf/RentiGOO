// src/components/bookingSteps/Step2LocationSelection.jsx
import React from "react";
import { MapPin, X, Search, CheckCircle } from "lucide-react";
import CustomMap from "./CustomMap";

const Step2LocationSelection = ({
  pickupLocation,
  setPickupLocation,
  returnLocation,
  setReturnLocation,
  sameLocation,
  setSameLocation,
  selectedLocationType,
  setSelectedLocationType,
  customAddress,
  setCustomAddress,
  onBack,
  onNext
}) => {
  const predefinedLocations = [
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

  const handleLocationSelect = (type, location) => {
    const locationData = {
      address: location.address,
      coordinates: location.coordinates,
      name: location.name || location.address,
      type: location.type || "custom"
    };

    if (type === "pickup") {
      setPickupLocation(locationData);
      if (sameLocation) {
        setReturnLocation(locationData);
      }
    } else {
      setReturnLocation(locationData);
    }
  };

  const handleCustomAddress = () => {
    if (!customAddress.trim()) return;
    
    const locationData = {
      address: customAddress,
      coordinates: { x: Math.random() * 80 + 10, y: Math.random() * 80 + 10 },
      name: "Custom Location",
      type: "custom"
    };

    if (selectedLocationType === "pickup") {
      setPickupLocation(locationData);
      if (sameLocation) {
        setReturnLocation(locationData);
      }
    } else {
      setReturnLocation(locationData);
    }
    
    setCustomAddress("");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-secondary p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
            <MapPin className="text-white" size={24} />
          </div>
          <div>
            <h2 className="text-2xl font-bold dark:text-dark-header_text">
              Select Pickup & Return Locations
            </h2>
            <p className="text-gray-600 dark:text-dark-secondary_text">
              Choose where you want to pick up and return the vehicle
            </p>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setSelectedLocationType("pickup")}
              className={`px-4 py-3 rounded-lg flex items-center gap-2 flex-1 justify-center ${
                selectedLocationType === "pickup"
                  ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white shadow-lg"
                  : "bg-gray-100 dark:bg-dark-background text-gray-700 dark:text-dark-header_text hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
            >
              <MapPin size={18} />
              <span className="font-medium">Selecting Pickup</span>
            </button>
            <button
              onClick={() => !sameLocation && setSelectedLocationType("return")}
              className={`px-4 py-3 rounded-lg flex items-center gap-2 flex-1 justify-center ${
                selectedLocationType === "return"
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg"
                  : !sameLocation
                  ? "bg-gray-100 dark:bg-dark-background text-gray-700 dark:text-dark-header_text hover:bg-gray-200 dark:hover:bg-gray-700"
                  : "bg-gray-100 dark:bg-dark-background text-gray-400 dark:text-gray-600 cursor-not-allowed"
              }`}
              disabled={sameLocation}
            >
              <MapPin size={18} />
              <span className="font-medium">Selecting Return</span>
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-dark-background mb-6">
            <div>
              <p className="font-medium dark:text-dark-header_text">Same Pickup & Return Location</p>
              <p className="text-sm text-gray-600 dark:text-dark-secondary_text">
                Return vehicle to the same location
              </p>
            </div>
            <button
              onClick={() => {
                setSameLocation(!sameLocation);
                if (!sameLocation) {
                  setSelectedLocationType("pickup");
                }
              }}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors ${
                sameLocation
                  ? "bg-gradient-to-r from-light-Buttons to-light-secondary"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
            >
              <span
                className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform shadow-lg ${
                  sameLocation ? "translate-x-8" : "translate-x-1"
                }`}
              />
            </button>
          </div>
        </div>

        <div className="mb-6">
          <CustomMap
            pickupLocation={pickupLocation}
            returnLocation={returnLocation}
            onLocationSelect={handleLocationSelect}
            selectedLocationType={selectedLocationType}
            sameLocation={sameLocation}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-2 dark:text-dark-header_text">
            Or Enter Custom Address:
          </label>
          <div className="flex gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-dark-secondary_text" size={20} />
              <input
                type="text"
                placeholder="Enter custom address..."
                value={customAddress}
                onChange={(e) => setCustomAddress(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-transparent dark:text-dark-header_text focus:outline-none focus:ring-2 focus:ring-light-Buttons dark:focus:ring-dark-Buttons transition-all"
                onKeyPress={(e) => e.key === 'Enter' && handleCustomAddress()}
              />
            </div>
            <button
              onClick={handleCustomAddress}
              disabled={!customAddress.trim()}
              className={`px-6 py-3 rounded-lg font-medium ${
                customAddress.trim()
                  ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90"
                  : "bg-gray-200 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              }`}
            >
              Add
            </button>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-sm font-medium dark:text-dark-header_text mb-3">
            Popular Locations:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {predefinedLocations.map((loc) => (
              <button
                key={loc.id}
                onClick={() => handleLocationSelect(selectedLocationType, loc)}
                className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-light-Buttons dark:hover:border-dark-Buttons hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-left group"
              >
                <div className={`${loc.color} w-10 h-10 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                  <div className="text-lg">{loc.name.charAt(0)}</div>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium dark:text-dark-header_text truncate">{loc.name}</p>
                  <p className="text-xs text-gray-600 dark:text-dark-secondary_text truncate">
                    {loc.address}
                  </p>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-4 mb-8">
          {pickupLocation && (
            <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-light-Buttons to-light-secondary flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-dark-header_text">Pickup Location</p>
                    <p className="text-sm text-gray-700 dark:text-dark-secondary_text">
                      {pickupLocation.address}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setPickupLocation(null)}
                  className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}

          {!sameLocation && returnLocation && (
            <div className="p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold dark:text-dark-header_text">Return Location</p>
                    <p className="text-sm text-gray-700 dark:text-dark-secondary_text">
                      {returnLocation.address}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setReturnLocation(null)}
                  className="p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-900/30 text-red-600 dark:text-red-400"
                >
                  <X size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between">
          <button
            onClick={onBack}
            className="px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-dark-header_text font-semibold hover:bg-gray-50 dark:hover:bg-dark-secondary transition-colors"
          >
            Back to Dates
          </button>
          <button
            onClick={onNext}
            disabled={!pickupLocation || (!sameLocation && !returnLocation)}
            className={`px-8 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              pickupLocation && (sameLocation || returnLocation)
                ? "bg-gradient-to-r from-light-Buttons to-light-secondary text-white hover:opacity-90 shadow-lg"
                : "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed"
            }`}
          >
            Continue to Review
            <CheckCircle size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Step2LocationSelection;