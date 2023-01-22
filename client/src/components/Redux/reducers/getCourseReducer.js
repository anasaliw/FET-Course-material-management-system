import * as actionType from "../Constants/actionType";

const loginState = {
  loading: true,
  getCourse: {},
};
export const getCourseReducer = (state = loginState, action) => {
  switch (action.type) {
    case actionType.GET_COURSE_LOADING:
      return { loading: true };
    case actionType.GET_COURSE_SUCCESSFUL:
      return { loading: false, getCourse: action.payload };
    case actionType.GET_COURSE_FAILURE:
      return { loading: false, getCourse: action.payload };
    default:
      return state;
  }
};
