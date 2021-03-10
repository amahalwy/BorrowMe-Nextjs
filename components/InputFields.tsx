import {
  FormControl,
  InputGroup,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "react-final-form";

const required = (inputField) => (inputField ? undefined : "Required");
const InputFields = ({ inputField }) => {
  return (
    <Field
      name={inputField.id}
      validate={required}
      render={({ input, meta }) => (
        <FormControl isInvalid={meta.touched && meta.error}>
          <InputGroup>
            <Input
              borderRadius="8px"
              border="2px solid #ccc"
              fontSize={15}
              style={inputField.inputStyles}
              placeholder={inputField.placeholder}
              {...input}
              type={inputField.type || "text"}
            />
          </InputGroup>
          {meta.touched && meta.error && (
            <FormErrorMessage ml="1%">{meta.error}</FormErrorMessage>
          )}
        </FormControl>
      )}
    />
  );
};

export default InputFields;
