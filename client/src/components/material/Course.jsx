import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCourseAPI } from "../Redux/actions/getCourseAction";
import {
  Box,
  Button,
  ButtonBase,
  Divider,
  styled,
  Typography,
} from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const Title = styled(Typography)`
  padding-bottom: 10px;
  font-weight: 600;
`;
const TextBox = styled(Box)`
  min-height: 200px;
  min-width: 350px;
  max-width: 800px;
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
`;
const WeekBox = styled(Box)`
  display: flex;
  margin: 20px 30px;
  margin-top: 60px;
`;
const Week = styled(Typography)`
  color: #f86401;
  font-weight: 600;
  font-size: 22px;
  margin-right: 50px;
`;
const Image = styled("img")({
  height: 400,
  width: "auto",
  objectFit: "cover",
});

const Btn = styled(Button)`
  color: white;
  background-color: #fd802c;
  &:hover {
    background-color: #ff6600;
  }
`;
const NotFoundBox = styled(Box)`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const NotFoundText = styled(Typography)`
  color: red;
  font-size: 22px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
`;

function Course() {
  const dispatch = useDispatch();
  const { getCourse, loading } = useSelector(
    (state) => state.getCourseResponse
  );
  console.log(getCourse);
  const { dept, semester, subject } = useParams();
  useEffect(() => {
    dispatch(getCourseAPI(dept, semester, subject));
  }, [dept, semester, subject, dispatch]);

  const response = getCourse?.data?.data;
  const dataMapping = [
    { week: "Week 1", file: `http://localhost:8000/${response?.week1}` },
    { week: "Week 2", file: `http://localhost:8000/${response?.week2}` },
    { week: "Week 3", file: `http://localhost:8000/${response?.week3}` },
    { week: "Week 4", file: `http://localhost:8000/${response?.week4}` },
    { week: "Week 5", file: `http://localhost:8000/${response?.week5}` },
    { week: "Week 6", file: `http://localhost:8000/${response?.week6}` },
    { week: "Week 7", file: `http://localhost:8000/${response?.week7}` },
    { week: "Week 8", file: `http://localhost:8000/${response?.week8}` },
    { week: "Week 9", file: `http://localhost:8000/${response?.week9}` },
    { week: "Week 10", file: `http://localhost:8000/${response?.week10}` },
  ];

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : getCourse?.status === 200 ? (
        <Box
          style={{
            padding: "40px 40px",
            height: "auto",
            backgroundColor: "#e4e4e477",
          }}
        >
          <Box>
            <Title>Course Content:</Title>
            <TextBox>
              <Typography style={{ padding: "5px 10px" }}>
                {response.courseContent}
              </Typography>
            </TextBox>
          </Box>
          <Box style={{ marginTop: 30 }}>
            <Title>Course Description:</Title>
            <TextBox>
              <Typography style={{ padding: "5px 10px" }}>
                {response.courseDescription}
              </Typography>
            </TextBox>
          </Box>

          <Box>
            {dataMapping.map((data) => (
              <>
                <WeekBox>
                  <Week>{data.week} :</Week>
                  <Btn
                    variant='contained'
                    href={data.file}
                    target='_blank'
                    startIcon={<FileDownloadIcon />}
                  >
                    Download
                  </Btn>
                </WeekBox>
                <Divider />
              </>
            ))}
          </Box>
        </Box>
      ) : getCourse?.status === 404 ? (
        <>
          <NotFoundBox>
            <Image src={require("./assets/notfound.jpg")} alt='notFound' />
          </NotFoundBox>
          <NotFoundText>
            Course Not Found. Please ask Teacher to upload course material{" "}
          </NotFoundText>
        </>
      ) : null}
    </>
  );
}

export default Course;
