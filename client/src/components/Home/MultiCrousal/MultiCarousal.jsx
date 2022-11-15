import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";
import { Box, styled } from "@mui/material";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Container = styled(Box)`
  width: 100%;
  height: 450px;
  max-height: 450px;
  min-height: 450px;
`;
const Image = styled("img")({
  height: 450,
  width: "100%",
  maxHeight: 450,
  minHeight: 450,
  objectFit: "cover",
});
const LOGO = styled("img")({
  height: 450,
  width: "100%",
  maxHeight: 450,
  minHeight: 450,
  objectFit: "fill",
});
function MultiCarousal() {
  return (
    <Container>
      <Carousel
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlaySpeed={1000}
        keyBoardControl={true}
      >
        <Image src={require("./assets/pic1.jpg")} alt='carousal_pic' />
        <LOGO src={require("./assets/pic2.jpg")} alt='carousal_pic' />
        <Image src={require("./assets/hd.jpeg")} alt='carousal_pic' />
        <Image src={require("./assets/pic6.jpg")} alt='carousal_pic' />
        <Image src={require("./assets/hd2.jpeg")} alt='carousal_pic' />
        <Image src={require("./assets/hd3.jpeg")} alt='carousal_pic' />
      </Carousel>
    </Container>
  );
}

export default MultiCarousal;
