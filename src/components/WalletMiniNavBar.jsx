import React from "react";
import WalletRecentActivity from "./WalletRecentActivity";
import TotalRewardsCard from "./walletCards/TotalRewardsCard";
import PendingBalanceCard from "./walletCards/PendingBalanceCard";
import AvailableBalanceCard from "./walletCards/AvailableBalanceCard";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { TransactionCard } from "./walletCards/TransactionCard";

function WalletMiniNavBar() {
  const [activeTab, setActiveTab] = React.useState("overview");
  const data = [
    {
      label: "Overview",
      value: "overview",
      desc: (
        <div>
          {/* Responsive card grid for all screen sizes */}
          <div className="flex flex-col lg:flex-row justify-between items-start mx-auto mb-4 gap-4 lg:gap-6">
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <AvailableBalanceCard />
            </div>
            <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
              <PendingBalanceCard />
            </div>
            <div className="w-full lg:w-1/3">
              <TotalRewardsCard />
            </div>
          </div>
          <WalletRecentActivity />
        </div>
      ),
    },
    {
      label: "Transactions",
      value: "transactions",
      desc: (
        <div>
          <div className="flex justify-between items-start mx-auto mb-4 gap-6">
            <TransactionCard />
          </div>
        </div>
      ),
    },
    // Removed "Payment Methods" and "Loyalty Program" tabs
  ];
  
  return (
    <div className="w-full overflow-hidden">
      <Tabs value={activeTab}>
        {/* Responsive tabs header for mobile */}
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 overflow-x-auto"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          <div className="flex min-w-max">
            {data.map(({ label, value }) => (
              <Tab
                key={value}
                value={value}
                onClick={() => setActiveTab(value)}
                className={`whitespace-nowrap px-4 py-2 text-sm sm:text-base md:px-6 md:py-3 ${
                  activeTab === value 
                    ? "text-gray-900 dark:text-dark-Buttons" 
                    : "dark:text-dark-secondary_text"
                }`}
              >
                {label}
              </Tab>
            ))}
          </div>
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel 
              key={value} 
              value={value}
              className="px-2 sm:px-4 md:px-6 py-4 sm:py-6"
            >
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default WalletMiniNavBar;