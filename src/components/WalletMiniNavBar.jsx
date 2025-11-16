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
          <div className="flex justify-between items-start mx-auto mb-4 gap-6">
            <AvailableBalanceCard />
            <PendingBalanceCard />
            <TotalRewardsCard />
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
    {
      label: "Payment Methods",
      value: "payment-methods",
      desc: `We're not always in the position that we want to be at.
      We're constantly growing. We're constantly making mistakes. We're
      constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Loyalty Program",
      value: "loyalty-program",
      desc: `Because it's about motivating the doers. Because I'm here
      to follow my dreams and inspire other people to follow their dreams, too.`,
    },
  ];
  return (
    <div>
      <Tabs value={activeTab}>
        <TabsHeader
          className="rounded-none border-b border-blue-gray-50 bg-transparent p-0"
          indicatorProps={{
            className:
              "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
          }}
        >
          {data.map(({ label, value }) => (
            <Tab
              key={value}
              value={value}
              onClick={() => setActiveTab(value)}
              className={activeTab === value ? "text-gray-900 dark:text-dark-Buttons" : "dark:text-dark-secondary_text"}
            >
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {data.map(({ value, desc }) => (
            <TabPanel key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    </div>
  );
}

export default WalletMiniNavBar;
