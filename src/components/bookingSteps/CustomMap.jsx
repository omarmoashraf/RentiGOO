// src/components/bookingSteps/CustomMap.jsx
import React from "react";
import { MapPin, Navigation2, Target, Building, Plane, Home, Store } from "lucide-react";

const CustomMap = ({ 
  pickupLocation, 
  returnLocation, 
  onLocationSelect, 
  selectedLocationType,
  sameLocation 
}) => {
  const predefinedLocations = [
    {
      id: 1,
      name: "Main Office",
      address: "123 Premium Ave, New York, NY 10001",
      type: "office",
      coordinates: { x: 50, y: 50 },
      icon: <Building size={16} />,
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "JFK Airport",
      address: "JFK Airport, Queens, NY 11430",
      type: "airport",
      coordinates: { x: 30, y: 70 },
      icon: <Plane size={16} />,
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "Central Park",
      address: "Central Park, Manhattan, NY 10022",
      type: "park",
      coordinates: { x: 60, y: 40 },
      icon: <Home size={16} />,
      color: "bg-emerald-500"
    },
    {
      id: 4,
      name: "Times Square",
      address: "Times Square, Manhattan, NY 10036",
      type: "landmark",
      coordinates: { x: 70, y: 30 },
      icon: <Store size={16} />,
      color: "bg-purple-500"
    },
    {
      id: 5,
      name: "Brooklyn Bridge",
      address: "Brooklyn Bridge, NY 10038",
      type: "landmark",
      coordinates: { x: 40, y: 20 },
      icon: <Navigation2 size={16} />,
      color: "bg-orange-500"
    },
    {
      id: 6,
      name: "Your Location",
      address: "Use my current location",
      type: "current",
      coordinates: { x: 80, y: 60 },
      icon: <Target size={16} />,
      color: "bg-red-500"
    }
  ];

  const handleMapClick = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const address = `Custom Location (${Math.round(x)}%, ${Math.round(y)}%)`;
    const customLocation = {
      address,
      coordinates: { x, y },
      isCustom: true
    };
    
    onLocationSelect(selectedLocationType, customLocation);
  };

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-dark-background dark:to-gray-800 rounded-xl border-2 border-gray-300 dark:border-gray-700 overflow-hidden">
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] cursor-pointer"
        onClick={handleMapClick}
      />
      
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-400/20 to-blue-300/10 dark:from-blue-900/30 dark:to-blue-800/20"></div>
      
      <div className="absolute top-1/2 left-0 right-0 h-2 bg-gray-700/30 dark:bg-gray-600/40 transform -translate-y-1/2"></div>
      <div className="absolute left-1/2 top-0 bottom-0 w-2 bg-gray-700/30 dark:bg-gray-600/40 transform -translate-x-1/2"></div>
      
      {predefinedLocations.map((location) => (
        <button
          key={location.id}
          className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 ${
            (pickupLocation?.address === location.address || returnLocation?.address === location.address)
              ? 'z-20'
              : 'z-10'
          }`}
          style={{
            left: `${location.coordinates.x}%`,
            top: `${location.coordinates.y}%`,
          }}
          onClick={() => onLocationSelect(selectedLocationType, {
            address: location.address,
            coordinates: location.coordinates,
            name: location.name,
            type: location.type
          })}
          title={location.name}
        >
          <div className={`relative ${location.color} w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg`}>
            {location.icon}
            {(pickupLocation?.address === location.address || returnLocation?.address === location.address) && (
              <div className="absolute inset-0 animate-ping rounded-full bg-inherit opacity-40"></div>
            )}
          </div>
        </button>
      ))}
      
      {pickupLocation && pickupLocation.coordinates && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{
            left: `${pickupLocation.coordinates.x}%`,
            top: `${pickupLocation.coordinates.y}%`,
          }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-light-Buttons to-light-secondary rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
              <MapPin size={20} />
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded whitespace-nowrap">
              Pickup
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      )}
      
      {!sameLocation && returnLocation && returnLocation.coordinates && (
        <div
          className="absolute transform -translate-x-1/2 -translate-y-1/2 z-30"
          style={{
            left: `${returnLocation.coordinates.x}%`,
            top: `${returnLocation.coordinates.y}%`,
          }}
        >
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white shadow-xl animate-bounce">
              <MapPin size={20} />
            </div>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded whitespace-nowrap">
              Return
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </div>
      )}
      
      {!sameLocation && pickupLocation?.coordinates && returnLocation?.coordinates && (
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-20">
          <line
            x1={`${pickupLocation.coordinates.x}%`}
            y1={`${pickupLocation.coordinates.y}%`}
            x2={`${returnLocation.coordinates.x}%`}
            y2={`${returnLocation.coordinates.y}%`}
            stroke="url(#gradient)"
            strokeWidth="3"
            strokeDasharray="10,5"
            markerEnd="url(#arrowhead)"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0072ff" />
              <stop offset="100%" stopColor="#00c6ff" />
            </linearGradient>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#00c6ff" />
            </marker>
          </defs>
        </svg>
      )}
      
      <div className="absolute bottom-4 left-4 bg-black/70 text-white text-xs px-3 py-2 rounded-lg">
        Click anywhere on the map to select location
      </div>
      
      <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="text-xs font-semibold mb-2 dark:text-white">Legend</div>
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-light-Buttons to-light-secondary rounded-full"></div>
            <span className="text-xs dark:text-gray-300">Pickup</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
            <span className="text-xs dark:text-gray-300">Return</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomMap;