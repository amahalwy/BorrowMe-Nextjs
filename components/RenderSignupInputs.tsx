import React from "react";
import { Box } from "@chakra-ui/react";
import InputFields from "./InputFields";
import { signupInputs } from "../generals/objects/authInputs";

const RenderSignupInputs: React.FC = () => {
  return (
    <Box>
      {signupInputs.map((element, i) => {
        if (element.length === 1) {
          return (
            <Box m="2% 0" key={i}>
              <InputFields inputField={element[0]} key={i} />
            </Box>
          );
        } else {
          return (
            <Box d="flex" key={i}>
              {element.map((input, j) => {
                return (
                  <Box key={j}>
                    <InputFields inputField={input} key={j} />
                  </Box>
                );
              })}
            </Box>
          );
        }
      })}
    </Box>
  );
};

export default RenderSignupInputs;
