import axios from "axios";
import * as actionType from "../Constants/actionType";
const URL = "http://localhost:8000";

export const getCourseAPI = (dept, semester, subject) => async (dispatch) => {
  try {
    const data = await axios.get(
      `${URL}/getAll/${dept}/${semester}/${subject}`
    );
    dispatch({ type: actionType.GET_COURSE_SUCCESSFUL, payload: data });
    return data;
  } catch (error) {
    dispatch({ type: actionType.GET_COURSE_FAILURE, payload: error.response });
    console.log(error.response);
    return error.response;
  }
};
