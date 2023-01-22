import {
  Box,
  Button,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  styled,
  TextField,
  Typography,
  MenuItem,
  Select,
  Dialog,
  DialogActions,
  DialogContent,
  CircularProgress,
  Slide,
} from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { Schema } from "mongoose";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FControl = styled(FormControl)`
  width: 70%;
  margin-bottom: 20px;
`;
const Btn = styled(Button)`
  width: 22%;
  &:hover {
    background-color: #2f506c;
    color: white;
  }
  &:focus {
    background-color: green;
    color: white;
  }
`;
const Image = styled("img")({
  width: 300,
  height: 200,
  objectFit: "cover",
});
const SuccessTitle = styled(Typography)`
  color: green;
  font-weight: 600;
  font-size: 25px;
`;
const ErrorTitle = styled(Typography)`
  color: red;
  font-weight: 600;
  font-size: 25px;
`;
const BTN = styled(Button)`
  margin-top: 20px;
  background-color: #02b302;
  color: white;
  padding: 15px 30px;
  &:hover {
    background-color: #027402;
  }
`;
const ErrBTN = styled(Button)`
  margin-top: 20px;
  background-color: #e9240a;
  color: white;
  padding: 10px 20px;
  &:hover {
    background-color: #991700;
  }
`;

function PostCourse() {
  const navigate = useNavigate();
  const { subject, semester, dept } = useParams();

  const [data, setData] = React.useState({
    courseContent: "",
    courseDescription: "",
    week1: "",
    week2: "",
    week3: "",
    week4: "",
    week5: "",
    week6: "",
    week7: "",
    week8: "",
    week9: "",
    week10: "",
  });

  const [open, setOpen] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleNavigate = () => {
    navigate("/dashboard");
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
    return;
  };

  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction='up' ref={ref} {...props} />;
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    handleToggle();
    setProgress(true);
    console.log("function call");
    const formData = new FormData();
    formData.append("courseContent", data.courseContent);
    formData.append("courseDescription", data.courseDescription);
    formData.append("week1", data.week1);
    formData.append("week2", data.week2);
    formData.append("week3", data.week3);
    formData.append("week4", data.week4);
    formData.append("week5", data.week5);
    formData.append("week6", data.week6);
    formData.append("week7", data.week7);
    formData.append("week8", data.week8);
    formData.append("week9", data.week9);
    formData.append("week10", data.week10);

    const response = await axios.put(
      `http://localhost:8000/postCourse/${dept}/${semester}/${subject}`,
      formData
    );
    console.log("Api hit");

    console.log(response.status);
    if (response.status === 200) {
      console.log("Status 200");

      setProgress(false);
      setError(false);
      setSuccess(true);
      return;
    } else if (response.status === 203) {
      console.log("Status 203");

      setProgress(false);
      setError(true);
      return;
    } else {
      console.log("Undefined error");

      setProgress(false);
      setSuccess(false);
      setError(true);
      return;
    }
  };
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setData({ ...data, [e.target.name]: e.target.files[0] });
  };

  return (
    <>
      <Box
        style={{
          margin: "20px 40px",
        }}
      >
        <FormGroup>
          <Typography style={{ marginBottom: 10, marginLeft: 4 }}>
            Enter Course Content <sup style={{ color: "red" }}>*</sup>
          </Typography>
          <FControl>
            <TextField
              rows={4}
              multiline
              fullWidth
              label='Course Content'
              name='courseContent'
              onChange={(e) => handleChange(e)}
              value={data.courseContent}
            />
          </FControl>
          <FControl>
            <Typography style={{ marginBottom: 10, marginLeft: 4 }}>
              Enter Course Description <sup style={{ color: "red" }}>*</sup>
            </Typography>
            <TextField
              rows={4}
              multiline
              fullWidth
              label='Course Description'
              name='courseDescription'
              onChange={(e) => handleChange(e)}
              value={data.courseDescription}
            />
          </FControl>
          <>
            <FControl>
              <Typography>Week 1</Typography>
              <input
                type='file'
                accept='.pdf , .docx, .pptx, .ppt '
                onChange={handleFileChange}
                name='week1'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 2</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week2'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 3</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week3'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 4</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week4'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 5</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week5'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 6</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week6'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 7</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week7'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 8</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week8'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 9</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week9'
              />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 10</Typography>
              <input
                accept='.pdf , .docx, .pptx, .ppt '
                type='file'
                onChange={handleFileChange}
                name='week10'
              />
            </FControl>
          </>

          <Btn variant='outlined' onClick={handleSubmit}>
            Submit
          </Btn>
        </FormGroup>
      </Box>
      <Dialog
        open={open}
        PaperProps={{ sx: { width: 600, height: 450 } }}
        onClose={handleClose}
      >
        <DialogContent>
          {progress && (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 7,
                justifyContent: "center",
              }}
            >
              <Image src={require("./assets/prev.jpg")} alt='loading' />
              <CircularProgress />
              <BTN onClick={handleClose}> Close </BTN>
            </Box>
          )}
          {success && (
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Image src={require("./assets/success.jpg")} alt='success' />
              <SuccessTitle>
                Your Course has successfully Submitted
              </SuccessTitle>
              <BTN onClick={handleNavigate}> Go to Dashboard </BTN>
            </Box>
          )}
          {error && (
            <Box
              style={{
                marginTop: 10,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                justifyContent: "center",
              }}
            >
              <Image src={require("./assets/error.jpg")} alt='success' />
              <ErrorTitle>Something went wrong. Try again later.</ErrorTitle>
              <ErrBTN onClick={handleClose}> Close </ErrBTN>
            </Box>
          )}
        </DialogContent>

        <DialogActions>
          {/* <Button onClick={handleClose}>Close</Button> */}
        </DialogActions>
      </Dialog>
    </>
  );
}

export default PostCourse;
