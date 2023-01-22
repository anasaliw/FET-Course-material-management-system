import { Divider } from "@mui/material";
import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accreditation from "./components/accreditation/Accreditation";
import { DataProvider } from "./components/Context/ContextAPI";
import AskQuestion from "./components/forum/AskQuestion/AskQuestion";
import Forum from "./components/forum/Forum";
import ViewQuestion from "./components/forum/ViewQuestion";
import Home from "./components/Home/Home";
// import NavBar from "./components/Home/navBar/NavBar";
import NavBarParent from "./components/Home/navBar/NavBarParent";
import TitleSection from "./components/Home/navBar/TitleSection";
import Course from "./components/material/Course";
import GetCourse from "./components/material/GetCourse";
import Material from "./components/material/Material";
import Project from "./components/project/Project";
import ViewProject from "./components/project/ViewProject";
import SideBar from "./components/Teachers/Home/Sidebar";
import Login from "./components/Teachers/Login";
import Teacher from "./components/Teachers/Teacher";

function ClientRoutes() {
  const { teacherAccount } = useContext(DataProvider);
  return (
    <>
      {teacherAccount ? (
        <>
          <BrowserRouter>
            <NavBarParent />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/projects' element={<Project />} />
              <Route path='/forum' element={<Forum />} />
              <Route path='/accreditation' element={<Accreditation />} />
              <Route path='/loginTeacher' element={<Login />} />
              <Route
                path='/projects/viewProject/:id'
                element={<ViewProject />}
              ></Route>
              <Route path='forum/addQuestion' element={<AskQuestion />} />
              <Route path='forum/viewQuestion/:id' element={<ViewQuestion />} />
              <Route path='/material' element={<Material />} />
              <Route path='/material/getCourse' element={<GetCourse />} />
              <Route
                path='/material/getCourse/:dept/:semester/:subject'
                element={<Course />}
              />
            </Routes>
          </BrowserRouter>
        </>
      ) : (
        <BrowserRouter>
          <TitleSection />
          <Divider />
          <SideBar />
        </BrowserRouter>
      )}
    </>
  );
}

export default ClientRoutes;
