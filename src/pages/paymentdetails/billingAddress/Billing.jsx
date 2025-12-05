const Billing = ({
  sameAddress,
  setSameAddress,
  billingFields,
  setBillingFields,
}) => {
  return (
    <div className="bg-white dark:bg-dark-background rounded-xl p-6 shadow-sm border">
      <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
        <i className="bi bi-building text-blue-600"></i>
        <span className="text-light-primary_text dark:text-dark-header_text">
          Billing Address
        </span>
      </h2>

      <div className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          id="same"
          checked={sameAddress}
          onChange={() => setSameAddress(!sameAddress)}
          className="w-4 h-4 accent-blue-600 bg-black dark:bg-black border border-gray-500 rounded"
        />
        <label
          htmlFor="same"
          className="text-gray-700 dark:text-dark-secondary_text"
        >
          Billing address same as personal information
        </label>
      </div>

      {!sameAddress && (
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text">
              First Name
            </label>
            <input
              type="text"
              placeholder="John"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.firstName}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, firstName: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text">
              Last Name
            </label>
            <input
              type="text"
              placeholder="Doe"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.lastName}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, lastName: e.target.value }))
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text">
              Street Address
            </label>
            <input
              type="text"
              placeholder="123 Main Street"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.address}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, address: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text">
              City
            </label>
            <input
              type="text"
              placeholder="New York"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.city}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, city: e.target.value }))
              }
            />
          </div>
          <div>
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text">
              State
            </label>
            <select
              className="w-full p-3 border rounded-md text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.state}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, state: e.target.value }))
              }
            >
              <option value="">Select state</option>
              <option value="NY">New York</option>
              <option value="CA">California</option>
              <option value="TX">Texas</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <label className="text-sm text-gray-600 dark:text-dark-secondary_text ">
              ZIP Code
            </label>
            <input
              type="text"
              placeholder="10001"
              className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-light-background dark:bg-dark-background dark:text-dark-secondary_text"
              value={billingFields.zip}
              onChange={(e) =>
                setBillingFields((prev) => ({ ...prev, zip: e.target.value }))
              }
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default Billing;
