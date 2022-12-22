import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProjects } from "../Redux/actions/ThesisActions";
import LoadingSkeleton from "./LoadingSkeleton";
import {
  Box,
  styled,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import ProjectCard from "./ProjectCard";
import { useContext } from "react";
import { DataProvider } from "../Context/ContextAPI";

const DropDown = styled(FormControl)`
  width: 90%;
  text-align: center;
  margin-bottom: 35px;
`;

const Container = styled(Box)`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

function Project() {
  const { endPoint, setEndPoint } = useContext(DataProvider);
  // const [endPoint, setEndPoint] = React.useState("getITProjects");
  // console.log(endPoint);

  const handleChange = (event) => {
    setEndPoint(event.target.value);
  };

  const dispatch = useDispatch();
  // const endPoint = "getITProjects";

  useEffect(() => {
    dispatch(getProjects(endPoint));
  }, [dispatch, endPoint]);

  // ! we can get state from the store
  const { projects, loading } = useSelector((state) => state.getProject);

  // console.log(loading);

  const data = projects?.data?.data;
  const json = JSON.stringify(data);
  // console.log(json);

  return (
    <>
      {loading ? (
        <div>
          <LoadingSkeleton />
        </div>
      ) : (
        <Container>
          <DropDown>
            <InputLabel>Department</InputLabel>
            <Select
              labelId='demo-simple-select-label'
              id='demo-simple-select'
              value={endPoint}
              label='Department'
              onChange={handleChange}
            >
              <MenuItem value={"getITProjects"}>
                Information Technology
              </MenuItem>
              <MenuItem value={"getSoftwareProject"}>
                Software Engineering
              </MenuItem>
              <MenuItem value={"getTelecomProject"}>Telecommunication</MenuItem>
              <MenuItem
                value={"getElectronicsProject"}
                // onChange={(e) => setEndPoint("getElectronicsProject")}
              >
                Electronics
              </MenuItem>
            </Select>
          </DropDown>

          <ProjectCard data={data} endPoint={endPoint} loading={loading} />
        </Container>
      )}
    </>
  );
}

export default Project;
