import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleQuestionAPI } from "../Redux/actions/DiscussionForumActions/DiscussionActions";
import { Btn, Header } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import { deepOrange } from "@mui/material/colors";
import {
  Typography,
  TextField,
  styled,
  Box,
  IconButton,
  Avatar,
  CardContent,
  Card,
} from "@mui/material";
import { Schema } from "mongoose";
import axios from "axios";
import DateAndTime from "./DateAndTime";
import { useState } from "react";
// import { TitleContainer } from "./AskQuestion/styles";
const TitleContainer = styled(Box)`
  border: 1px solid gray;
  margin-top: 40px;
  margin: auto;
  border-radius: 5px;
  width: 90%;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 20px !important;
`;
const Container = styled(Box)`
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e4e4e477;

  padding: 10px;
`;
const AvatarContainer = styled(Box)`
  display: flex;
  width: 60px;
  text-align: center;
  margin-top: 5px;
  text-align: center;
`;

function TeacherViewQuestion() {
  const [disableButton, setDisableButton] = React.useState(true);
  const navigate = useNavigate();
  const [commentValues, setCommentValues] = React.useState({
    commenterId: Schema.ObjectId,
    answer: String,
    commenterName: String,
    commenterRollNo: String,
  });
  const dispatch = useDispatch();
  const { id } = useParams();
  const { getSingleQuestionResponse, loading } = useSelector(
    (state) => state.getSingleQuestion
  );

  const data = getSingleQuestionResponse?.data?.data;
  const [name, setName] = useState("");
  useEffect(() => {
    dispatch(getSingleQuestionAPI(id));

    const localStorageData = JSON.parse(localStorage.getItem("teacher"));
    const userDetails = localStorageData?.data.user;
    console.log("email:", localStorageData?.data.email);

    console.log("name:", userDetails?.name);
    setCommentValues({
      ...commentValues,
      commenterName: userDetails?.name,
      commenterEmail: localStorageData?.data.email,
      commenterId: userDetails?._id,
      // tagsArray: [{ ...tags, tags }],
    });
    console.log(commentValues);
  }, [id]);
  const handleChange = (e) => {
    setCommentValues({ ...commentValues, [e.target.name]: e.target.value });
    console.log(commentValues);
  };

  const postAnswer = async () => {
    try {
      const result = await axios.post(
        `http://localhost:8000/postAnswer/${id}`,
        commentValues
      );
      return result;
    } catch (error) {
      console.log(error);
      return error.response;
    }
  };

  const handleSubmit = async () => {
    const postAnsRes = await postAnswer();
    console.log(postAnsRes);
    setCommentValues({ ...commentValues, answer: "" });
    navigate(`/forum`);
  };
  const length = data?.commenter.length;

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <Container>
          <Header>
            <Box
              style={{
                display: "flex",
                paddingLeft: 20,
                flexDirection: "column",
              }}
            >
              <Typography style={{ fontSize: 22, color: "#0074cc" }}>
                {data.title}
              </Typography>
              <Typography style={{ fontSize: 18, marginTop: 20 }}>
                {data.question}
              </Typography>
            </Box>

            <Btn component={Link} to='/forum/addQuestion'>
              Ask Question
            </Btn>
          </Header>
          <hr></hr>
          <TitleContainer>
            <Typography sx={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>
              Please Answer this Question. if have any?
            </Typography>
            {/* <Typography sx={{ fontSize: 14, marginBottom: 2 }}>
          Introduce the problem and expand on what you put in the title. Minimum
          20 characters.
        </Typography> */}
            <TextField
              rows={6}
              multiline
              fullWidth
              placeholder='Enter Your Answer Title'
              name='answer'
              onChange={(e) => handleChange(e)}
              value={commentValues.answer}
            />
            <Typography style={{ fontSize: 12 }}>
              Please Enter At least 20 characters of answer
            </Typography>
          </TitleContainer>
          <Btn onClick={handleSubmit}>Post Answer</Btn>
          <hr></hr>
          {length > 0 ? (
            data.commenter.map((data) => (
              <Card style={{ marginTop: 10 }}>
                <CardContent style={{ display: "flex" }}>
                  <AvatarContainer>
                    <Avatar
                      sx={{ width: 32, height: 32, bgcolor: deepOrange[500] }}
                    >
                      {data.commenterName?.charAt(0)}
                    </Avatar>
                  </AvatarContainer>
                  <Box>
                    <Typography style={{ fontWeight: 600, color: "blue" }}>
                      {data.commenterName}
                    </Typography>
                    <Typography style={{ color: "#808080", fontSize: 12 }}>
                      <DateAndTime date={data.createdAt} />
                    </Typography>
                    <Typography
                      style={{
                        color: "#303030",
                        fontSize: 16,
                        paddingTop: 20,
                      }}
                    >
                      {data.answer}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            ))
          ) : (
            <Typography>No Answers yet</Typography>
          )}
        </Container>
      )}
    </>
  );
}

export default TeacherViewQuestion;
