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
const Image = styled("img")({
  marginLeft: 30,
  height: 101,
  width: 100,
});

const TitleWrapper = styled(Box)`
  margin-left: 30px;
  & > p {
    font-size: 35px;
    color: #2f506c;
    font-weight: 600;
    font-family: "League Spartan", sans-serif;
  }
`;

function TitleSection() {
  return (
    <Container>
      <Image src={require("./assets/fet-logo.png")} alt='logo' srcset='' />

      <TitleWrapper>
        <Typography>FET based Course Material Management System </Typography>
        <Typography>University of Sindh, Jamshoro</Typography>
      </TitleWrapper>
    </Container>
  );
}

export default TitleSection;
