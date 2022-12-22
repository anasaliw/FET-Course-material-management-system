import React, { createContext } from "react";

export const DataProvider = createContext(null);

function ContextAPI({ children }) {
  // ! Setting State for API endpoint in PROJECT section

  const [endPoint, setEndPoint] = React.useState("getITProjects");
  const [account, setAccount] = React.useState(true);
  return (
    <DataProvider.Provider
      value={{ endPoint, setEndPoint, account, setAccount }}
    >
      {children}
    </DataProvider.Provider>
  );
}

export default ContextAPI;
