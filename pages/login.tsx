import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Field, Form } from "react-final-form";
import axios from "axios";

const loginUser = (data) => {
  return axios.post(
    "https://borrow-me-app.herokuapp.com/api/users/login",
    data
  );
};

const trialLogin = () => {
  const demopassword = {
    email: "demo@demo.com",
    password: "demo1234",
  };
  loginUser(demopassword).then((res) => console.log(res));
};

const getDemo = () => {
  return axios.get(
    "https://borrow-me-api.herokuapp.com/api/users/5f4c768bff3c01eaf2c309c4"
  );
};

export default function Login() {
  return (
    <Box>
      <Form
        onSubmit={() => null}
        render={({
          handleSubmit,
          form,
          submitting,
          pristine,
          values,
          hasValidationErrors,
        }) => (
          <form onSubmit={handleSubmit}>
            <Field
              name="user"
              render={({ input, meta }) => (
                <FormControl isInvalid={meta.touched && meta.error}>
                  <InputGroup>
                    <Input
                      id="name"
                      borderRadius="8px"
                      border="2px solid #ccc"
                      fontSize={15}
                      placeholder="name"
                      {...input}
                    />
                  </InputGroup>
                  {meta.touched && meta.error && (
                    <FormErrorMessage ml="1%">{meta.error}</FormErrorMessage>
                  )}
                </FormControl>
              )}
            />
            <Field
              name="password"
              render={({ input, meta }) => (
                <FormControl isInvalid={meta.touched && meta.error}>
                  <InputGroup>
                    <Input
                      id="password"
                      borderRadius="8px"
                      border="2px solid #ccc"
                      fontSize={15}
                      placeholder="password"
                      type="password"
                      {...input}
                    />
                  </InputGroup>
                  {meta.touched && meta.error && (
                    <FormErrorMessage ml="1%">{meta.error}</FormErrorMessage>
                  )}
                </FormControl>
              )}
            />

            <Box p="30px 0" display="flex">
              <Button onClick={getDemo}>Submit</Button>
            </Box>
          </form>
        )}
      />
    </Box>
  );
}
