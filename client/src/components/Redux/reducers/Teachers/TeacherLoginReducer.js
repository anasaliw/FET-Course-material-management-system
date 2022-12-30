import * as actionType from "../../Constants/actionType";

const loginState = {
  loading: true,
  LoginResponse: {},
};
export const TeacherLoginAPIReducer = (state = loginState, action) => {
  switch (action.type) {
    case actionType.LOGIN_LOADING:
      return { loading: true };
    case actionType.LOGIN_SUCCESSFUL:
      return { loading: false, TeacherLoginResponse: action.payload };
    case actionType.LOGIN_FAILURE:
      return { loading: false, TeacherLoginResponse: action.payload };
    default:
      return state;
  }
};
