import { Box, styled, Button } from "@mui/material";

export const Container = styled(Box)`
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* background-color: aliceblue; */
  /* background-color: white; */
  padding: 10px;
`;
export const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
  background-color: white;
  border-radius: 10px;
  padding: 30px 40px;
`;
export const Btn = styled(Button)`
  background-color: #0a95ff;
  text-transform: none;
  color: white;
  :hover {
    color: white;
    background-color: #0a95ff;
  }
`;
