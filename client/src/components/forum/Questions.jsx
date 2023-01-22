import React from "react";
import {
  Box,
  styled,
  Typography,
  Button,
  IconButton,
  Avatar,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import DateAndTime from "./DateAndTime";
import { useNavigate } from "react-router-dom";
import ChatIcon from "@mui/icons-material/Chat";

const AvatarContainer = styled(Box)`
  display: flex;
  text-align: center;
  align-items: center;
  margin-top: 30px;
  text-align: center;
`;
const ContentContainer = styled(Box)`
  border-left: 1px solid gray;
  padding-left: 10px;
`;
const AnswerBox = styled(Box)`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  padding: 20px;
  background-color: #e4e4e477;
  border-radius: 10px;
`;
const AnswerBtn = styled(Button)`
  color: #464545;
  font-weight: 600;
  border-radius: 10px;
`;
const AnswerBtn2 = styled(Button)`
  color: white;
  padding: 10px 20px;
  background-color: #242121;
  border-radius: 10px;

  &:hover {
    background-color: black;
  }
`;

const addEllipse = (text) => {
  if (text.length > 50) {
    return text.substring(0, 100) + "...";
  } else {
    return text;
  }
};
const detail =
  "Hello this is the title of Question by anas ali how are you are you doing fine its good to have you";
function Questions({ data }) {
  const navigate = useNavigate();
  //   const timing = moment(data.createdAt).format("dddd, MMM DD at HH:mm a");
  //   const timing = new Date();
  const avatarName = "Anas";
  const handleRedirect = (id) => {
    navigate(`/forum/viewQuestion/${id}`);
  };
  return (
    <>
      {data.map((data) => (
        <Card style={{ marginBottom: 20 }}>
          <CardContent>
            <ContentContainer>
              <Typography style={{ color: "#808080", fontSize: 14 }}>
                <DateAndTime date={data.createdAt} />
              </Typography>
              <Typography
                style={{
                  fontWeight: 600,
                  fontSize: 18,
                  margin: "5px 0px",
                  fontFamily: "'Ubuntu', sans-serif",
                }}
              >
                {data.title}
              </Typography>
              <Typography
                style={{
                  margin: "5px 0px",
                  fontFamily: "'Ubuntu', sans-serif",
                }}
              >
                {data.question}
              </Typography>
              <AnswerBox>
                <AnswerBtn
                  onClick={() => handleRedirect(data._id)}
                  startIcon={<ChatIcon />}
                >
                  {" "}
                  {data.commenter.length} Answer
                </AnswerBtn>
                <AnswerBtn2 onClick={() => handleRedirect(data._id)}>
                  Answer
                </AnswerBtn2>
              </AnswerBox>
              <AvatarContainer>
                <Avatar
                  sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}
                >
                  {data.name?.charAt(0)}
                </Avatar>
                <Typography
                  style={{ color: "#808080", fontSize: 15, marginLeft: 10 }}
                >
                  By~~ {data.name} &nbsp;&nbsp; {data.rollNo} &nbsp;&nbsp;{" "}
                  {data.email}
                </Typography>
              </AvatarContainer>
            </ContentContainer>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      ))}
    </>
  );
}

export default Questions;
