import React from "react";
import {
  Box,
  FormControl,
  FormGroup,
  Select,
  MenuItem,
  Typography,
  Input,
  InputLabel,
  styled,
  Button,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { Schema } from "mongoose";

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
function PostMaterial() {
  const weekValues = {
    week1: "",
    week2: "",
    week3: "",
    week4: "",
    week5: "",
    week6: "",
    week7: "",
    week8: "",
    week9: "",
    week19: "",
  };
  const [week, setWeek] = React.useState(weekValues);
  const { subject, semester, dept } = useParams();

  // React.useEffect(() => {
  //   const { data } = JSON.parse(localStorage.getItem("teacher"));
  //   setTeacherData({
  //     ...teacher,
  //     teacherId: data?.user._id,
  //     teacherName: data?.user.firstName,
  //   });
  // }, []);
  const handleFileChange = (e) => {
    console.log(e.target.files[0]);
    setWeek({ ...week, [e.target.name]: e.target.files[0] });
  };
  // console.log(week.week1);
  // const handleWeekChange = (e) => {
  //   setWeek(e.target.value);
  //   console.log(week);
  // };
  const handleSubmit = (e) => {
    console.log(week);
  };
  return (
    <>
      <Box
        style={{
          margin: "20px 40px",
        }}
      >
        <FormGroup>
          <>
            <FControl>
              <Typography>Week 1</Typography>
              <Input type='file' onChange={handleFileChange} name='week1' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 2</Typography>
              <Input type='file' onChange={handleFileChange} name='week2' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 3</Typography>
              <Input type='file' onChange={handleFileChange} name='week3' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 4</Typography>
              <Input type='file' onChange={handleFileChange} name='week4' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 5</Typography>
              <Input type='file' onChange={handleFileChange} name='week5' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 6</Typography>
              <Input type='file' onChange={handleFileChange} name='week6' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 7</Typography>
              <Input type='file' onChange={handleFileChange} name='week7' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 8</Typography>
              <Input type='file' onChange={handleFileChange} name='week8' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 9</Typography>
              <Input type='file' onChange={handleFileChange} name='week9' />
            </FControl>
          </>
          <>
            <FControl>
              <Typography>Week 10</Typography>
              <Input type='file' onChange={handleFileChange} name='week10' />
            </FControl>
          </>
        </FormGroup>
        <Btn variant='outlined' onClick={handleSubmit}>
          Submit
        </Btn>
      </Box>
    </>
  );
}

export default PostMaterial;
