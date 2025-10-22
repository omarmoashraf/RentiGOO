import BookingStepper from "../../components/bookingCards/BookingStepper";
const Booking = () => {
  return (
    <div className="flex justify-center items-top min-h-screen mt-4">
      <div className="p-6 w-4/5 text-center">
        <h1 className="text-2xl font-bold mb-2 text-4xl">
          Complete Your Booking
        </h1>
        <p className="mb-6 text-gray-600">
          Reserve your premium vehicle with our simple 3-step booking process
        </p>
        <BookingStepper />
      </div>
    </div>
  );
};

export default Booking;
