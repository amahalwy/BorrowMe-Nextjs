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
import { Field, Form } from "react-final-form";

export default function Signup() {
  const onSubmit = (values) => {};
  const required = (value) => (value ? undefined : "Required");
  const INPUT_VALUES = [
    "firstName",
    "lastName",
    "address",
    "city",
    "zipCode",
    "state",
    "email",
    "password",
    "confirmPassword",
  ];
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

  const firstObject = {
    id: "firstName",
    placeholder: "First Name",
  };

  const secondObject = {
    id: "LastName",
    placeholder: "Last Name",
  };

  const thirdObject = {
    id: "Password",
    placeholder: "Password",
  };

  const boxArray = [[firstObject, secondObject], thirdObject];

  const router = useRouter();
  const Value = ({ value, i }) => {
    return (
      <Box h="20px" w="100%">
        <Box bg="white" w="50%" h="100%" m="10% auto">
          <Box>
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field
                    name="crypto"
                    validate={required}
                    render={({ input, meta }) => (
                      <FormControl
                        isInvalid={meta.touched && meta.error}
                        w="100%"
                      >
                        <InputGroup>
                          <Input
                            borderRadius="0"
                            borderBottom="1px solid #ccc"
                            fontSize={30}
                            w="100%"
                            id="crypto"
                            h="3.68rem"
                            placeholder={INPUT_PLACEHOLDERS[i]}
                            {...input}
                          />
                        </InputGroup>
                        {meta.touched && meta.error && (
                          <FormErrorMessage ml="1%">
                            {meta.error}
                          </FormErrorMessage>
                        )}
                      </FormControl>
                    )}
                  />
                </form>
              )}
            />
          </Box>
          <Box></Box>
          <Box></Box>
        </Box>
      </Box>
    );
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
              {INPUT_VALUES.map((value, i) => {
                // <Box></Box>
                // <Box></Box>
                // <Box></Box>
                // <Box></Box>
                // <Box></Box>
                // <Box></Box>
                return <Value value={value} i={i} />;
              })}
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
            </form>
          )}
        />
      </Box>
    );
  };
  return Trial();
}
