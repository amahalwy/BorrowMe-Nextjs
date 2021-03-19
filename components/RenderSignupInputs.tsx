import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import InputFields from "./InputFields";
import { signupInputs, loginInputs } from "../generals/objects/authInputs";
import { useRouter } from "next/router";

const RenderSignupInputs: React.FC = () => {
  return (
    <Box>
      <Box>
        {signupInputs.map((element, i) => {
          if (element.length === 1) {
            return (
              <Box m="2% 0" key={i}>
                <InputFields inputField={element[0]} />
              </Box>
            );
          } else {
            return (
              <Box d="flex" key={i}>
                {element.map((input, i) => {
                  return (
                    <Box>
                      <InputFields inputField={input} key={i} />
                    </Box>
                  );
                })}
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default RenderSignupInputs;
