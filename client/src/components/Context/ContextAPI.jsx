import React, { createContext } from "react";

export const DataProvider = createContext(null);

function ContextAPI({ children }) {
  // ! Setting State for API endpoint in PROJECT section

  const [endPoint, setEndPoint] = React.useState("getITProjects");
  const [account, setAccount] = React.useState(true);
  const [teacherAccount, setTeacherAccount] = React.useState(true);
  console.log(teacherAccount);
  return (
    <DataProvider.Provider
      value={{
        endPoint,
        setEndPoint,
        account,
        setAccount,
        teacherAccount,
        setTeacherAccount,
      }}
    >
      {children}
    </DataProvider.Provider>
  );
}

export default ContextAPI;
