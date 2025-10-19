import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa";
const Contact = () => {
  return (
    <div>
      <div className="header text-center bg-gray-100 mb-10 p-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-4">
          We're Here to Help
        </h1>
        <p className="text-gray-600 text-xl">
          Have questions about our services? Need help with a booking? Our
          friendly team is available 24/7 to assist you with all your car rental
          needs.
        </p>
      </div>
      <div className="cards1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-7">
        <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <CardBody className="text-center">
            <div className="mb-2 flex flex-col items-center ">
              <FaPhoneSquareAlt className="text-3xl  text-[#06f]" />
              <Typography color="blue-gray" className="text-xl font-bold">
                24/7 Phone Support
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              <section className="text-[#06f]">+1 (555) 123-4567 </section>{" "}
              <section className="text-[#06f]">+1 (555) 987-6543</section>
              Available round the clock for emergencies and bookings
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <CardBody className="text-center">
            <div className="mb-2 flex flex-col items-center">
              <MdEmail className="text-3xl  text-[#06f]" />
              <Typography color="blue-gray" className="text-xl font-bold">
                Email Support
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              <section className="text-[#06f]">hello@rentigo.com </section>
              <section className="text-[#06f]">
                support@rentigo.com Get detailed responses
              </section>
              within 2 hours
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <CardBody>
            <div className="mb-2 flex flex-col items-center">
              <IoLocationSharp className="text-3xl  text-[#06f]" />
              <Typography color="blue-gray" className="text-xl font-bold">
                Main Office
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              <section className="text-[#06f]">
                123 Main Street New York, NY 10001
              </section>
              Visit us for personalized service and consultations
            </Typography>
          </CardBody>
        </Card>
        <Card className="w-50  w-full h-full object-cover transition-transform duration-500 hover:scale-105">
          <CardBody className="text-center">
            <div className="mb-2 flex flex-col items-center">
              <FaRegClock className="text-[#06f] text-3xl" />
              <Typography color="blue-gray" className="text-xl font-bold">
                Business Hours
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              <p className="text-[#06f]">Fri–Sun: 8:00 AM – 10:00 PM</p>
              <p className="text-[#06f]">Sun–Thurs: 6:00 AM – 10:00 PM</p>
              Extended hours for your convenience
            </Typography>
          </CardBody>
        </Card>
      </div>
      <div className="content grid grid-cols-1 md:grid-cols-2 ">
        <div className="left text-center flex flex-col items-center gap-5">
          <section className="content mb-10">
            <h1 className="text-3xl font-bold">Send us a Message</h1>
            <p>
              Fill out the form below and we'll get back to you within 2 hours
              during business hours.
            </p>
          </section>
          <div className="form border border-gray-500 rounded-xl ">
            {" "}
            <Card color="transparent" shadow={false} className="w-96">
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <div className="flex flex-col">
                    {" "}
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-3"
                    >
                      Your Name
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="John"
                      className=" !border-t-blue-gray-200 focus:!border-[#06f]"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="mb-3"
                    >
                      Your Email
                    </Typography>
                    <Input
                      size="lg"
                      placeholder="name@mail.com"
                      className=" !border-t-blue-gray-200 focus:!border-[#06f]"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                    />
                  </div>

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-[#06f]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-[#06f]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Password
                  </Typography>
                  <Input
                    type="password"
                    size="lg"
                    placeholder="********"
                    className=" !border-t-blue-gray-200 focus:!border-[#06f]"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                  />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal"
                    >
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900"
                      >
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                />
                <Button className="mt-6" fullWidth>
                  sign up
                </Button>
                <Typography
                  color="gray"
                  className="mt-4 text-center font-normal"
                >
                  Already have an account?{" "}
                  <a href="#" className="font-medium text-gray-900">
                    Sign In
                  </a>
                </Typography>
              </form>
            </Card>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Contact;
