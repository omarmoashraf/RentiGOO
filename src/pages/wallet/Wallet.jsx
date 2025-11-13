import React from "react";
import WalletMiniNavBar from "../../components/WalletMiniNavBar";
import WalletRecentActivity from "../../components/WalletRecentActivity";

const Wallet = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen dark:bg-dark-background bg-light-background pt-8">
      {/* Wallet Info Section */}
      <div className="p-4 w-1/2 text-center">
        <h1 className=" font-bold mb-2 text-4xl dark:text-dark-header_text">My Wallet</h1>
        <p className="dark:text-dark-secondary_text">
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
