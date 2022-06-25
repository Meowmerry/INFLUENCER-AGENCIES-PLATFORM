/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useState, FunctionComponent, useEffect } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { UserData } from '../sponcership/interface/user-interface'
interface ButtonProfileProps {
  isLogin: boolean;
  handleLogout: () => void;
  isLoading?: boolean;
  userData: UserData | undefined
}

export const ButtonProfile: FunctionComponent<ButtonProfileProps> = (props) => {
  const { handleLogout, isLoading, isLogin, userData } = props;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="user-text">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {isLogin && userData ? `${userData.firstName}  ${userData.lastName}` : "USER"}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Setting</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      <a
        className="dropdown-toggle flex items-center hidden-arrow  transition duration-150 ease-in-out whitespace-nowrap"
        href="#"
        id="dropdownMenuButton2"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img
          // src="https://mdbootstrap.com/img/new/avatars/2.jpg"
          src="/assets/images/profile.png"
          className="rounded-full"
          style={{ height: "50px", width: "50px" }}
          alt=""
          loading="lazy"
        />
      </a>
    </div>
  );
};
