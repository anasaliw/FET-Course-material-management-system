import {
  Card,
  styled,
  CardContent,
  Grid,
  Typography,
  CardActions,
  Button,
  CardMedia,
  Box,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ViewProject from "./ViewProject";

// ! Styles

const CardComponent = styled(Card)`
  padding: 10px 20px;
  min-height: 270px;
  max-height: 400px;
  /* min-height: 200px; */
`;
const GridComponent = styled(Grid)`
  margin-bottom: 20px;
  /* width: 100%; */
  min-height: 300px;
  max-height: 400px;
  align-items: center;
  /* min-height: 200px; */
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
const MainTitle = styled(Typography)`
  font-size: 19px;
`;
const BTN = styled(Button)`
  background-color: rgb(10, 102, 194);
  color: #fff;
  padding: 10px 25px;
  margin-left: 10px;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
  :hover {
    background-color: #2f506c;
  }
`;

function ProjectCard({ data, endPoint }) {
  const addEllipse = (text) => {
    if (text.length > 50) {
      return text.substring(0, 50) + " ...";
    } else {
      return text;
    }
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          // justifyContent: "center",
          alignItems: "center",
          padding: "0px 15px 0px 15px",
          backgroundColor: "#e4e4e477",
        }}
      >
        {data.map((project) => (
          <GridComponent item xs={12} sm={12} md={12} lg={6}>
            <Card sx={{ display: "flex" }}>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Title variant='h5'>
                    <SpanText>Title : </SpanText> &nbsp;
                    {addEllipse(project.title)}
                  </Title>
                  <Title
                    component='Span'
                    variant='subtitle1'
                    color='text.secondary'
                  >
                    <SpanText>Batch : </SpanText> &nbsp;
                    {project.batch}
                  </Title>
                </CardContent>
                <CardActions>
                  <BTN
                    component={Link}
                    to={`/projects/viewProject/${project._id}`}
                  >
                    Read More
                  </BTN>
                </CardActions>
              </Box>
              <CardMedia
                component='img'
                sx={{
                  width: 400,
                  objectFit: "fill",
                  minWidth: 400,
                  marginLeft: "auto",
                  height: 270,
                }}
                image={project.url}
                alt='Live from space album cover'
              />
            </Card>
          </GridComponent>
        ))}
      </Grid>
    </>
  );
}

export default ProjectCard;
