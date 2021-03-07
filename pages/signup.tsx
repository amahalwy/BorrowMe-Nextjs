import React from "react";
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
import SignupInputs from "../components/SignupInputs";
import RenderForm from "../components/RenderForm";

const Signup = () => {
  const onSubmit = (values) => {};
  return (
    <Box bg="white" m="10% auto" maxWidth="450px">
      <Box>
        <Heading fontSize={25} textAlign="center" padding="5%">
          Sign Up for BorrowMe
        </Heading>
      </Box>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form onSubmit={handleSubmit}>
            <RenderForm InputsArray={SignupInputs} />
            <Box p="30px 0" display="flex">
              <Button
                type="submit"
                borderRadius="25px"
                colorScheme="blue"
                m="auto"
                cursor="pointer"
                fontSize="1.3em"
                width="450px"
                disabled={pristine || submitting}
              >
                Submit
              </Button>
            </Box>
            {/* <pre>{JSON.stringify(values)}</pre> */}
          </form>
        )}
      />
    </Box>
  );
};

export default Signup;
