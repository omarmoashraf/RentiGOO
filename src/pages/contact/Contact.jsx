import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { FaPhoneSquareAlt, FaRegClock, FaCheckCircle, FaCar } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Contact = () => {
  const navigate = useNavigate();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    if (
      form.name.value &&
      form.email.value &&
      form.subject.value &&
      form.message.value
    ) {
      setIsSubmitted(true);
      form.reset();

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } else {
      alert("Please fill in all required fields!");
    }
  };

  return (
    <div>
      <div className="header text-center bg-gray-100 mb-10 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
          We're Here to Help
        </h1>
        <p className="text-gray-600 text-2xl">
          <span>Have questions about our services? Need help with a booking?</span>
          <span className="block mt-4">
            Our friendly team is available 24/7 to assist you with all your car rental needs.
          </span>
        </p>
      </div>

      
      <div className="cards1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7">
        {[
          {
            icon: <FaPhoneSquareAlt className="text-5xl pb-2 text-blue-500" />,
            title: "24/7 Phone Support",
            content: [
              "+1 (555) 123-4567",
              "+1 (555) 987-6543",
              "Available round the clock for emergencies and bookings",
            ],
          },
          {
            icon: <MdEmail className="text-5xl pb-2 text-blue-500" />,
            title: "Email Support",
            content: [
              "hello@rentigo.com",
              "support@rentigo.com",
              "Get detailed responses within 2 hours",
            ],
          },
          {
            icon: <IoLocationSharp className="text-5xl pb-2 text-blue-500" />,
            title: "Main Office",
            content: [
              "123 Main Street, New York, NY 10001",
              "Visit us for personalized service and consultations",
            ],
          },
          {
            icon: <FaRegClock className="text-5xl pb-2 text-blue-500" />,
            title: "Business Hours",
            content: [
              "Fri–Sun: 8:00 AM – 10:00 PM",
              "Sun–Thurs: 6:00 AM – 10:00 PM",
              "Extended hours for your convenience",
            ],
          },
        ].map((card, index) => (
          <Card
            key={index}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          >
            <CardBody className="text-center">
              <div className="mb-2 flex flex-col items-center">
                {card.icon}
                <Typography color="blue-gray" className="text-xl font-bold">
                  {card.title}
                </Typography>
              </div>
              <Typography variant="small" color="gray" className="font-normal opacity-75">
                {card.content.map((line, i) => (
                  <p
                    key={i}
                    className={`${
                      i === card.content.length - 1
                        ? "text-black font-medium"
                        : "text-blue-500"
                    }`}
                  >
                    {line}
                  </p>
                ))}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </div>

      {/* Contact Form Section */}
      <section className="relative px-4 py-16 lg:py-24 bg-muted/30">
        <div className="relative container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Send us a Message</h2>
                <p className="text-gray-600">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>

                <div className="rounded-lg border bg-white text-card-foreground shadow-sm p-6">
                  {isSubmitted ? (
                    <div className="text-center bg-green-100 py-20">
                      <h3 className="text-2xl font-semibold text-green-500 mb-4 flex justify-center items-center gap-2">
                        <FaCheckCircle size={40} className="text-3xl text-green-500" />
                        Message Sent!
                      </h3>
                      <p className="text-green-600">
                        Thank you for contacting us. We'll respond within 2 hours.
                      </p>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Full Name *
                          </label>
                          <input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            required
                            className="flex h-9 w-full rounded-md border px-3 py-1 text-sm border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                          />
                        </div>

                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone Number *
                          </label>
                          <input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            className="flex h-9 w-full rounded-md border px-3 py-1 text-sm border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="your.email@example.com"
                          className="flex h-9 w-full rounded-md border px-3 py-1 text-sm border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject *
                        </label>
                        <input
                          id="subject"
                          name="subject"
                          required
                          placeholder="How can we help you?"
                          className="flex h-9 w-full rounded-md border px-3 py-1 text-sm border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows="6"
                          placeholder="Tell us more about your inquiry..."
                          className="flex w-full rounded-md border px-3 py-2 text-base border-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-blue-400 resize-none"
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="inline-flex items-center justify-center gap-2 font-medium h-11 px-6 w-full rounded-lg bg-blue-500 text-white hover:shadow-lg hover:shadow-blue-300 transition-all duration-300"
                      >
                        Send Message
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
              <p className="text-foreground-secondary">
                Visit any of our convenient locations for personalized service and support.
              </p>
            </div>

            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden border-border/50">
              <div className="h-52 bg-blue-300 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary mx-auto">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <p className="text-foreground-secondary">Interactive Map</p>
                  <p className="text-sm text-foreground-secondary">Find our locations near you</p>
                </div>
              </div>
            </div>

           
            {[
              {
                city: "New York",
                img: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400&q=80",
                address: "123 Main Street, NY 10001",
                phone: "+1 (555) 123-4567",
                hours: "6:00 AM - 10:00 PM",
              },
              {
                city: "Los Angeles",
                img: "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=400&q=80",
                address: "456 Sunset Blvd, CA 90028",
                phone: "+1 (555) 234-5678",
                hours: "7:00 AM - 9:00 PM",
              },
              {
                city: "Chicago",
                img: "https://images.unsplash.com/photo-1477414348463-c0eb7f1359b6?w=400&q=80",
                address: "789 Michigan Ave, IL 60611",
                phone: "+1 (555) 345-6789",
                hours: "6:30 AM - 9:30 PM",
              },
            ].map((loc, index) => (
              <div
                key={index}
                className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 hover:shadow-lg transition-all duration-300 border-border/50"
              >
                <div className="flex items-center gap-4">
                  <img
                    alt={loc.city}
                    src={loc.img}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{loc.city}</h3>
                    <p className="text-foreground-secondary text-sm">{loc.address}</p>
                    <div className="flex gap-4 mt-2 text-sm">
                      <div className="flex items-center gap-1 text-primary">
                        <span>{loc.phone}</span>
                      </div>
                      <div className="flex items-center gap-1 text-primary">
                        <span>{loc.hours}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 lg:py-24">
      <div className="container mx-auto max-w-4xl">
        
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground-secondary">
            Quick answers to common questions about our car rental services.
          </p>
        </div>

        <div className="space-y-6">
          
          <div
            data-slot="card"
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 border-border/50"
          >
            <div data-slot="card-content" className="p-6 pt-0 space-y-3">
              <h3 className="font-semibold  text-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-5 h-5 text-blue-400"
                  aria-hidden="true"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"  ></path>
                </svg>
                How do I make a reservation?
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                You can book online through our website, call our 24/7 hotline,
                or visit any of our locations. Online booking offers the best
                rates and instant confirmation.
              </p>
            </div>
          </div>

          
          <div
            data-slot="card"
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 border-border/50"
          >
            <div data-slot="card-content" className="p-6 pt-0 space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-5 h-5 text-blue-400"
                  aria-hidden="true"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                </svg>
                What documents do I need to rent a car?
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                You need a valid driver's license, a major credit card, and must
                be at least 21 years old. International customers need a valid
                passport and international driving permit.
              </p>
            </div>
          </div>

          
          <div
            data-slot="card"
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 border-border/50"
          >
            <div data-slot="card-content" className="p-6 pt-0 space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-5 h-5 text-blue-400"
                  aria-hidden="true"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                </svg>
                Can I modify or cancel my reservation?
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                Yes! You can modify or cancel your reservation online or by
                calling us. Cancellation policies vary by plan — check your
                booking confirmation for specific terms.
              </p>
            </div>
          </div>

         
          <div
            data-slot="card"
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-all duration-300 border-border/50"
          >
            <div data-slot="card-content" className="p-6 pt-0 space-y-3">
              <h3 className="font-semibold text-lg flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-message-circle w-5 h-5 text-blue-400"
                  aria-hidden="true"
                >
                  <path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path>
                </svg>
                What happens if I return the car late?
              </h3>
              <p className="text-foreground-secondary leading-relaxed">
                We offer a 30-minute grace period. After that, you'll be charged
                for an additional day. Contact us if you need to extend your
                rental period.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      <section className="px-4 py-16 lg:py-24 bg-blue-500 text-white text-center">
        <div className="container mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Still Have Questions?</h2>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            Our customer service team is standing by to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-white text-blue-500 hover:bg-gray-100 transition-all">
              <FaPhoneSquareAlt className="w-5 h-5" />
              Call Now: (555) 123-4567
            </button>

            <button
              onClick={() => navigate("/cars")}
              className="inline-flex items-center justify-center gap-2 h-11 px-6 rounded-lg bg-white text-blue-500 hover:bg-gray-100 transition-all"
            >
              <FaCar className="w-5 h-5" />
              Browse Our Fleet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;