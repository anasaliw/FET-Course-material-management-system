import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accreditation from "./components/accreditation/Accreditation";
import ContextAPI from "./components/Context/ContextAPI";
import AskQuestion from "./components/forum/AskQuestion/AskQuestion";
import Forum from "./components/forum/Forum";
import ViewQuestion from "./components/forum/ViewQuestion";
import Home from "./components/Home/Home";
// import NavBar from "./components/Home/navBar/NavBar";
import NavBarParent from "./components/Home/navBar/NavBarParent";
import Material from "./components/material/Material";
import Project from "./components/project/Project";
import ViewProject from "./components/project/ViewProject";

function App() {
  return (
    <ContextAPI>
      <BrowserRouter>
        <NavBarParent />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Project />} />
          <Route path='/forum' element={<Forum />} />
          <Route path='/material' element={<Material />} />
          <Route path='/accreditation' element={<Accreditation />} />
          <Route
            path='/projects/viewProject/:id'
            element={<ViewProject />}
          ></Route>
          <Route path='forum/addQuestion' element={<AskQuestion />} />
          <Route path='forum/viewQuestion/:id' element={<ViewQuestion />} />
        </Routes>
      </BrowserRouter>
    </ContextAPI>
  );
}

export default App;
