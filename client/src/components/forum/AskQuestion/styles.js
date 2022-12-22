import { Typography, styled, Box } from "@mui/material";

export const Title = styled(Typography)`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 40px;
`;
export const GuidelineContainer = styled(Typography)`
  border-color: #0074cc;
  width: 95%;
  border-style: solid;
  padding: 30px;
  border-width: 1px;
  border-radius: 5px;
  background-color: #cce9ff;
`;

export const SpanText = styled("span")({
  color: "#0074cc",
});

export const Container = styled(Box)`
  padding: 40px;
  background-color: rgba(228, 228, 228, 0.467);
  background-color: #fdf2e7;
`;
export const TitleContainer = styled(Box)`
  border: 1px solid gray;
  margin-top: 40px;
  border-radius: 5px;
  width: 95%;
  background-color: #fff;
  padding: 30px;
`;
export const TagsStyles = styled(Box)`
  background-color: #9da8ad;
  color: white;
  display: inline-block;
  padding: 5px;
  margin: 5px;
  border-radius: 15px;
`;
export const SpanTag = styled("span")({
  display: "inline-block",
  marginLeft: 5,
  cursor: "pointer",

  borderRadius: 10,
  fontSize: 18,
});
