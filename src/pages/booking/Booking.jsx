import BookingStepper from "../../components/bookingCards/BookingStepper";
const Booking = () => {
  return (
    <div>
      <div className="flex justify-center items-top mt-4">
        <div className="p-1 w-4/5 text-center">
          <h1 className="text-2xl font-bold mb-1 text-4xl">
            Complete Your Booking
          </h1>
          <p className="mb-6 text-gray-600">
            Reserve your premium vehicle with our simple 2-step booking process
          </p>
        </div>
      </div>
      <BookingStepper />
    </div>
  );
};

export default Booking;
