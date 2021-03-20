import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "react-final-form";
import { returnValidation } from "../generals/functions/validations";
import { InputFieldsProps } from "../typescript/components";
import { FaAsterisk } from "react-icons/fa";

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
            <InputRightElement
              top="-10px"
              right="-10px"
              children={<FaAsterisk fontSize={6} color="red" />}
            />
          </InputGroup>
        </FormControl>
      )}
    />
  );
};

export default InputFields;
