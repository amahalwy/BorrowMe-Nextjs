import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import RenderForm from "../components/RenderForm";
import { useRouter } from "next/router";
import { signup, clearErrors } from "../redux/actions/sessionActions";
import { useAsyncFn } from "react-use";
import { RenderErrors } from "../components/RenderErrors";

const Signup: React.FC = () => {
  const router = useRouter();
  // const reduxErrors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = await dispatch(signup(values));
    return await response;
  }, []);

  const onSubmit = (values) => {
    fetch(values).then((res) => {
      if (res.status !== 400) {
        router.push("/home");
      }
      return null;
    });
  };

  React.useEffect(() => {
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  return (
    <Box
      bg="white"
      m="10% auto"
      w={{ base: "90%", lg: "450px" }}
      maxW={{ base: null, "450px": "450px" }}
    >
      <Box>
        <Heading
          fontSize={{ base: 25, lg: 40 }}
          textAlign="center"
          padding="5%"
        >
          Sign Up for BorrowMe
        </Heading>
      </Box>
      <Form
        onSubmit={onSubmit}
        validate={(values) => {
          const errors: any = {};
          if (values.confirmPassword !== values.password) {
            errors.confirmPassword = "Must match";
          }
          return errors;
        }}
        render={({
          handleSubmit,
          submitting,
          pristine,
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
                disabled={
                  hasValidationErrors || pristine || submitting || state.loading
                }
                isLoading={state.loading}
                loadingText="Creating User"
              >
                Sign Up
              </Button>
            </Box>
            <Box>{/* <RenderErrors errors={reduxErrors} /> */}</Box>
            <Box>
              <Text>
                Already have an account?{" "}
                <Link onClick={() => router.push("/login")}>Log in</Link>
              </Text>
            </Box>
          </form>
        )}
      />
    </Box>
  );
};

export default Signup;
