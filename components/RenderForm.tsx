import { Box } from "@chakra-ui/react";
import React, { useState } from "react";
import InputFields from "./InputFields";
import { signupInputs, loginInputs } from "../generals/objects/authInputs";
import { useRouter } from "next/router";


const CheckInputType = () => {
  const router = useRouter();
  const [inputFields, setInputFields] = useState(
    router.pathname === "/login" ? loginInputs : signupInputs
  );
  return (
    <Box>
      {inputFields.map((element, i) => {
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

const RenderForm: React.FC = () => {
  const [inputType, setInputType] = useState("/login");
  let formInputs;

  return (
    <Box>
      <CheckInputType />
    </Box>
  );
};

export default RenderForm;
