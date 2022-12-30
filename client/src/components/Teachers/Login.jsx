import React from "react";
import { Box, styled, Typography } from "@mui/material";
const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const Title = styled(Typography)`
  font-weight: 600;
  color: #4d148c;
  font-size: 24px;
`;
function Login() {
  return (
    <>
      <Container>
        <Title>Login as Teacher</Title>
      </Container>
    </>
  );
}

export default Login;
