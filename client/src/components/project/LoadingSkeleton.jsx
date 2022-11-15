import React from "react";
import { Skeleton, styled, Box } from "@mui/material";

const Container = styled(Skeleton)`
  & > span {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

function LoadingSkeleton() {
  return (
    <Box>
      {/* For other variants, adjust the size with `width` and `height` */}

      <Skeleton
        style={{
          marginTop: 20,
          marginLeft: 15,
        }}
        variant='round'
        width={"95%"}
        height={100}
      />
      <br />
      <Skeleton
        style={{
          marginLeft: 15,
        }}
        variant='round'
        width={"95%"}
        height={100}
      />
      <br />
      <Skeleton
        style={{
          marginLeft: 15,
        }}
        variant='round'
        width={"95%"}
        height={100}
      />
      <br />
      <Skeleton
        style={{
          marginLeft: 15,
        }}
        variant='round'
        width={"95%"}
        height={100}
      />
      <br />
      <Skeleton
        style={{
          marginLeft: 15,
        }}
        variant='rounded'
        width={"90%"}
        height={100}
      />
    </Box>
  );
}

export default LoadingSkeleton;
