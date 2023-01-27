import React from "react";
import {
  styled,
  AppBar,
  Toolbar,
  Box,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  background-color: "#FFF";
  min-height: 149px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Image = styled("img")(({ theme }) => ({
  marginLeft: 30,
  height: 101,
  width: 100,
  [theme.breakpoints.down(480)]: {
    height: 76,
    width: 75,
  },
}));

const TitleWrapper = styled(Box)`
  margin-left: 30px;
`;
const Title = styled(Typography)(({ theme }) => ({
  fontSize: 35,
  color: "#2f506c",
  fontWeight: 600,
  fontFamily: "League Spartan, sans-serif",
  [theme.breakpoints.down("800")]: {
    fontWeight: 600,
    fontSize: 25,
  },
  [theme.breakpoints.down("480")]: {
    fontWeight: 600,
    fontSize: 18,
  },
}));

function TitleSection() {
  return (
    <Container>
      <Image src={require("./assets/fet-logo.png")} alt='logo' srcset='' />

      <TitleWrapper>
        <Title>FET based Course Material Management System </Title>
        <Title>University of Sindh, Jamshoro</Title>
      </TitleWrapper>
    </Container>
  );
}

export default TitleSection;
