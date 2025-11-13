import React from "react";
import WalletMiniNavBar from "../../components/WalletMiniNavBar";
import WalletRecentActivity from "../../components/WalletRecentActivity";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50 pt-8">
      {/* Wallet Info Section */}
      <div className="p-4 w-1/2 text-center">
        <h1 className=" font-bold mb-2 text-4xl">My Wallet</h1>
        <p>
          Manage your balance, view transactions, and track your loyalty rewards
        </p>
      </div>

      {/* Mini Navbar Section */}
      <div className="mt-6 w-[80%]">
        <WalletMiniNavBar />
      </div>
    </div>
  );
};

export default Wallet;
