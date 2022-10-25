import * as React from "react";
import { Box } from "@mui/system";

export const Display = ({ operator, inputOneNum, inputTwoNum }) => {
  return (
    <>
      <Box
        sx={{
          height: "50px",
          width: "200px",
          marginTop: "200px",
          border: "2px black solid",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <h2>{inputOneNum + " " + operator + " " + inputTwoNum}</h2>
      </Box>
    </>
  );
};
