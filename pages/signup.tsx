import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-final-form";
import { useRouter } from "next/router";
import { useAsyncFn } from "react-use";
import { NextPage } from "next";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { clearErrors } from "../redux/actions/sessionActions";
import RenderForm from "../components/RenderSignupInputs";
import { RenderErrors } from "../components/RenderErrors";
import { NewUser, ReduxState } from "../redux/types";
import { SignupProps } from "../typescript/pages";
import { signup } from "../redux/util/sessionApiUtil";

const Signup: NextPage<SignupProps> = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // const reduxErrors = useSelector((state) => state.errors.session);
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );

  const [state, fetch] = useAsyncFn(async (values) => {
    const newUser = await signup(values);
    dispatch({ type: "RECEIVE_CURRENT_USER", newUser });
    return await newUser.status;
  }, []);

  const onSubmit = (values: NewUser) => {
    fetch(values).then((res: any) => {
      if (res.status !== 400) {
        router.push("/home");
      }
      return null;
    });
  };

  React.useEffect(() => {
    if (isAuthenticated) router.push("/home");
    return () => {
      clearErrors();
    };
  }, []);

  return (
    <Box
      bg="white"
      m="6% auto"
      w={{ base: "90%", lg: "450px" }}
      borderRadius="md"
      boxShadow="0 3px 3px #888"
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
            <Box w="92%" m="0 auto" pb="4%">
              <RenderForm />

              <Box p="10px 0">
                <Box mb="10px">
                  <Text fontSize={14}>* = Required Fields</Text>
                  <Text fontSize={14}>Zip format (XXXXX)</Text>
                </Box>
                <Box p="10px 0">
                  <Button
                    variant="auth-signup"
                    type="submit"
                    disabled={
                      hasValidationErrors ||
                      pristine ||
                      submitting ||
                      state.loading
                    }
                    isLoading={state.loading}
                    loadingText="Creating User"
                  >
                    Sign Up
                  </Button>
                </Box>
              </Box>
              <Box>{/* <RenderErrors errors={reduxErrors} /> */}</Box>
              <Box>
                <Text>
                  Already have an account?{" "}
                  <Link
                    onClick={() => router.push("/login")}
                    color="blue"
                    fontStyle="italic"
                  >
                    Log in
                  </Link>
                </Text>
              </Box>
            </Box>
          </form>
        )}
      />
    </Box>
  );
};

export default Signup;
