import {
  FormControl,
  InputGroup,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "react-final-form";
import { returnValidation } from "../generals/functions/validations";
import { InputFieldsProps } from "../typescript/components";

const InputFields: React.FC<InputFieldsProps> = ({ inputField }) => {
  return (
    <Field
      name={inputField.id}
      validate={returnValidation(inputField.id)}
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
  );
};

export default InputFields;
