import axios from "axios";
import * as actionTypes from "../../Constants/actionType";
const URL = "http://localhost:8000";

export const postQuestion = (values) => async (dispatch) => {
  try {
    const data = await axios.post(`${URL}/addQuestion`, values);
    dispatch({ type: actionTypes.POST_QUESTION_SUCCESSFUL, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: actionTypes.POST_QUESTION_FAILED,
      payload: error.response,
    });
    return error.response;
  }
};

export const getQuestionsAPI = () => async (dispatch) => {
  try {
    const data = await axios.get(`${URL}/getQuestions`);
    dispatch({ type: actionTypes.GET_QUESTIONS_SUCCESSFUL, payload: data });
    return data;
  } catch (error) {
    dispatch({
      type: actionTypes.GET_QUESTIONS_FAILED,
      payload: error.response,
    });
    return error.response;
  }
};

// !Getting Single Question
export const getSingleQuestionAPI = (id) => async (dispatch) => {
  try {
    const data = await axios.get(`${URL}/viewQuestion/${id}`);
    dispatch({
      type: actionTypes.GET_SINGLE_QUESTION_SUCCESSFUL,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SINGLE_QUESTION_FAILURE,
      payload: error.response,
    });
    return error.response;
  }
};
