import React from "react";
import { Title, SpanText, GuidelineContainer } from "./styles";
import { Typography } from "@mui/material";

function Guidelines() {
  return (
    <>
      <Title>Ask a public Question</Title>
      <GuidelineContainer>
        <Typography sx={{ fontSize: 20, marginBottom: 1 }}>
          Writing a good question
        </Typography>
        <Typography sx={{ marginBottom: 1 }}>
          Your`s ready to <SpanText>ask</SpanText> a
          <SpanText> programming-related question</SpanText> and this form will
          help guide you through the process.
        </Typography>
        <Typography>
          Looking to ask a non-programming question?
          <SpanText>See the topics here</SpanText> to find a relevant site.
        </Typography>

        <Typography style={{ marginTop: 10, fontWeight: 600 }}>
          Steps
        </Typography>
        <ul>
          <li>Summarize your problem in a one-line title.</li>
          <li>Describe your problem in more detail.</li>
          <li>Describe what you tried and what you expected to happen.</li>
          <li>
            Add “tags” which help surface your question to members of the
            community
          </li>
          <li>Review your question and post it to the site.</li>
        </ul>
      </GuidelineContainer>
    </>
  );
}

export default Guidelines;
