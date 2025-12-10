import { IoPencil } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Transaction", "Amount", "Date", "Status", "Account", ""];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export function TransactionCard() {
  return (
    <Card className="h-full w-full dark:bg-dark-background overflow-hidden">
      {/* Header Section - Fixed for all screen sizes */}
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none dark:bg-dark-background p-4 sm:p-6"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Title Section */}
          <div className="w-full lg:w-auto lg:flex-1">
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-dark-header_text text-xl sm:text-2xl"
            >
              Recent Transactions
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal dark:text-dark-secondary_text text-sm sm:text-base"
            >
              These are details about the last transactions
            </Typography>
          </div>

          {/* Search and Download Section */}
          <div className="w-full lg:w-auto flex flex-col xs:flex-row gap-3">
            {/* Search Input - Responsive width */}
            <div className="w-full xs:w-auto xs:flex-1 lg:w-64 xl:w-80">
              <Input
                label="Search"
                icon={
                  <FaMagnifyingGlass className="h-4 w-4 sm:h-5 sm:w-5 dark:text-dark-header_text" />
                }
                className="text-black dark:text-dark-header_text placeholder:dark:text-dark-header_text text-sm sm:text-base"
                labelProps={{
                  className: "dark:text-dark-header_text text-black text-sm sm:text-base",
                }}
                containerProps={{
                  className: "dark:text-dark-header_text min-w-0",
                }}
              />
            </div>
            
            {/* Download Button - Fixed width to prevent cutting */}
            <Button
              className="flex items-center justify-center gap-2 dark:bg-dark-Buttons bg-light-Buttons text-sm sm:text-base py-3 px-4 sm:px-6 whitespace-nowrap w-full xs:w-auto min-w-[130px]"
              size="md"
            >
              <HiMiniArrowDownTray strokeWidth={2} className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden sm:inline">Download</span>
              <span className="sm:hidden">Download</span>
            </Button>
          </div>
        </div>
      </CardHeader>

      {/* Table/Card Body Section */}
      <CardBody className="p-3 sm:p-4 md:p-6 overflow-auto">
        {/* Mobile View (sm and below) - Card Layout */}
        <div className="block md:hidden">
          {TABLE_ROWS.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-4 border border-gray-200 dark:border-gray-700 rounded-lg dark:bg-dark-background"
            >
              <div className="flex justify-between items-start mb-3">
                <div className="flex items-center gap-3">
                  <Avatar
                    src={item.img}
                    alt={item.name}
                    size="md"
                    className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 h-12 w-12"
                  />
                  <div>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-bold dark:text-dark-header_text text-sm sm:text-base"
                    >
                      {item.name}
                    </Typography>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal dark:text-dark-header_text text-xs sm:text-sm"
                    >
                      {item.date}
                    </Typography>
                  </div>
                </div>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-bold dark:text-dark-header_text text-base sm:text-lg"
                >
                  {item.amount}
                </Typography>
              </div>
              
              <div className="flex justify-between items-center mb-3">
                <div className="w-max">
                  <Chip
                    size="sm"
                    variant="ghost"
                    value={item.status}
                    color={
                      item.status === "paid"
                        ? "light-green"
                        : item.status === "pending"
                        ? "amber"
                        : "red"
                    }
                    className="text-xs sm:text-sm"
                  />
                </div>
                <Tooltip content="Edit User">
                  <IconButton variant="text" size="sm">
                    <IoPencil className="h-4 w-4 dark:text-dark-header_text" />
                  </IconButton>
                </Tooltip>
              </div>
              
              <div className="flex items-center gap-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                  <Avatar
                    src={
                      item.account === "visa"
                        ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                        : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                    }
                    size="sm"
                    alt={item.account}
                    variant="square"
                    className="h-full w-full object-contain p-1"
                  />
                </div>
                <div className="flex flex-col">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal capitalize dark:text-dark-header_text text-sm"
                  >
                    {item.account.split("-").join(" ")} {item.accountNumber}
                  </Typography>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal opacity-70 dark:text-dark-header_text text-xs"
                  >
                    {item.expiry}
                  </Typography>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Tablet and Desktop View (md and above) - Table Layout */}
        <div className="hidden md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[768px] table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 dark:bg-dark-background"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70 dark:text-dark-header_text"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(
                  (
                    {
                      img,
                      name,
                      amount,
                      date,
                      status,
                      account,
                      accountNumber,
                      expiry,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name} className="hover:bg-blue-gray-50/50 dark:hover:bg-dark-hover">
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={img}
                              alt={name}
                              size="sm"
                              className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                            />
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold dark:text-dark-header_text"
                            >
                              {name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal dark:text-dark-header_text"
                          >
                            {amount}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal dark:text-dark-header_text"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              size="sm"
                              variant="ghost"
                              value={status}
                              color={
                                status === "paid"
                                  ? "light-green"
                                  : status === "pending"
                                  ? "amber"
                                  : "red"
                              }
                            />
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <div className="h-9 w-12 rounded-md border border-blue-gray-50 p-1">
                              <Avatar
                                src={
                                  account === "visa"
                                    ? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
                                    : "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
                                }
                                size="sm"
                                alt={account}
                                variant="square"
                                className="h-full w-full object-contain p-1"
                              />
                            </div>
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal capitalize dark:text-dark-header_text"
                              >
                                {account.split("-").join(" ")} {accountNumber}
                              </Typography>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal opacity-70 dark:text-dark-header_text"
                              >
                                {expiry}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Edit User">
                            <IconButton variant="text" size="sm">
                              <IoPencil className="h-4 w-4 dark:text-dark-header_text" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </div>
        </div>
      </CardBody>

      {/* Footer/Pagination Section */}
      <CardFooter className="flex flex-col sm:flex-row items-center justify-between border-t border-blue-gray-50 p-4 sm:p-6 gap-4">
        <Button 
          variant="outlined" 
          size="sm" 
          className="dark:bg-dark-Buttons w-full sm:w-auto text-sm py-2.5 px-4 sm:px-6"
        >
          Previous
        </Button>
        <div className="flex items-center gap-2 dark:text-dark-header_text overflow-x-auto py-2">
          {[1, 2, 3, "...", 8, 9, 10].map((page, index) => (
            <IconButton 
              key={index}
              variant={page === 1 ? "outlined" : "text"} 
              size="sm"
              className={`dark:text-dark-header_text h-8 w-8 sm:h-9 sm:w-9 text-xs sm:text-sm ${
                page === 1 ? "border" : ""
              }`}
            >
              {page}
            </IconButton>
          ))}
        </div>
        <Button 
          variant="outlined" 
          size="sm" 
          className="dark:bg-dark-Buttons w-full sm:w-auto text-sm py-2.5 px-4 sm:px-6"
        >
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}