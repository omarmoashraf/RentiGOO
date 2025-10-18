const Billing = ({ sameAddress, setSameAddress }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <i className="bi bi-building text-blue-600"></i>
        Billing Address
      </h2>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="same"
          checked={sameAddress}
          onChange={() => setSameAddress(!sameAddress)}
          className="w-4 h-4 accent-blue-600 "
        />
        <label htmlFor="same" className="text-gray-700">
          Billing address same as personal information
        </label>
      </div>

      {!sameAddress && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600">First Name</label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">Last Name</label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">Street Address</label>
            <input
              type="text"
              placeholder="123 Main Street"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">City</label>
            <input
              type="text"
              placeholder="New York"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm text-gray-600">State</label>
            <select className="w-full p-3 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Select state</option>
              <option>New York</option>
              <option>California</option>
              <option>Texas</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600">ZIP Code</label>
            <input
              type="text"
              placeholder="10001"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Billing;
