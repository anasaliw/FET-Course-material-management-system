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
  Button,
  DialogContent,
  Dialog,
} from "@mui/material";
import Slide from "@mui/material/Slide";
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
  /* background-color: aliceblue; */
  background-color: #e4e4e477;

  padding: 10px;
`;

function ViewQuestion() {
  const [open, setOpen] = React.useState(false);
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
  console.log("data", data);
  const [name, setName] = useState("");
  useEffect(() => {
    dispatch(getSingleQuestionAPI(id));

    const localStorageData = JSON.parse(localStorage.getItem("user"));
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
      console.log("running");
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
    if (!localStorage.getItem("user")) {
      console.log("please login first");
      handleClickOpen();
      return;
    }
    const postAnsRes = await postAnswer();
    console.log(postAnsRes);
    setCommentValues({ ...commentValues, answer: "" });
    // navigate(`/forum`);
    window.location.reload();
  };
  const length = data?.commenter.length;
  // const name = "Anas Ali";
  // console.log(commentValues.answer.length);
  // if (commentValues.answer.length >= 20) {
  //   setDisableButton(false);
  // }

  const AvatarContainer = styled(Box)`
    display: flex;
    width: 60px;
    text-align: center;
    margin-top: 5px;
    text-align: center;
  `;
  const BTN = styled(Button)`
    margin-top: 20px;
    background-color: #2344d3;
    color: white;
    padding: 15px 30px;
    &:hover {
      background-color: #3257ff;
    }
  `;
  const SuccessTitle = styled(Typography)`
    color: #2344d3;
    font-weight: 600;
    font-size: 25px;
  `;
  const Image = styled("img")({
    width: 300,
    height: 200,
    objectFit: "cover",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{ sx: { width: 600, height: 450 } }}
      >
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 7,
              justifyContent: "center",
            }}
          >
            <Image src={require("./login.jpg")} alt='loading' />
            <SuccessTitle>Please Login First</SuccessTitle>
            <BTN onClick={handleClose}> Close </BTN>
          </Box>
        </DialogContent>
      </Dialog>
      {loading ? (
        <>Loading</>
      ) : (
        <>
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
              <Typography
                sx={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}
              >
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
        </>
      )}
    </>
  );
}

export default ViewQuestion;
