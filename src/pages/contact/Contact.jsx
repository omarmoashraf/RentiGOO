import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



function BrowseButton() {
  const navigate = useNavigate();
};
import {
  Card,
  CardBody,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
import Cars from './../cars/Cars';

const Contact = () => {

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
  const navigate = useNavigate(); 
  return (
    <div>
      
      <div className="header text-center bg-gray-100 mb-10 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
          We're Here to Help
        </h1>
        <p className="text-gray-600 text-2xl p-100 ">
      <span>Have questions about our services? Need help with a booking? Our friendly team</span>
      <span className="block mt-4">is available 24/7 to assist you with all your car rental needs.</span>
      </p>
      </div>


      
      <div className="cards1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7">
  {[
    {
      icon: <FaPhoneSquareAlt className="text-5xl pb-2  text-[#06f] " />,
      title: "24/7 Phone Support",
      content: [
        "+1 (555) 123-4567",
        "+1 (555) 987-6543",
        "Available round the clock for emergencies and bookings",
      ],
    },
    {
      icon: <MdEmail className="text-5xl pb-2  text-[#06f]" />,
      title: "Email Support",
      content: [
        "hello@rentigo.com",
        "support@rentigo.com",
        "Get detailed responses within 2 hours",
      ],
    },
    {
      icon: <IoLocationSharp className="text-5xl pb-2  text-[#06f]" />,
      title: "Main Office",
      content: [
        "123 Main Street New York, NY 10001",
        "Visit us for personalized service and consultations",
      ],
    },
    {
      icon: <FaRegClock className="text-5xl pb-2  text-[#06f]" />,
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
              className={`
                ${i === card.content.length - 1 ? "text-black font-medium" : "text-[#06f]"}
              `}
            >
              {line}
            </p>
          ))}
        </Typography>
      </CardBody>
    </Card>
  ))}
</div>




     <section className="relative px-4 py-16 lg:py-24 bg-muted/30">
      <div className="relative container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          

          <div>
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Send us a Message
                </h2>
                <p className="text-foreground-secondary">
                  Fill out the form below and we'll get back to you within 2 hours during business hours.
                </p>
              </div>

              <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6 border-border/50">
                {isSubmitted ? (
                  <div className="text-center bg-green-100  py-20">
                    <h3 className="text-2xl font-semibold text-green-500 mb-4">
                      <FaCheckCircle className="text-3xl text-green-500 drop-shadow-lg" />
                        Message Sent!
                    </h3>
                    <p className="text-green-300">
                  Thank you for contacting us. We'll respond within 2 hours.
                    </p>
                  </div>
                ) : (
                  <form className="space-y-6" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium"
                        >
                          Full Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          placeholder="Your full name"
                          required
                          className="flex h-9 w-full rounded-md border px-3 py-1 text-sm transition-colors bg-input-background border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium"
                        >
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="(555) 123-4567"
                          className="flex h-9 w-full rounded-md border px-3 py-1 text-sm transition-colors bg-input-background border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                        className="flex h-9 w-full rounded-md border px-3 py-1 text-sm transition-colors bg-input-background border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium"
                      >
                        Subject *
                      </label>
                      <input
                        id="subject"
                        name="subject"
                        required
                        placeholder="How can we help you?"
                        className="flex h-9 w-full rounded-md border px-3 py-1 text-sm transition-colors bg-input-background border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows="6"
                        placeholder="Tell us more about your inquiry..."
                        className="flex min-h-16 w-full rounded-md border px-3 py-2 text-base transition-[color,box-shadow] bg-input-background border-border/50 placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 font-medium h-11 px-6 w-full rounded-lg bg-blue-400 text-white hover:shadow-lg hover:shadow-primary/30 transition-all duration-300"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4"
                      >
                        <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path>
                        <path d="m21.854 2.147-10.94 10.939"></path>
                      </svg>
                      Send Message 
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Locations</h2>
              <p className="text-foreground-secondary">
                Visit any of our convenient locations for personalized service and support.
              </p>
            </div>

            
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden border-border/50">
              <div className="h-64 bg-blue-300 flex items-center justify-center">
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
          <h2 className="text-3xl md:text-4xl font-bold">
            Still Have Questions?
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white/90">
            Our customer service team is standing by to help you with any
            questions or concerns. Don’t hesitate to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button data-slot="button" class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg:not([class*='size-'])]:size-4 shrink-0 [&amp;_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/30 aria-invalid:border-destructive select-none active:bg-secondary/70 shadow-sm h-11 px-6 text-base rounded-lg bg-white text-blue-400 hover:bg-white/90"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone mr-2 w-4 h-4" aria-hidden="true"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>Call Now: (555) 123-4567</button>
           <button
      data-slot="button"
      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background aria-invalid:ring-destructive/30 aria-invalid:border-destructive select-none border bg-background hover:text-accent-foreground active:bg-muted shadow-sm h-11 px-6 text-base rounded-lg border-white bg-white text-white hover:bg-blue-500 hover:text-black"
      onClick={() => navigate("/Cars")} 
    >
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
        className="lucide lucide-car mr-2 w-4 h-4"
        aria-hidden="true"
      >
        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
        <circle cx="7" cy="17" r="2"></circle>
        <path d="M9 17h6"></path>
        <circle cx="17" cy="17" r="2"></circle>
      </svg>
      Browse Our Fleet
    </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
