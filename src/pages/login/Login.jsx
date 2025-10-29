import { useState } from "react";
import {
  Card,
  Input,
  Button,
  Checkbox,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
} from "@material-tailwind/react";
import { 
  FaEnvelope, 
  FaLock, 
  FaCheck,
  FaShieldAlt,
  FaHeadset,
  FaCar,
  FaGoogle,
  FaFacebook,
  FaApple
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import rentigoLogo from "../../assets/rentigo-logo.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    
    e.preventDefault();
    
    // Handle login logic here
    console.log("Logging in user:", { email, password });
    // After successful login, redirect to dashboard
    // navigate('/dashboard');
  };



  const features = [
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Secure Platform",
      description: "Bank-level encryption to protect your data and transactions"
    },
    {
      icon: <FaCar className="w-5 h-5" />,
      title: "Premium Fleet",
      description: "Access to luxury vehicles and the latest car models"
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs"
    },
    {
      icon: <FaCheck className="w-5 h-5" />,
      title: "Easy Booking",
      description: "Seamless reservation process with instant confirmation"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* ---------- LEFT SECTION ---------- */}
        <div className="text-center lg:text-left space-y-8">
          {/* Logo & Brand */}
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <div className="w-12 h-12">
              <img
                src={rentigoLogo}
                alt="RentiGO"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <Typography variant="h4" className="font-bold text-gray-900">
                RentiGO
              </Typography>
              <Typography className="text-gray-600 text-sm font-medium">
                Premium Car Rental
              </Typography>
            </div>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <Typography variant="h1" className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome Back to
              <span className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent block font-extrabold">Your Drive</span>
            </Typography>
            <Typography className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sign in to access your premium car rental account and continue your journey with seamless booking and exceptional service.
            </Typography>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-blue-600">
                    {feature.icon}
                  </div>
                </div>
                <div className="text-left">
                  <Typography variant="h6" className="font-semibold text-gray-900 mb-1">
                    {feature.title}
                  </Typography>
                  <Typography className="text-sm text-gray-600">
                    {feature.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="flex justify-center">
          <Card className="rounded-2xl shadow-lg w-full max-w-md border border-gray-100 bg-white">
            {/* Tabs */}
            <div className="px-8 pt-8">
              <Tabs value="signin" className="overflow-visible">
                <TabsHeader className="bg-gray-100 p-1 rounded-lg" indicatorProps={{ className: "bg-white shadow-sm rounded-md" }}>
                  <Tab 
                    value="signin" 
                    onClick={() => navigate('/login')}
                    className="py-3"
                  >
                    <Typography className="font-semibold text-sm">
                      Sign In
                    </Typography>
                  </Tab>
                  <Tab 
                    value="signup" 
                    onClick={() => navigate('/register')}
                    className="py-3"
                  >
                    <Typography className="font-semibold text-sm">
                      Sign Up
                    </Typography>
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>

            <div className="p-8">
              {/* Title */}
              <div className="text-center mb-8">
                <Typography variant="h3" className="font-bold text-gray-900 mb-2">
                  Welcome Back
                </Typography>
                <Typography className="text-gray-600">
                  Sign in to your account to continue
                </Typography>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <InputField
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  icon={<FaEnvelope className="w-4 h-4" />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                  label="Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<FaLock className="w-4 h-4" />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                {/* Remember Me & Forgot Password */}
                <div className="flex justify-between items-center">
                  <Checkbox
                    label={
                      <Typography className="text-sm text-gray-700 font-medium">
                        Remember me
                      </Typography>
                    }
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                     color="blue"
                  />
                  <Link 
                    to="/forgot-password"
                   className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-semibold text-sm hover:from-[#0052cc] hover:to-[#004bb5] transition-all"                  >
                    Forgot password?
                  </Link>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
 className={`text-white font-medium shadow-md transition-all 
              bg-gradient-to-r from-[#0066ff] to-[#0052cc] 
              hover:from-[#0052cc] hover:to-[#004bb5] hover:shadow-lg`}
>                
                  Sign In
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <Typography variant="small" className="bg-white px-4 text-gray-500 font-medium">
                      OR CONTINUE WITH
                    </Typography>
                  </div>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-3">
                  <SocialButton
                    icon={<FaGoogle className="w-4 h-4" />}
                    brand="google"
                  />
                  <SocialButton
                    icon={<FaFacebook className="w-4 h-4" />}
                    brand="facebook"
                  />
                  <SocialButton
                    icon={<FaApple className="w-4 h-4" />}
                    brand="apple"
                  />
                </div>

                <div className="text-center pt-4">
                  <Typography className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
 className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-semibold text-sm hover:from-[#0052cc] hover:to-[#004bb5] transition-all"                    >
                      Sign Up
                    </Link>
                  </Typography>
                </div>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

/* ------------ SUBCOMPONENTS ------------ */

const InputField = ({ label, icon, ...props }) => (
  <div className="space-y-2">
    <Typography variant="small" className="font-semibold text-gray-700">
      {label}
    </Typography>
    <div className="relative">
      <Input
        {...props}
        className="pl-10 !border-gray-300 focus:!border-blue-500 bg-gray-50/50 rounded-lg"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{ className: "min-w-0" }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {icon}
      </div>
    </div>
  </div>
);

const SocialButton = ({ icon, brand }) => {
  const brandColors = {
    google: "hover:bg-red-50 border-gray-300",
    facebook: "hover:bg-blue-50 border-gray-300", 
    apple: "hover:bg-gray-100 border-gray-300"
  };

  return (
    <Button
      variant="outlined"
      size="sm"
      fullWidth
      className={`flex items-center justify-center p-3 rounded-lg border transition-colors ${brandColors[brand]}`}
    >
      <span className="text-gray-600">
        {icon}
      </span>
    </Button>
  );
};

export default Login;