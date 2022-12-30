import React from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Box,
  Typography,
  Button,
  Dialog,
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

function NavBar() {
  const [open, setOpen] = useState(false);
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

  return (
    <NavigationBar position='sticky'>
      <Toolbar>
        <Container>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'> FYP Projects</NavLink>
          <NavLink to='/forum'> Forum </NavLink>
          <NavLink to='/material'>Course Material</NavLink>
          <NavLink to='/accreditation'> Accreditation.. </NavLink>
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
        <LoginDialog open={open} setOpen={handleClose} />
        <TeacherLoginDialog open={teacherOpen} setOpen={handleTeacherClose} />
      </Toolbar>
    </NavigationBar>
  );
}

export default NavBar;
