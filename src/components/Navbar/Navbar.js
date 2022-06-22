import * as React from "react";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import DefinexLogoSVG from "../../svg/DefinexLogoSVG";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Divider from "@mui/material/Divider";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">
            <DefinexLogoSVG className="logo" />
          </NavLink>
        </div>
        <div className="navbar-right">
          <AccountBoxOutlinedIcon fontSize="large" />
          <AccountBalanceWalletOutlinedIcon fontSize="large" />
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Navbar;
