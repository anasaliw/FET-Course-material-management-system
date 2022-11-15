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
import { NavLink } from "react-router-dom";
import { useState } from "react";
import LoginDialog from "../../Login/LoginDialog";

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
    background-color: #4795e2;
    border-radius: 5px;
    font-size: 22px;
    border-bottom: 3px solid #0955a0;
  }
`;
const Btn = styled(Button)`
  /* background-color: #0a66c2; */
  color: #fff;
  width: 100px;
  font-weight: 600;
`;

function NavBar() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
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
          <Btn
            variant='outline'
            onClick={() => {
              setOpen(true);
            }}
          >
            Login
          </Btn>
        </Box>
        <LoginDialog open={open} setOpen={setOpen} />
        {/* <LinkWrapper>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/projects'>Projects</NavLink>
          <NavLink to='/forum'>Forum</NavLink>
          <NavLink to='/material'>Material</NavLink>
          <NavLink to='/accreditation'>Accreditation</NavLink>
        </LinkWrapper> */}
      </Toolbar>
    </NavigationBar>
  );
}

export default NavBar;
