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
  FaUser,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaCheck,
  FaShieldAlt,
  FaHeadset,
  FaCar,
  FaGoogle,
  FaFacebook,
  FaApple,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import rentigoLogo from "../../assets/rentigo-logo.png";
import useTheme from "./../../HOOKS/usetheme";

const Register = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    telephone: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const { theme } = useTheme();

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validate = () => {
    let newErrors = {};

    if (activeTab === "signup") {
      if (!formData.firstName.trim())
        newErrors.firstName = "First name is required";
      if (!formData.lastName.trim())
        newErrors.lastName = "Last name is required";
      if (!formData.telephone.trim())
        newErrors.telephone = "Phone number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    if (activeTab === "signup") {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Please confirm your password";
      } else if (formData.confirmPassword !== formData.password) {
        newErrors.confirmPassword = "Passwords do not match";
      }

      if (!formData.agreeTerms) {
        newErrors.agreeTerms = "You must agree to the terms";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    if (activeTab === "signup") {
      console.log("Registering user:", formData);
      // navigate('/login');
    } else {
      console.log("Logging in user:", {
        email: formData.email,
        password: formData.password,
      });
      // navigate('/dashboard');
    }
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

          {/* Headline */}
          <div className="space-y-4">
            <Typography
              variant="h1"
              className="text-4xl lg:text-5xl font-bold  text-light-primary_text dark:text-dark-header_text leading-tight"
            >
              Drive Your
              <span className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent block font-extrabold">
                Dream Car
              </span>
            </Typography>
            <Typography className="text-lg dark:text-dark-secondary_text leading-relaxed max-w-lg mx-auto lg:mx-0">
              Join thousands of satisfied customers experiencing premium car
              rental with transparent pricing, exceptional service, and seamless
              booking.
            </Typography>
          </div>

          {/* Features Grid */}
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
                    className="font-semibold  text-light-primary_text dark:text-dark-secondary_text mb-1"
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

        {/* ---------- RIGHT SECTION ---------- */}
        <div className="flex justify-center">
          <Card className="rounded-2xl shadow-lg w-full max-w-md border border-gray-100 bg-light-background dark:bg-dark-background">
            {/* Tabs */}
            <div className="px-8 pt-8">
              <Tabs value={activeTab} className="overflow-visible">
                <TabsHeader
                  className="bg-gray-100 p-1 rounded-lg"
                  indicatorProps={{
                    className: "bg-white shadow-sm rounded-md",
                  }}
                >
                  <Tab
                    value="signin"
                    onClick={() => navigate("/login")}
                    className="py-3"
                  >
                    <Typography className="font-semibold text-sm">
                      Sign In
                    </Typography>
                  </Tab>
                  <Tab
                    value="signup"
                    onClick={() => navigate("/register")}
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
                <Typography
                  variant="h3"
                  className="font-bold text-light-primary_text dark:text-dark-header_text mb-2"
                >
                  {activeTab === "signup" ? "Create Account" : "Welcome Back"}
                </Typography>
                <Typography className="text-gray-600">
                  {activeTab === "signup"
                    ? "Join RentiGO and start your journey"
                    : "Sign in to your account to continue"}
                </Typography>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                {activeTab === "signup" && (
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-6 ">
                    <InputField
                      label="First Name"
                      placeholder="John"
                      icon={<FaUser className="w-4 h-4" />}
                      value={formData.firstName}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                      error={errors.firstName}
                    />
                    <InputField
                      label="Last Name"
                      placeholder="Doe"
                      icon={<FaUser className="w-4 h-4" />}
                      value={formData.lastName}
                      onChange={(e) => handleChange("lastName", e.target.value)}
                      error={errors.lastName}
                    />
                  </div>
                )}

                <InputField
                  label="Email Address"
                  placeholder="john@example.com"
                  type="email"
                  icon={<FaEnvelope className="w-4 h-4" />}
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  error={errors.email}
                />

                {activeTab === "signup" && (
                  <InputField
                    label="Phone Number"
                    placeholder="+1 (555) 000-0000"
                    type="tel"
                    icon={<FaPhone className="w-4 h-4 rotate-90" />}
                    value={formData.telephone}
                    onChange={(e) => handleChange("telephone", e.target.value)}
                    error={errors.telephone}
                  />
                )}

                <InputField
                  label="Password"
                  placeholder="••••••••"
                  type="password"
                  icon={<FaLock className="w-4 h-4" />}
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                  error={errors.password}
                />

                {activeTab === "signup" && (
                  <InputField
                    label="Confirm Password"
                    placeholder="••••••••"
                    type="password"
                    icon={<FaLock className="w-4 h-4" />}
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      handleChange("confirmPassword", e.target.value)
                    }
                    error={errors.confirmPassword}
                  />
                )}

                {activeTab === "signup" && (
                  <div
                    className="flex items-center gap-1"
                    style={{
                      marginTop:
                        "calc(1rem * calc(1 - var(--tw-space-y-reverse)))",
                    }}
                  >
                    <Checkbox
                      checked={formData.agreeTerms}
                      onChange={(e) =>
                        handleChange("agreeTerms", e.target.checked)
                      }
                      className="mt-0"
                      color="blue"
                    />
                    <Typography
                      variant="small"
                      className="text-gray-700 leading-[0.3]"
                    >
                      I agree to the{" "}
                      <a
                        href="#"
                        className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-medium hover:from-[#0052cc] hover:to-[#004bb5] transition-all"
                      >
                        Terms
                      </a>{" "}
                      and{" "}
                      <a
                        href="#"
                        className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-medium hover:from-[#0052cc] hover:to-[#004bb5] transition-all"
                      >
                        Privacy Policy
                      </a>
                    </Typography>
                  </div>
                )}
                {errors.agreeTerms && (
                  <Typography
                    variant="small"
                    className="text-red-500 text-xs mt-1 ml-2"
                  >
                    {errors.agreeTerms}
                  </Typography>
                )}

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  className={`text-white font-medium shadow-md transition-all 
              bg-gradient-to-r from-[#0072ff] to-[#0072ff] 
              dark:from-[#00c6ff] dark:to-[#00c6ff]
              hover:from-[#0066e6] hover:to-[#0066e6] 
              dark:hover:from-[#00b8e6] dark:hover:to-[#00b8e6] hover:shadow-lg`}
                >
                  {activeTab === "signup" ? "Create Account" : "Sign In"}
                </Button>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <Typography
                      variant="small"
                      className="bg-light-background dark:bg-dark-background px-4 text-gray-500 font-medium"
                    >
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
                    {activeTab === "signup"
                      ? "Already have an account?"
                      : "Don't have an account?"}{" "}
                    <Link
                      to={activeTab === "signup" ? "/login" : "/register"}
                      className="bg-gradient-to-r from-[#0066ff] to-[#0052cc] bg-clip-text text-transparent font-semibold text-sm hover:from-[#0052cc] hover:to-[#004bb5] transition-all"
                    >
                      {activeTab === "signup" ? "Sign In" : "Sign Up"}
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

const InputField = ({ label, icon, error, ...props }) => (
  <div className="space-y-2">
    <Typography variant="small" className="font-semibold text-gray-700">
      {label}
    </Typography>
    <div className="relative">
      <Input
        {...props}
        error={!!error}
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
    {error && (
      <Typography variant="small" className="text-red-500 text-xs mt-1">
        {error}
      </Typography>
    )}
  </div>
);

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

export default Register;
