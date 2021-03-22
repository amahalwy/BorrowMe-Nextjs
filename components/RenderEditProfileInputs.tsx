import React from "react";
import { Box, Input } from "@chakra-ui/react";
import InputFields from "./InputFields";
import { editProfileInputs } from "../generals/objects/authInputs";

const RenderEditProfileInputs: React.FC = () => {
  return (
    <Box m="4% 0">
      {editProfileInputs.map((element, i) => {
        if (element.length === 1) {
          return (
            <Box m="2% 0" key={i}>
              <InputFields inputField={element[0]} key={element[0].id} />
            </Box>
          );
        } else {
          return (
            <Box d="flex" key={i}>
              {element.map((input, j) => {
                return (
                  <Box key={j}>
                    <InputFields inputField={input} key={input.id} />
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

export default RenderEditProfileInputs;
