import React from "react";
import {
  Box,
  styled,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import DateAndTime from "./DateAndTime";
import { Link } from "react-router-dom";

const QuestionWrapper = styled(Box)`
  display: flex;

  align-items: center;
`;
const Answer = styled(Typography)`
  border: 1px solid black;
  padding: 2px 10px;
  margin-right: 20px;
  font-size: 14px;
  border-radius: 5px;
`;
const Title = styled(Typography)`
  color: #0074cc;
  font-size: 20px;
`;

function Questions({ data }) {
  //   const timing = moment(data.createdAt).format("dddd, MMM DD at HH:mm a");
  //   const timing = new Date();

  return (
    <>
      {data.map((data) => (
        <Box key={data._id}>
          <QuestionWrapper>
            <Answer>{data.commenter.length} Answer </Answer>
            <Title
              component={Link}
              to={`/forum/viewQuestion/${data._id}`}
              style={{ cursor: "pointer" }}
            >
              {data.title}
            </Title>
          </QuestionWrapper>
          <Box
            style={{
              display: "flex",
              marginLeft: "auto",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <IconButton
              // style={{ marginLeft: "auto" }}
              // onClick={handleClick}
              size='small'

              // aria-controls={open ? "account-menu" : undefined}
              // aria-haspopup='true'
              // aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>
                {data.name.charAt(0)}
              </Avatar>
            </IconButton>

            <Typography
            //  style={{ marginLeft: "auto" }}
            >
              {data.name} &nbsp;&nbsp; {data.rollNo}
            </Typography>
          </Box>
          <Typography variant='span' style={{ fontSize: 12, color: "gray" }}>
            Data And Time: &nbsp; &nbsp;
          </Typography>
          <Typography variant='span' style={{ fontWeight: 600 }}>
            <DateAndTime date={data.createdAt} />
          </Typography>

          <hr></hr>
        </Box>
      ))}
    </>
  );
}

export default Questions;
