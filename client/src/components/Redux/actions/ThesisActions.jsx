import axios from "axios";
import * as actionTypes from "../Constants/actionType";

const URL = "http://localhost:8000";

export const getProjects = (endpoint) => async (dispatch) => {
  try {
    const data = await axios.get(`${URL}/${endpoint}`);
    dispatch({ type: actionTypes.GET_PROJECT_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PROJECT_FAILURE,
      payload: error.response,
    });
  }
};
export const getSingleProject = (endpoint, id) => async (dispatch) => {
  try {
    const data = await axios.get(`${URL}/${endpoint}/${id}`);
    dispatch({
      type: actionTypes.GET_SINGLE_PROJECT_SUCCESSFUL,
      payload: data,
    });
    return data;
  } catch (error) {
    dispatch({
      type: actionTypes.GET_SINGLE_PROJECT_FAILURE,
      payload: error.response,
    });
  }
};
