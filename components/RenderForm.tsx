import { Box } from "@chakra-ui/react";
import React from "react";
import InputFields from "./InputFields";
import SignupInputs from "../generals/objects/SignupInputs";
import { Field } from "../typescript/interfaces";

const RenderForm: React.FC = () => {
  return (
    <Box>
      {SignupInputs.map((element: Field[], i) => {
        if (element.length === 1) {
          return (
            <Box m="4px 0" key={i}>
              <InputFields inputField={element[0]} />
            </Box>
          );
        } else {
          return (
            <Box d="flex" key={i}>
              {element.map((input, i) => {
                return <InputFields inputField={input} key={i} />;
              })}
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default RenderForm;
