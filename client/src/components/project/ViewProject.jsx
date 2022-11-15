import React, { useEffect } from "react";
import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { DataProvider } from "../Context/ContextAPI";
import { getSingleProject } from "../Redux/actions/ThesisActions";
import LoadingSkeleton from "./LoadingSkeleton";
import { Box, styled, Typography } from "@mui/material";

const Container = styled(Box)`
  display: flex;
`;
const RightComponent = styled(Box)`
  padding: 10px 15px;
`;
const SpanText = styled("span")({
  fontSize: 20,
  fontWeight: 600,
  color: "gray",
  // color: "#686767",
});
const Title = styled(Typography)`
  font-size: 18px;
  padding: 5px 10px;
  font-weight: 600;
  color: black;
`;
const AbstractContainer = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const AbstractHeading = styled(Typography)`
  text-align: center;
  font-family: "League Spartan", sans-serif;
  font-size: 49px;
  font-weight: 600;
`;
const AbstractPara = styled(Typography)`
  padding: 20px 20px;
  text-align: center;
  font-size: 20;
  width: 70%;

  font-family: "League Spartan", sans-serif;
`;
function ViewProject() {
  const { id } = useParams();
  const { endPoint } = useContext(DataProvider);
  console.log(endPoint);

  const dispatch = useDispatch();
  const { project, loading } = useSelector((state) => state.getSingleProject);
  useEffect(() => {
    dispatch(getSingleProject(endPoint, id));
  }, [id, dispatch, endPoint]);
  const data = project?.data?.data;
  const json = JSON.stringify(data);
  console.log(json);
  return (
    <>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <>
          <Container>
            <Box style={{ width: "50%" }}>
              <img
                style={{ width: "100%" }}
                src={data?.url}
                alt='project_pic'
                srcset=''
              />
            </Box>
            <RightComponent style={{ width: "50%" }}>
              <Title>
                <SpanText>Title : </SpanText>
                {data?.title}
              </Title>
              <Title>
                <SpanText>Batch : </SpanText>
                {data?.batch}
              </Title>
              <Title>
                <SpanText>Technologies : </SpanText>
                {data?.technologies}
              </Title>
              <Title>
                <SpanText>Supervisor : </SpanText>
                {data?.supervisor}
              </Title>
            </RightComponent>
          </Container>

          <AbstractContainer>
            <AbstractHeading>Abstract</AbstractHeading>
            <AbstractPara>{data?.abstract}</AbstractPara>
          </AbstractContainer>
        </>
      )}
    </>
  );
}

export default ViewProject;
