import React from "react";
import { Box, Button, Heading } from "@chakra-ui/react";
import { Form } from "react-final-form";
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
                cursor="pointer"
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
  );
};

export default Signup;
