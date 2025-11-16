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
    <Card className="h-full w-full dark:bg-dark-background">
      <CardHeader
        floated={false}
        shadow={false}
        className="rounded-none dark:bg-dark-background"
      >
        <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center dark:bg-dark-background">
          <div>
            <Typography
              variant="h5"
              color="blue-gray"
              className="dark:text-dark-header_text"
            >
              Recent Transactions
            </Typography>
            <Typography
              color="gray"
              className="mt-1 font-normal dark:text-dark-secondary_text"
            >
              These are details about the last transactions
            </Typography>
          </div>
          <div className="flex w-full shrink-0 gap-2 md:w-max">
            <div className="w-full md:w-72 dark:text-dark-header_text">
              <Input
                label="Search"
                icon={
                  <FaMagnifyingGlass className="h-5 w-5 dark:text-dark-header_text" />
                }
                className="text-black dark:text-dark-header_text placeholder:dark:text-dark-header_text"
                labelProps={{
                  className: "dark:text-dark-header_text text-black",
                }}
                containerProps={{
                  className: "dark:text-dark-header_text",
                }}
              />
            </div>
            <Button
              className="flex items-center gap-3 dark:bg-dark-Buttons bg-light-Buttons"
              size="sm"
            >
              <HiMiniArrowDownTray strokeWidth={2} className="h-4 w-4" />{" "}
              Download
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4  dark:bg-dark-background"
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
                  <tr key={name}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar
                          src={img}
                          alt={name}
                          size="md"
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
                        <IconButton variant="text">
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
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Button variant="outlined" size="sm" className="dark:bg-dark-Buttons">
          Previous
        </Button>
        <div className="flex items-center gap-2 dark:text-dark-header_text">
          <IconButton variant="outlined" size="sm" className="dark:text-dark-header_text ">
            1
          </IconButton>
          <IconButton variant="text" size="sm" className="dark:text-dark-header_text">
            2
          </IconButton>
          <IconButton variant="text" size="sm" className="dark:text-dark-header_text" >
            3
          </IconButton>
          <IconButton variant="text" size="sm"  className="dark:text-dark-header_text">
            ...
          </IconButton>
          <IconButton variant="text" size="sm"  className="dark:text-dark-header_text">
            8
          </IconButton>
          <IconButton variant="text" size="sm"  className="dark:text-dark-header_text">
            9
          </IconButton>
          <IconButton variant="text" size="sm"  className="dark:text-dark-header_text">
            10
          </IconButton>
        </div>
        <Button variant="outlined" size="sm" className="dark:bg-dark-Buttons">
          Next
        </Button>
      </CardFooter>
    </Card>
  );
}
