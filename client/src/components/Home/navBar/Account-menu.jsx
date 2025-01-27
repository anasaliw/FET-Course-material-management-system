import * as React from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import { useSelector, useDispatch } from "react-redux";

import { useNavigate, Link } from "react-router-dom";

export default function AccountMenu({ setAccount }) {
  // fetching the user details from the redux
  // const result = useSelector((state) => state);
  // const user = result.auth.user.user;

  const { LoginResponse, loading } = useSelector(
    (state) => state.loginResponse
  );

  var localStorageData = JSON.parse(localStorage.getItem("user"));
  // console.log(localStorageData?.data?.user);
  const userData = localStorageData?.data?.user;

  // console.log("hello from accoount");

  // console.log(user.name.charAt(0));

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOut = async () => {
    console.log("Logout invoked form services");
    const user = localStorage.removeItem("user");
    setAccount(true);
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <p style={{ color: "white", fontWeight: 600, marginRight: "10px" }}>
          {userData?.name}
        </p>
        <Tooltip title='Account settings'>
          <IconButton
            onClick={handleClick}
            size='small'
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup='true'
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>
              {userData?.name?.charAt(0)}
            </Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id='account-menu'
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link
          to='/profile '
          style={{ textDecoration: "none", color: "#4d148c" }}
        >
          <MenuItem>
            <Avatar />
            Profile
          </MenuItem>
        </Link>
        <Link
          to='/profile '
          style={{ textDecoration: "none", color: "#4d148c" }}
        >
          <MenuItem>
            <Avatar />
            {userData?.name}
          </MenuItem>
        </Link>
        <Link
          to='/profile'
          style={{ textDecoration: "none", color: "#4d148c" }}
        >
          <MenuItem>
            <Avatar /> Dashboard
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={logOut}>
          <ListItemIcon>
            <Logout fontSize='small' />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
