import React from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Typography,
  Button,
  Dialog,
  useMediaQuery,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginDialog from "../../Login/LoginDialog";
import { useContext } from "react";
import { DataProvider } from "../../Context/ContextAPI";
import AccountMenu from "./Account-menu";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import TeacherLoginDialog from "../../Login/TeacherLoginDialog";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import NextWeekIcon from "@mui/icons-material/NextWeek";
import ForumIcon from "@mui/icons-material/Forum";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ArrowBack } from "@mui/icons-material";
import LoginIcon from "@mui/icons-material/Login";
import LockCloseIcon from "@mui/icons-material/LockOpen";
import LockIcon from "@mui/icons-material/Lock";
const NavigationBar = styled(AppBar)`
  background-color: "#0a66c2";
  display: flex;
`;
const Container = styled(Box)`
  & > a {
    text-decoration: none;
    color: white;
    font-size: 21px;
    font-family: "League Spartan", sans-serif;
    padding: 8px 15px;
    margin: 0px 5px;
  }
  & > a :hover {
    font-weight: 600;
  }
  & > a.active {
    background-color: #00013f;
    border-radius: 5px;
    font-size: 22px;
    /* border-bottom: 3px solid #0955a0;s */
  }
`;
const Btn = styled(Button)`
  /* background-color: #0a66c2; */
  color: #fff;
  width: 100px;
  font-weight: 600;
  background-color: #00013f;
`;
const LoginBTN = styled(Button)`
  color: #fff;
  background-color: #00013f;
  margin-right: 10px;
  & :hover {
    background-color: #000118;
  }
`;
const LinkComponent = styled(ListItem)`
  & > a.active {
    background-color: #2f506c;
    color: white;
    & > div {
      color: white;
    }
  }

  & > a:hover {
    color: "#2f506c";
    font-weight: 600;
  }
`;

const drawerNavigation = [
  { route: "/", icon: <HomeIcon />, text: "Home" },
  { route: "/projects", icon: <NextWeekIcon />, text: "Projects" },
  { route: "/forum", icon: <ForumIcon />, text: "Forum" },
  { route: "/material", icon: <MenuBookIcon />, text: "Course Material" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [teacherOpen, teacherSetOpen] = useState(false);
  const navigate = useNavigate();

  const { setTeacherAccount, account, setAccount } = useContext(DataProvider);
  var localStorageData = null;
  // console.log(localStorageData);

  useEffect(() => {
    if (localStorage.getItem("user")) {
      var localStorageData = JSON.parse(localStorage.getItem("user"));
      // console.log(localStorageData);
      setAccount(false);
    } else if (localStorage.getItem("teacher")) {
      setTeacherAccount(false);
      console.log("hello");
      navigate("/dashboard");
    }
  }, []);
  const handleClose = () => {
    setOpen(false);
  };
  const handleTeacherClose = () => {
    teacherSetOpen(false);
  };

  const { LoginResponse, loading } = useSelector(
    (state) => state.loginResponse
  );
  const responsive = useMediaQuery("(max-width:880px)");
  console.log(responsive);
  const handleDrawerOpen = () => {
    // console.log("calling");
    setOpenDrawer(true);
  };
  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };
  const logOut = async () => {
    console.log("Logout invoked form services");
    const user = localStorage.removeItem("user");
    setAccount(true);
  };
  var localStorageData = JSON.parse(localStorage.getItem("user"));
  const userData = localStorageData?.data?.user;

  return (
    <>
      <Drawer open={openDrawer} onClose={handleDrawerToggle}>
        <ArrowBack
          onClick={handleDrawerToggle}
          style={{
            display: "flex",
            marginLeft: 170,
            cursor: "pointer",
            marginTop: 15,
            color: "#2f506c",
          }}
        />
        {/* <hr style={{}}></hr> */}

        {account ? null : (
          <>
            <Divider
              style={{
                marginBottom: 20,
                marginTop: 10,
              }}
            />
            <Typography style={{ paddingLeft: 15 }}>
              Welcome! {userData.name}
            </Typography>
          </>
        )}
        <List>
          <hr style={{ marginBottom: 20 }}></hr>
          {drawerNavigation.map((list, index) => (
            <LinkComponent key={index} disablePadding sx={{ display: "block" }}>
              <ListItemButton to={list.route} component={NavLink}>
                <ListItemIcon>{list.icon}</ListItemIcon>
                <ListItemText primary={list.text} />
              </ListItemButton>
            </LinkComponent>
          ))}
        </List>
        <List style={{ marginTop: "auto" }}>
          <>
            {account ? (
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <ListItemIcon>
                    <LoginIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Login"} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem disablePadding sx={{ display: "block" }}>
                <ListItemButton onClick={logOut}>
                  <ListItemIcon>
                    <LockIcon />
                  </ListItemIcon>
                  <ListItemText primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding sx={{ display: "block" }}>
              <ListItemButton
                onClick={() => {
                  teacherSetOpen(true);
                }}
              >
                <ListItemIcon>
                  <LockCloseIcon />
                </ListItemIcon>
                <ListItemText primary={"Login as Teacher"} />
              </ListItemButton>
            </ListItem>
          </>
        </List>
      </Drawer>
      {responsive ? (
        <NavigationBar position='sticky'>
          <Toolbar>
            <IconButton onClick={handleDrawerOpen}>
              <MenuIcon style={{ color: "white" }} />
            </IconButton>
          </Toolbar>
        </NavigationBar>
      ) : (
        <NavigationBar position='sticky'>
          <Toolbar>
            <Container>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/projects'> FYP Projects</NavLink>
              <NavLink to='/forum'> Forum </NavLink>
              <NavLink to='/material'>Course Material</NavLink>
            </Container>
            <Box style={{ marginLeft: "auto" }}>
              <LoginBTN
                variant='contained'
                onClick={() => {
                  teacherSetOpen(true);
                }}
              >
                Login as Teacher
              </LoginBTN>

              {account ? (
                <Btn
                  variant='outline'
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Login
                </Btn>
              ) : (
                <AccountMenu setAccount={setAccount} />
              )}
            </Box>
          </Toolbar>
        </NavigationBar>
      )}
      <LoginDialog open={open} setOpen={handleClose} />
      <TeacherLoginDialog open={teacherOpen} setOpen={handleTeacherClose} />
    </>
  );
}

export default NavBar;
