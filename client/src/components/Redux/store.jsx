import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  getSingleProjectReducer,
  getThesisReducer,
} from "./reducers/ThesisReducer";
// import { composeWithDevtools } from "redux-devtools-extension";
import { composeWithDevTools } from "redux-devtools-extension";
import { LoginAPIReducer } from "./reducers/LoginReducer";
import {
  addQuestionReducer,
  getQuestionsReducer,
  getSingleQuestionReducer,
} from "./reducers/DiscussionReducers/DiscussionReducers";
import { TeacherLoginAPIReducer } from "./reducers/Teachers/TeacherLoginReducer";

const reducer = combineReducers({
  getProject: getThesisReducer,
  getSingleProject: getSingleProjectReducer,
  loginResponse: LoginAPIReducer,
  postQuestionResponse: addQuestionReducer,
  getAllQuestions: getQuestionsReducer,
  getSingleQuestion: getSingleQuestionReducer,
  TeacherLoginResponse: TeacherLoginAPIReducer,
});
const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
