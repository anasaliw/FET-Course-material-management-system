import axios from "axios";
import * as actionType from "../Constants/actionType";

const URL = "http://localhost:8000";
export const loginAPI = (loginInValues) => async (dispatch) => {
  try {
    const data = await axios.get(`${URL}/loginUser`, loginInValues);
    dispatch({ type: actionType.LOGIN_SUCCESSFUL, payload: data });
  } catch (error) {
    dispatch({ type: actionType.LOGIN_FAILURE, payload: error.response });
  }
};
