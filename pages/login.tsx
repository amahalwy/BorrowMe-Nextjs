import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { useAsyncFn } from "react-use";
import { NextPage } from "next";
import { RenderErrors } from "../components/RenderErrors";
import RenderLoginInputs from "../components/RenderLoginInputs";
import { LoginProps } from "../typescript/pages";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { demopassword } from "../generals/objects/authInputs";
import { ReduxState } from "../redux/types";
import { clearPostings } from "../redux/actions/postingActions";
import { clearUsers } from "../redux/actions/userActions";

const Login: NextPage<LoginProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [clickedDemo, setClickedDemo] = React.useState<boolean>(false);
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );
  // const errors = useSelector((state) => state.errors.session);

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = dispatch(login(values));
    return response;
  }, []);

  const onSubmit = (values: { email: string; password: string }) => {
    if (!values) {
      fetch(demopassword).then((res: any) =>
        res.success ? router.push("/home") : null
      );
      return;
    }

    fetch(values).then((res: any) =>
      res.success ? router.push("/home") : null
    );
  };

  const demoLogin = () => {
    fetch(demopassword).then((res: any) => {
      if (res.success) {
        router.push("/home");
      }
      return;
    });
  };

  React.useEffect(() => {
    if (isAuthenticated) router.push("/home");
    return () => {
      clearPostings();
      clearUsers();
      clearErrors();
    };
  }, []);

  return (
    <Box h="100%">
      <Box
        bg="white"
        m="10% auto"
        w={{ base: "90%", "500px": "450px" }}
        borderRadius="md"
        boxShadow="0 3px 3px #888"
      >
        <Box>
          <Heading fontSize={25} textAlign="center" padding="5%">
            Login to BorrowMe
          </Heading>
        </Box>
        <Form
          onSubmit={onSubmit}
          render={({
            handleSubmit,
            submitting,
            pristine,
            hasValidationErrors,
            submitSucceeded,
          }) => (
            <form onSubmit={handleSubmit}>
              <Box w="92%" m="0 auto" pb="4%">
                <RenderLoginInputs />

                <Box p="30px 0">
                  <Button
                    variant="auth-login"
                    type="submit"
                    disabled={
                      submitSucceeded ||
                      hasValidationErrors ||
                      pristine ||
                      submitting ||
                      state.loading
                    }
                    isLoading={state.loading}
                  >
                    Login
                  </Button>
                  <Button
                    variant="auth-login"
                    disabled={clickedDemo || state.loading}
                    isLoading={state.loading}
                    onClick={() => {
                      setClickedDemo(!clickedDemo);
                      demoLogin();
                    }}
                  >
                    Demo Login
                  </Button>
                </Box>
                <Box>{/* <RenderErrors errors={errors} /> */}</Box>
                <Box>
                  <Text w="100%" align="center">
                    Don't have an account yet?{" "}
                    <Link
                      onClick={() => router.push("/signup")}
                      color="blue"
                      fontStyle="italic"
                    >
                      Sign Up
                    </Link>
                  </Text>
                </Box>
              </Box>
            </form>
          )}
        />
      </Box>
    </Box>
  );
};

export default Login;
