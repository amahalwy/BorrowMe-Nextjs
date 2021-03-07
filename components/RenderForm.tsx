import { Box, Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import InputFields from "./InputFields";
import SignupInputs from "./SignupInputs";

const RenderForm = () => {
  return (
    <Grid
      templateColumns="repeat(6, 1fr)"
      templateRows="repeat(6, 1fr)"
      gap={1}
    >
      {SignupInputs.map((value, i) => {
        return (
          <GridItem
            key={i}
            style={value.inputStyles}
            colSpan={parseInt(value.gridItemStyles.colSpan)}
          >
            {<InputFields inputField={value} i={i} />}
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default RenderForm;
