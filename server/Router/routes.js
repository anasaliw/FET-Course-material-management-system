import express from "express";
// import { getSingleITProject } from "../Controllers/Get Single Projects/getSingleITProject.js";
import { getElectronicsDetails } from "../Controllers/Thesis Details/getElectroicsDetails.js";
import { getITDetails } from "../Controllers/Thesis Details/getITDetails.js";
import { getSoftwareDetails } from "../Controllers/Thesis Details/getSoftwareDetails.js";
import { getTelecomDetails } from "../Controllers/Thesis Details/getTelecomDetails.js";
import { getSingleITProject } from "../Controllers/Get Single Projects/getSingleITProject.js";
import { getSingleSoftwareProject } from "../Controllers/Get Single Projects/getSingleSoftwareProject.js";
import { getSingleTelecomDetails } from "../Controllers/Get Single Projects/getSingleTelecomProject.js";
import { getSingleElectronicsProject } from "../Controllers/Get Single Projects/getSingleElectronicsProject.js";
import {
  loginStudent,
  signUpStudent,
} from "../Controllers/StudentController/StudentLogin.js";
import {
  addQuestion,
  getAllQuestion,
  postAnswer,
  viewSingleQuestion,
} from "../Controllers/DiscussionForumController/DiscussionForumControllers.js";
import { loginTeacher } from "../Controllers/TeachersController/AccountLogin.js";
import { AddCourse } from "../Controllers/TeachersController/AddCourse.js";
const route = express.Router();

//get All Projects
route.get("/getITProjects/", getITDetails);
route.get("/getSoftwareProject", getSoftwareDetails);
route.get("/getTelecomProject", getTelecomDetails);
route.get("/getElectronicsProject", getElectronicsDetails);

//get Single Project
route.get("/getITProjects/:id", getSingleITProject);
route.get("/getSoftwareProject/:id", getSingleSoftwareProject);
route.get("/getTelecomProject/:id", getSingleTelecomDetails);
route.get("/getElectronicsProject/:id", getSingleElectronicsProject);

//Student Signup and Signin
route.post("/registerStudent", signUpStudent);
route.post("/loginStudent", loginStudent);

// ! For DiscussionForum API

route.post("/addQuestion", addQuestion);
route.get("/getQuestions", getAllQuestion);
route.get("/viewQuestion/:id", viewSingleQuestion);
route.post("/postAnswer/:id", postAnswer);

// ! Teacher Routes
route.post("/loginTeacher", loginTeacher);

// ? add course
route.post("/addCourse/:ITSemester/:ITSubject", AddCourse);

export default route;
