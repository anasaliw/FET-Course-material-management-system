import axios from "axios";
import * as actionType from "../Constants/actionType";

const URL = "http://localhost:8000";

export const loginAPI = (values) => async (dispatch) => {
  try {
    const data = await axios.post(`${URL}/loginStudent`, values);
    dispatch({ type: actionType.LOGIN_SUCCESSFUL, payload: data });

    if (data.data.token) {
      localStorage.setItem("user", JSON.stringify(data));
    }
    return data;
  } catch (error) {
    dispatch({ type: actionType.LOGIN_FAILURE, payload: error.response });
    console.log(error.response);
    return error.response;
  }
};
