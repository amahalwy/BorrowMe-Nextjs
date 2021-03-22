import {
  FormControl,
  InputGroup,
  Input,
  InputRightElement,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "react-final-form";
import { connect } from "react-redux";
import { FaAsterisk } from "react-icons/fa";
import { returnValidation } from "../generals/functions/validations";
import { InputFieldsProps } from "../typescript/components";

const InputFields: React.FC<InputFieldsProps> = ({ inputField }) => {
  return (
    <Field
      // key={inputField.id}
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
            {meta.error && meta.touched && (
              <Box>
                <InputRightElement
                  top="-10px"
                  right="-10px"
                  children={<FaAsterisk fontSize={6} color="red" />}
                />
              </Box>
            )}
          </InputGroup>
        </FormControl>
      )}
    />
  );
};

const mSTP = (state) => ({
  currentUser: state.session.user,
});

export default connect(mSTP)(InputFields);
