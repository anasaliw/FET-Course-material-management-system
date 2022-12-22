import * as actionTypes from "../../Constants/actionType";

const addQuestionsInitials = {
  loading: true,
  addQuestionResponse: {},
};

const getQuestionsInitials = {
  loading: true,
  getAllQuestionsResponse: {},
};
const getSingleQuestionInitials = {
  loading: true,
  getSingleQuestionResponse: {},
};

export const addQuestionReducer = (state = addQuestionsInitials, action) => {
  switch (action.type) {
    case actionTypes.POST_QUESTION_LOADING:
      return { loading: true };
    case actionTypes.POST_QUESTION_SUCCESSFUL:
      return { loading: false, postQuestionResponse: action.payload };
    case actionTypes.POST_QUESTION_FAILED:
      return { loading: false, postQuestionResponse: action.payload };
    default:
      return state;
  }
};

export const getQuestionsReducer = (state = getQuestionsInitials, action) => {
  switch (action.type) {
    case actionTypes.GET_QUESTIONS_LOADING:
      return { loading: true };
    case actionTypes.GET_QUESTIONS_SUCCESSFUL:
      return { loading: false, getAllQuestionsResponse: action.payload };
    case actionTypes.GET_QUESTIONS_FAILED:
      return { loading: false, getAllQuestionsResponse: action.payload };
    default:
      return state;
  }
};

export const getSingleQuestionReducer = (
  state = getSingleQuestionInitials,
  action
) => {
  switch (action.type) {
    case actionTypes.GET_SINGLE_QUESTION_LOADING:
      return { loading: true };
    case actionTypes.GET_SINGLE_QUESTION_SUCCESSFUL:
      return { getSingleQuestionResponse: action.payload, loading: false };
    case actionTypes.GET_SINGLE_QUESTION_FAILURE:
      return { getSingleQuestionResponse: action.payload, loading: false };
    default:
      return state;
  }
};
