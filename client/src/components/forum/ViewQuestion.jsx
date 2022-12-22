import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSingleQuestionAPI } from "../Redux/actions/DiscussionForumActions/DiscussionActions";
import { Btn, Header } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  TextField,
  styled,
  Box,
  IconButton,
  Avatar,
} from "@mui/material";
import { Schema } from "mongoose";
import axios from "axios";
import DateAndTime from "./DateAndTime";
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
  background-color: #fdf2e7;

  padding: 10px;
`;

function ViewQuestion() {
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

  useEffect(() => {
    dispatch(getSingleQuestionAPI(id));

    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const userDetails = localStorageData?.data.user;
    setCommentValues({
      ...commentValues,
      commenterName: userDetails?.name,
      commenterRollNo: userDetails?.rollNo,
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
    // navigate(`/forum`);
    window.location.reload();
  };
  const length = data?.commenter.length;
  // const name = "Anas Ali";
  // console.log(commentValues.answer.length);
  // if (commentValues.answer.length >= 20) {
  //   setDisableButton(false);
  // }
  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <Container>
          <Header>
            <Typography
              style={{ fontSize: 22, color: "#0074cc", paddingLeft: 20 }}
            >
              {data.title}
            </Typography>

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
          {/* <Box style={{ margin: 20 }}>
            <Typography style={{ color: "#0074cc" }}>
              I could not quite understand the problem, But I would like to
              suggest that you could use the normal plt.plot
            </Typography>

            <IconButton
              // style={{ marginLeft: "auto" }}
              // onClick={handleClick}
              size='small'
              style={{ marginTop: 30 }}

              // aria-controls={open ? "account-menu" : undefined}
              // aria-haspopup='true'
              // aria-expanded={open ? "true" : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>{name.charAt(0)}</Avatar>
              &nbsp; &nbsp;
              <Typography style={{ color: "black", fontWeight: 600 }}>
                {name}
              </Typography>
            </IconButton>
            <Typography
              style={{ fontSize: 14, color: "gray", paddingLeft: 10 }}
            >
              at 4:50
            </Typography>
          </Box>
          <hr></hr> */}

          {length > 0 ? (
            data.commenter.map((data) => (
              <Box style={{ margin: 20 }} key={data._id}>
                <Box style={{ display: "flex" }}>
                  <span style={{ fontSize: 14, color: "gray" }}>Answer:</span>
                  &nbsp; &nbsp;&nbsp; &nbsp;
                  <Typography style={{ color: "#0074cc" }}>
                    {data.answer}
                  </Typography>
                </Box>
                <IconButton
                  // style={{ marginLeft: "auto" }}
                  // onClick={handleClick}
                  size='small'
                  style={{ marginTop: 30 }}

                  // aria-controls={open ? "account-menu" : undefined}
                  // aria-haspopup='true'
                  // aria-expanded={open ? "true" : undefined}
                >
                  <Avatar sx={{ width: 32, height: 32 }}>
                    {data.commenterName?.charAt(0)}
                  </Avatar>
                  &nbsp; &nbsp;
                  <Typography style={{ color: "black", fontWeight: 600 }}>
                    {data.commenterName}
                  </Typography>
                </IconButton>
                <Typography
                  style={{ fontSize: 14, color: "gray", paddingLeft: 10 }}
                >
                  <DateAndTime date={data.createdAt} />
                </Typography>
                <hr></hr>
              </Box>
            ))
          ) : (
            // <Typography>Yes</Typography>
            <Typography>No Answers yet</Typography>
          )}
        </Container>
      )}
    </>
  );
}

export default ViewQuestion;
