import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import {
  Box,
  Typography,
  styled,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress,
  DialogContent,
  Dialog,
} from "@mui/material";
import Guidelines from "./Guidelines";
import { useState } from "react";
import { Container, TitleContainer, TagsStyles, SpanTag } from "./styles";
import { PostQuestionValidation } from "../../Yup/PostQuestionValidation";
import { useFormik } from "formik";
import { postQuestion } from "../../Redux/actions/DiscussionForumActions/DiscussionActions";
import { useDispatch, useSelector } from "react-redux";
import { Schema } from "mongoose";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

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

function AskQuestion() {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [openAlert, setOpenAlert] = React.useState(false);
  const [handleLoading, setHandleLoading] = React.useState(false);
  const handleAlert = () => {
    setOpenAlert(false);
    return;
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [QuestionValues, setUpValues] = useState({
    title: "",
    question: "",
    name: "",
    email: "",
    id: Schema.ObjectId,
    tagsArray: [],
  });

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    const userDetails = localStorageData?.data.user;

    setUpValues({
      ...QuestionValues,
      name: userDetails?.name,
      email: localStorageData?.data.email,
      id: userDetails?._id,
      // email:localStorageData
      // tagsArray: [{ ...tags, tags }],
    });
  }, []);
  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key !== "Enter") return;
    console.log(e.key);
    const value = e.target.value;
    console.log(value);
    if (!value.trim()) return;
    setTags([...tags, value]);
    // setUpValues([ ...QuestionValues, [...tagsArray] : value ]);
    // console.log(QuestionValues);
    // setUpValues([...values.tags, value]);
    e.target.value = "";
  };
  const removeTag = (index) => {
    setTags(tags.filter((el, i) => i !== index));
  };
  const dispatch = useDispatch();
  const { postQuestionResponse, loading } = useSelector(
    (state) => state.postQuestionResponse
  );

  const handleChange = (e) => {
    setUpValues({ ...QuestionValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (!localStorage.getItem("user")) {
      console.log("please login first");
      handleClickOpen();
      return;
    }
    setHandleLoading(true);
    const result = await dispatch(postQuestion(QuestionValues));

    console.log(loading);
    const statusCode = result.status;
    console.log(statusCode);
    if (statusCode === 201) {
      setHandleLoading(false);
      console.log(loading);
      setOpenAlert(true);
      console.log(result);
      console.log("Successfully Posted Question");

      setTimeout(() => {
        navigate("/forum");
      }, 2000);
      // setError(false);
    } else if (statusCode === 401) {
      setHandleLoading(false);

      console.log(result);
      console.log("Error in posting code");

      return;
    }
  };
  const { handleBlur, touched, errors } = useFormik({
    initialValues: QuestionValues,
    validationSchema: PostQuestionValidation,
    validateOnChange: true,
    onSubmit: async (values, action) => {
      console.log("worked");
      const { title, question, name } = values;
      console.log(title);
      console.log(question);
      console.log(name);

      console.log(QuestionValues);

      const result = await dispatch(postQuestion(QuestionValues));

      console.log(loading);
      const statusCode = result.status;
      console.log(statusCode);
      if (statusCode === 201) {
        console.log(loading);
        console.log(result);
        console.log("Successfully Posted Question");

        // setError(false);
      } else if (statusCode === 401) {
        console.log(result);
        console.log("Error in posting code");
        return;
      }
    },
  });

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
      <Container>
        <Guidelines />
        {/* // !Title */}
        <TitleContainer>
          <Typography sx={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>
            Title
          </Typography>
          <Typography sx={{ fontSize: 14, marginBottom: 2 }}>
            Be specific and imagine you`re asking a question to another person.
          </Typography>
          <TextField
            fullWidth
            placeholder='Enter Title'
            name='title'
            onChange={(e) => handleChange(e)}
            value={QuestionValues.title}
          />
          {touched.title && errors.title ? (
            <Typography style={{ fontSize: 10, color: "red" }}>
              {errors.title}
            </Typography>
          ) : null}
        </TitleContainer>

        {/* // ! Describe your Question */}
        <TitleContainer>
          <Typography sx={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>
            What are the details of your problem?
          </Typography>
          <Typography sx={{ fontSize: 14, marginBottom: 2 }}>
            Introduce the problem and expand on what you put in the title.
            Minimum 20 characters.
          </Typography>
          <TextField
            rows={6}
            multiline
            fullWidth
            placeholder='Enter Title'
            name='question'
            onChange={(e) => handleChange(e)}
            value={QuestionValues.question}
          />
          {touched.question && errors.question ? (
            <Typography style={{ fontSize: 10, color: "red" }}>
              {errors.question}
            </Typography>
          ) : null}
        </TitleContainer>

        {/* <TitleContainer>
          <Typography sx={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>
            Tags
          </Typography>
          <Typography sx={{ fontSize: 14, marginBottom: 2 }}>
            Add up to 5 tags to describe what your question is about.
          </Typography>
          {tags.map((tags, index) => (
            <TagsStyles>
              <span>{tags} </span>
              <SpanTag onClick={() => removeTag(index)}>&times;</SpanTag>
            </TagsStyles>
          ))}

          <TextField
            fullWidth
            placeholder='Enter Tags'
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </TitleContainer> */}
        <Button onClick={handleSubmit}>
          Submit
          {handleLoading && (
            <Box sx={{ display: "flex", marginLeft: 30 }}>
              <CircularProgress />
            </Box>
          )}
        </Button>
        <Snackbar
          open={openAlert}
          autoHideDuration={4000}
          onClose={handleAlert}
        >
          <Alert
            onClose={handleAlert}
            severity='success'
            sx={{ width: "100%" }}
          >
            Your Question has successfully posted!
          </Alert>
        </Snackbar>
      </Container>
    </>
  );
}

export default AskQuestion;
