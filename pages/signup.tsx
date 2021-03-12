import React from "react";
import { border, Box, Button, Heading } from "@chakra-ui/react";
import { Form } from "react-final-form";
import RenderForm from "../components/RenderForm";
import NavBar from "../components/NavBar";

const Signup = () => {
  const onSubmit = (values) => {};
  return (
    <Box>
      <NavBar />
      <Box bg="white" m="5% auto" maxWidth="450px">
        <Box>
          <Heading fontSize={25} textAlign="center" padding="5%">
            Sign Up for BorrowMe
          </Heading>
        </Box>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            form,
            submitting,
            pristine,
            values,
            hasValidationErrors,
          }) => (
            <form onSubmit={handleSubmit}>
              <RenderForm />
              <Box p="30px 0" display="flex">
                <Button
                  type="submit"
                  borderRadius="25px"
                  colorScheme="blue"
                  m="auto"
                  fontSize="1.3em"
                  width="450px"
                  disabled={hasValidationErrors || pristine || submitting}
                >
                  Submit
                </Button>
              </Box>
            </form>
          )}
        />
      </Box>
    </Box>
  );
};

export default Signup;
