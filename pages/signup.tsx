import React from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Field, Form } from "react-final-form";

export default function Signup() {
  const onSubmit = (values) => {};
  const required = (value) => (value ? undefined : "Required");

  const INPUT_PLACEHOLDERS = [
    "First Name",
    "Last Name",
    "Address",
    "City",
    "Zip Code",
    "State",
    "Email",
    "Password",
    "Confirm Password",
  ];

  const firstName = {
    id: "firstName",
    placeholder: "First Name",
    inputStyles: {
      display: "inline-block",
      color: "red",
      width: "80%",
      margin: "0",
      colSpan: "3",
    },
  };

  const lastName = {
    id: "lastName",
    placeholder: "Last Name",
    inputStyles: {
      display: "inline-block",
      color: "red",
      width: "80%",
      margin: "0",
    },
    gridItemStyles: {
      colSpan: "3",
    },
  };

  const address = {
    id: "address",
    placeholder: "Address",
    inputStyles: {
      display: "block",
      color: "red",
    },
  };

  const city = {
    id: "city",
    placeholder: "City",
    inputStyles: {
      display: "inline-block",
      color: "red",
    },
  };

  const zipCode = {
    id: "zipCode",
    placeholder: "Zip Code",
    inputStyles: {
      display: "inline-block",
      color: "red",
    },
  };

  const state = {
    id: "state",
    placeholder: "State",
    inputStyles: {
      display: "inline-block",
      color: "red",
    },
  };

  const email = {
    id: "email",
    placeholder: "Email",
    inputStyles: {
      display: "block",
      color: "red",
    },
  };

  const password = {
    id: "password",
    placeholder: "Password",
    inputStyles: {
      cursor: "pointer",
      display: "block",
      color: "red",
    },
  };

  const confirmPassword = {
    id: "confirmPassword",
    placeholder: "Confirm Password",
    type: "password",
    inputStyles: {
      cursor: "pointer",
      color: "red",
    },
  };

  const inputsArray = [
    firstName,
    lastName,
    address,
    city,
    zipCode,
    state,
    email,
    password,
    confirmPassword,
  ];

  const router = useRouter();
  const Value = ({ value, i }) => {
    console.log(value.inputStyles.colSpan);
    return (
      <Box>
        <Box bg="white" w="100%" h="100%" m="10% auto">
          <Field
            name={value.id}
            validate={required}
            render={({ input, meta }) => (
              <FormControl isInvalid={meta.touched && meta.error} w="100%">
                <InputGroup>
                  <GridItem gap={4} colSpan={3}>
                    <Input
                      borderRadius="0"
                      borderBottom="1px solid #ccc"
                      fontSize={30}
                      h="3.68rem"
                      placeholder={INPUT_PLACEHOLDERS[i]}
                      {...input}
                    />
                  </GridItem>
                </InputGroup>
                {meta.touched && meta.error && (
                  <FormErrorMessage ml="1%">{meta.error}</FormErrorMessage>
                )}
              </FormControl>
            )}
          />
        </Box>
      </Box>
    );
  };

  const renderForm = (inputsArray) => {
    let result = [];
    for (let index = 0; index < inputsArray.length; index++) {
      let value = inputsArray[index];
      result.push(
        <Box style={value.inputStyles}>{<Value value={value} i={index} />}</Box>
      );
    }
    return result;
  };

  const Trial = () => {
    const onSubmit = (values) => {};
    return (
      <Box bg="white" w="50%" h="15%" m="10% auto">
        <Box>
          <Heading textAlign="center">Sign Up for BorrowMe</Heading>
        </Box>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <Grid
                templateColumns="repeat(6, 1fr)"
                templateRows="repeat(6, 1fr)"
              >
                {renderForm(inputsArray)}
              </Grid>
              <Box p="10px 0 ">
                <Button
                  type="submit"
                  colorScheme="blue"
                  m="0 1%"
                  disabled={pristine || submitting}
                >
                  Submit
                </Button>
              </Box>
              <pre>{JSON.stringify(values)}</pre>
            </form>
          )}
        />
      </Box>
    );
  };
  return Trial();
}
