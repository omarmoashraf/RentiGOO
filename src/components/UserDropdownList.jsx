import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from "@material-tailwind/react";
import {
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useAuth } from "../context/AuthContext";
import useTheme from "../HOOKS/usetheme";

const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon },
  { label: "Sign Out", icon: PowerIcon },
];

export function AvatarWithUserDropdown() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const {theme}=useTheme();

  const closeMenu = () => setIsMenuOpen(false);

  const handleItemClick = (label) => {
    if (label === "Sign Out") {
      logout();
    } else if (label === "My Profile") {
      navigate("/UserProfile"); // Navigate to UserProfile page
    }
    closeMenu();
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button variant="text" color="blue-gray" className="flex items-center rounded-full p-0">
          <Avatar
            variant="circular"
            size="md"
            alt={user?.name || "User"}
            withBorder
            color="blue-gray"
            className="p-0.5"
            src={user?.avatar || "https://i.pravatar.cc/150?img=3"}
          />
        </Button>
      </MenuHandler>

      <MenuList className="p-1 bg-light-background dark:bg-dark-background">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={() => handleItemClick(label)}
              className={`flex items-center gap-2 rounded ${isLastItem ? "hover:bg-red-500/10" : ""}`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography as="span" variant="small" className="font-normal" color={isLastItem ? "red" : "inherit"}>
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export default AvatarWithUserDropdown;