import React from "react";
import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accreditation from "./components/accreditation/Accreditation";
import ContextAPI, { DataProvider } from "./components/Context/ContextAPI";
import ClientRoutes from "./ClientRoutes";

function App() {
  return (
    <ContextAPI>
      <ClientRoutes />
    </ContextAPI>
  );
}

export default App;
