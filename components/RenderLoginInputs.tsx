import {
  Box,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import React from "react";
import { loginInputs } from "../generals/objects/authInputs";
import { useRouter } from "next/router";
import { Field } from "react-final-form";
import { requiredAndEmail, required } from "../generals/functions/validations";

const RenderLoginInputs: React.FC = () => {
  return (
    <>
      {loginInputs.map((inputField, i) => {
        return (
          <Box m="2% 0">
            <Field
              name={inputField.id}
              validate={inputField.id === "email" ? requiredAndEmail : required}
              render={({ input, meta }) => (
                <FormControl isInvalid={meta.touched && meta.error}>
                  <InputGroup>
                    <Input
                      id={inputField.id}
                      borderRadius="8px"
                      border="2px solid #ccc"
                      fontSize={15}
                      style={inputField.inputStyles}
                      placeholder={inputField.placeholder}
                      type={inputField.type || "text"}
                      {...input}
                    />
                  </InputGroup>
                  {meta.touched && meta.error && (
                    <FormErrorMessage ml="1%">{meta.error}</FormErrorMessage>
                  )}
                </FormControl>
              )}
            />
          </Box>
        );
      })}
    </>
  );
};

export default RenderLoginInputs;
