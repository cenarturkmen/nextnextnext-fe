import * as React from "react";
import { useSelector } from "react-redux";

import "./Navbar.css";
import { NavLink } from "react-router-dom";
import DefinexLogoSVG from "../../svg/DefinexLogoSVG";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const Navbar = () => {
  const account = useSelector((state) => state.allNft.account);

  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <NavLink to="/">
            <DefinexLogoSVG className="logo" />
          </NavLink>
        </div>
        <div className="navbar-right">
          <AccountBalanceWalletOutlinedIcon fontSize="large" />
          <Typography variant="subtitle1">{account.slice(0,7)}...{account.slice(-4)}</Typography>
        </div>
      </div>
      <Divider />
    </>
  );
};

export default Navbar;
