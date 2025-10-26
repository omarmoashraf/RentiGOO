import { Card, CardBody, Button } from "@material-tailwind/react";
import { FaHome, FaSearch, FaCar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-white flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto">
          <Card className="bg-white/80 backdrop-blur-md shadow-md border border-gray-200">
            <CardBody className="pt-8 sm:pt-12 lg:pt-16 pb-8 sm:pb-12 lg:pb-16 text-center">
              {/* 404 Icon */}
              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="text-[80px] xs:text-[100px] sm:text-[120px] md:text-[150px] lg:text-[180px] font-bold text-blue-500/20 select-none">
                    404
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 xs:w-18 xs:h-18 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaCar className="w-8 h-8 xs:w-9 xs:h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 text-blue-700" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <h1 className="text-2xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                  Page Not Found
                </h1>
                <p className="text-base sm:text-lg text-gray-600 max-w-md mx-auto px-2 xs:px-0">
                  Oops! Looks like this route has taken a wrong turn. The page you're looking for doesn't exist or has been moved.
                </p>
              </div>

              {/* Suggestions */}
              <div className="bg-gray-100 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 max-w-md mx-auto">
                <h3 className="font-semibold text-gray-800 mb-2 sm:mb-3 text-sm sm:text-base">What you can do:</h3>
                <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 text-left">
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>Check the URL for typos or errors</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>Return to the homepage and start fresh</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>Browse our collection of premium vehicles</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-blue-700 rounded-full mt-1.5 sm:mt-2 flex-shrink-0" />
                    <span>Contact our support team for assistance</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/")}
className="w-full xs:w-auto flex items-center justify-center text-sm sm:text-base bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] text-white font-semibold shadow-md hover:shadow-lg transition-all duration-200 transform hover:scale-105"
                >
                  <FaHome className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
                <Button
                  size="lg"
                  variant="outlined"
                  onClick={() => navigate("/cars")}
                                 
className="w-full xs:w-auto flex items-center justify-center border border-blue-900 bg-white bg-clip-text text-transparent font-semibold text-sm sm:text-base bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] transition-all"
                >
                  <FaSearch className="w-4 h-4 mr-2" />
                  Browse Cars
                </Button>
              </div>

              {/* Help Link */}
              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                <p className="text-xs sm:text-sm text-gray-600">
                  Need help?{" "}
                  <button
                    onClick={() => navigate("/contact")}
                    className="text-blue-800 hover:underline font-medium"
                  >
                    Contact Support
                  </button>
                </p>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;