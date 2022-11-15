import * as actionTypes from "../Constants/actionType";

const initialState = {
  loading: true,
  projects: [],
};

export const getThesisReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PROJECT_LOADING:
      return { loading: true };
    case actionTypes.GET_PROJECT_SUCCESSFUL:
      return { projects: action.payload, loading: false };
    case actionTypes.GET_PROJECT_FAILURE:
      return { projects: action.payload, loading: false };
    default:
      return state;
  }
};
export const getSingleProjectReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_PROJECT_LOADING:
      return { loading: true };
    case actionTypes.GET_SINGLE_PROJECT_SUCCESSFUL:
      return { project: action.payload, loading: false };
    case actionTypes.GET_SINGLE_PROJECT_FAILURE:
      return { project: action.payload, loading: false };
    default:
      return state;
  }
};
