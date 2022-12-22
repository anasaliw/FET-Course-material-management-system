import {
  Box,
  styled,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getQuestionsAPI } from "../Redux/actions/DiscussionForumActions/DiscussionActions";
import Questions from "./Questions";
import { Container, Btn, Header } from "./styles";

function Forum() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getQuestionsAPI());
  }, []);

  const { getAllQuestionsResponse, loading } = useSelector(
    (state) => state.getAllQuestions
  );
  const data = getAllQuestionsResponse?.data?.data;
  console.log(data);
  console.log(loading);

  return (
    <>
      {loading ? (
        <>Loading</>
      ) : (
        <Container>
          <Header>
            <Typography style={{ fontWeight: 600, fontSize: 20 }}>
              Top Questions
            </Typography>
            <Btn component={Link} to='/forum/addQuestion'>
              Ask Question
            </Btn>
          </Header>
          <Questions data={data} />
        </Container>
      )}
    </>
  );
}

export default Forum;
