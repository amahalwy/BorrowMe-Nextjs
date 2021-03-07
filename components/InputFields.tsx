import {
  Box,
  FormControl,
  InputGroup,
  Input,
  FormErrorMessage,
} from "@chakra-ui/react";
import React from "react";
import { Field } from "react-final-form";

const required = (inputField) => (inputField ? undefined : "Required");
const InputFields = ({ inputField, i }) => {
  return (
    <Box bg="white" w="100%" h="100%">
      <Field
        name={inputField.id}
        validate={required}
        render={({ input, meta }) => (
          <FormControl isInvalid={meta.touched && meta.error} w="100%">
            <InputGroup>
              <Input
                borderRadius="8px"
                border="2px solid #ccc"
                fontSize={15}
                size="md"
                placeholder={inputField.placeholder}
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
};

export default InputFields;
