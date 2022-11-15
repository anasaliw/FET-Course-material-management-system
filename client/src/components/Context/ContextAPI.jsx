import React, { createContext } from "react";

export const DataProvider = createContext(null);

function ContextAPI({ children }) {
  // ! Setting State for API endpoint in PROJECT section
  const [endPoint, setEndPoint] = React.useState("getITProjects");
  return (
    <DataProvider.Provider value={{ endPoint, setEndPoint }}>
      {children}
    </DataProvider.Provider>
  );
}

export default ContextAPI;
