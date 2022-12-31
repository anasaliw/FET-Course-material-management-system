import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  CardActions,
  Button,
  styled,
} from "@mui/material";

import { Link } from "react-router-dom";

function Teacher() {
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "20px 20px" }}>
        <CardActionArea>
          {/* <CardMedia
            component='img'
            height='140'
            image='./assets/th.jpg'
            alt='green iguana'
          /> */}
          <img
            style={{ height: 180, width: "100%" }}
            src={require("./assets/th.jpg")}
            alt='teacher'
            srcset=''
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Add Course Material
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Add Course Content and description of subjects and add course
              material
            </Typography>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              component={Link}
              to={"/dashboard/addCourse"}
              variant='outlined'
            >
              Add Courses
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </>
  );
}

export default Teacher;
