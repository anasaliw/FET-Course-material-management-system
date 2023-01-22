import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";

function Material() {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: 30,
        marginBottom: 30,
      }}
    >
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
            src={require("./assets/get.jpg")}
            alt='teacher'
            srcset=''
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='div'>
              Get Course Material
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Search for Course Content and description of subjects and search
              for course material
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
              to={"/material/getCourse"}
              variant='outlined'
            >
              Search Courses
            </Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </Box>
  );
}

export default Material;
