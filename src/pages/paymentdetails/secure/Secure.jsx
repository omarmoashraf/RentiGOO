const Secure = () => {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex gap-3 items-start">
      <i className="bi bi-shield-lock text-blue-600 text-2xl"></i>
      <div>
        <h3 className="font-semibold text-blue-800">Secure Payment</h3>
        <p className="text-sm text-gray-700 mt-1">
          Your payment information is encrypted and secure. We use
          industry-standard SSL encryption to protect your personal and
          financial data. We never store your complete card information on our
          servers.
        </p>
      </div>
    </div>
  );
};

export default Secure;
