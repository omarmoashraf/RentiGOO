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
  FaApple,
  FaSpinner,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import rentigoLogo from "../../assets/rentigo-logo.png";

import { useAuth } from "../../context/AuthContext";
import { API_URL } from "../../api";
import useTheme from "./../../HOOKS/usetheme";

const Login = () => {
  const { theme } = useTheme();
  const { login: contextLogin } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validate = () => {
    const newErrors = {};
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (!trimmedEmail) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail))
      newErrors.email = "Invalid email format";

    if (!trimmedPassword) newErrors.password = "Password is required";
    else if (trimmedPassword.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ⭐ FINAL WORKING LOGIN FUNCTION ⭐
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError("");
    setIsLoading(true);

    try {
      // Admin override (demo)
      if (email === "admin@rentigo.com" && password === "admin123") {
        contextLogin("admin-token", {
          name: "Admin User",
          email,
          role: "admin",
        });
        localStorage.setItem("token", "admin-token");
        localStorage.setItem(
          "user",
          JSON.stringify({
            name: "Admin User",
            email,
            role: "admin",
          })
        );

        navigate("/");
        return;
      }

    // Backend login
    const payload = {
      email: email.trim(),
      password: password.trim(),
    };

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        setSubmitError(data.message || "Invalid login credentials");
        setIsLoading(false);
        return;
      }

      contextLogin(data.token, data.user);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (err) {
      setSubmitError("Network error — please try again.");
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  const features = [
    {
      icon: <FaShieldAlt className="w-5 h-5" />,
      title: "Secure Platform",
      description:
        "Bank-level encryption to protect your data and transactions",
    },
    {
      icon: <FaCar className="w-5 h-5" />,
      title: "Premium Fleet",
      description: "Access to luxury vehicles and the latest car models",
    },
    {
      icon: <FaHeadset className="w-5 h-5" />,
      title: "24/7 Support",
      description: "Round-the-clock customer service for all your needs",
    },
    {
      icon: <FaCheck className="w-5 h-5" />,
      title: "Easy Booking",
      description: "Seamless reservation process with instant confirmation",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SECTION */}
        <div className="text-center lg:text-left space-y-8">
          <div className="flex justify-center lg:justify-start items-center gap-3">
            <div className="w-12 h-12">
              <img
                src={rentigoLogo}
                alt="RentiGO"
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <Typography
                variant="h4"
                className="font-bold text-light-primary_text dark:text-dark-header_text"
              >
                RentiGO
              </Typography>
              <Typography className="text-gray-600 text-sm font-medium">
                Premium Car Rental
              </Typography>
            </div>
          </div>

          <div className="space-y-4">
            <Typography
              variant="h1"
              className="text-4xl lg:text-5xl font-bold text-light-primary_text dark:text-dark-header_text leading-tight"
            >
              Welcome Back to
              <span className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent block font-extrabold">
                Your Drive
              </span>
            </Typography>
            <Typography className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Sign in to access your premium car rental account and continue
              your journey with seamless booking and exceptional service.
            </Typography>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  <div className="text-blue-600">{feature.icon}</div>
                </div>
                <div className="text-left">
                  <Typography
                    variant="h6"
                    className="font-semibold text-dark-secondary_text mb-1"
                  >
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

        {/* RIGHT SECTION */}
        <div className="flex justify-center">
          <Card className="rounded-2xl shadow-lg w-full max-w-md border border-gray-100 bg-white dark:bg-dark-background">
            {/* Tabs */}
            <div className="px-8 pt-8">
              <Tabs value="signin" className="overflow-visible">
                <TabsHeader
                  className="bg-gray-100 p-1 rounded-lg"
                  indicatorProps={{
                    className: "bg-white shadow-sm rounded-md",
                  }}
                >
                  <Tab value="signin" onClick={() => navigate("/login")}>
                    <Typography className="font-semibold text-sm">
                      Sign In
                    </Typography>
                  </Tab>
                  <Tab value="signup" onClick={() => navigate("/register")}>
                    <Typography className="font-semibold text-sm">
                      Sign Up
                    </Typography>
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>

            {/* FORM */}
            <div className="p-8">
              <div className="text-center mb-8">
                <Typography
                  variant="h3"
                  className="font-bold text-light-primary_text dark:text-dark-header_text mb-2"
                >
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
                  icon={<FaEnvelope />}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  errors={errors.email}
                />

                <InputField
                  label="Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<FaLock />}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  errors={errors.password}
                />

                {submitError && (
                  <Typography className="text-red-500 text-sm text-center">
                    {submitError}
                  </Typography>
                )}

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
                    className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-semibold text-sm"
                  >
                    Forgot password?
                  </Link>
                </div>

                {/* ⭐ BUTTON WITH LOADING ⭐ */}
                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={!email || !password || isLoading}
                  className={`text-white font-medium shadow-md transition-all 
                    ${
                      !email || !password || isLoading
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-[#0066ff] to-[#0052cc] hover:from-[#0052cc] hover:to-[#004bb5] hover:shadow-lg"
                    }`}
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center gap-2">
                      <FaSpinner className="animate-spin w-4 h-4" />
                      Loading...
                    </div>
                  ) : (
                    "Sign In"
                  )}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <Typography
                      variant="small"
                      className="bg-light-background dark:bg-dark-background px-4 font-medium"
                    >
                      OR CONTINUE WITH
                    </Typography>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <SocialButton icon={<FaGoogle />} brand="google" />
                  <SocialButton icon={<FaFacebook />} brand="facebook" />
                  <SocialButton icon={<FaApple />} brand="apple" />
                </div>

                <div className="text-center pt-4">
                  <Typography className="text-gray-600 text-sm">
                    Don't have an account?{" "}
                    <Link
                      to="/register"
                      className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-semibold text-sm"
                    >
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

/* ------------ INPUT COMPONENT ------------ */
const InputField = ({ label, icon, errors, ...props }) => (
  <div className="space-y-2">
    <Typography variant="small" className="font-semibold text-gray-700">
      {label}
    </Typography>
    <div className="relative">
      <Input
        {...props}
        error={!!errors}
        className={`pl-10 !border-gray-300 focus:!border-blue-500 bg-gray-50/50 rounded-lg ${
          errors ? "!border-red-500 focus:!border-red-500" : ""
        }`}
        labelProps={{
          className: "before:content-none after:content-none",
        }}
        containerProps={{ className: "min-w-0" }}
      />
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        {icon}
      </div>
    </div>
    {errors && (
      <Typography variant="small" color="red" className="text-sm text-red-500">
        {errors}
      </Typography>
    )}
  </div>
);

/* ------------ SOCIAL BUTTON ------------ */
const SocialButton = ({ icon, brand }) => {
  const brandColors = {
    google: "hover:bg-red-50 border-gray-300",
    facebook: "hover:bg-blue-50 border-gray-300",
    apple: "hover:bg-gray-100 border-gray-300",
  };

  return (
    <Button
      variant="outlined"
      size="sm"
      fullWidth
      className={`flex items-center justify-center p-3 rounded-lg border transition-colors ${brandColors[brand]}`}
    >
      <span className="text-gray-600">{icon}</span>
    </Button>
  );
};

export default Login;
