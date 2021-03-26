import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { useAsyncFn } from "react-use";
import { NextPage, NextPageContext } from "next";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { RenderErrors } from "../components/RenderErrors";
import RenderLoginInputs from "../components/RenderLoginInputs";
import { LoginProps } from "../typescript/pages";
import { clearPostings } from "../redux/actions/postingActions";
import { clearUsers } from "../redux/actions/userActions";

const Login: NextPage<LoginProps> = ({
  login,
  clearErrors,
  clearUsers,
  clearPostings,
}) => {
  const router = useRouter();
  const [clickedDemo, setClickedDemo] = React.useState<boolean>(false);
  // const errors = useSelector((state) => state.errors.session);

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = await login(values);
    return response;
  }, []);

  const onSubmit = (values: { email: string; password: string }) => {
    if (!values) {
      const demopassword = {
        email: "demo@demo.com",
        password: "demo1234",
      };
      fetch(demopassword).then((res: any) => {
        if (res.success) router.push("/home");
      });
      return;
    }

    fetch(values).then((res: any) => {
      if (res.success) {
        router.push("/home");
      }
      return;
    });
  };

  const demoLogin = () => {
    const demopassword = {
      email: "demo@demo.com",
      password: "demo1234",
    };
    fetch(demopassword).then((res: any) => {
      if (res.success) {
        router.push("/home");
      }
      return null;
    });
  };

  React.useEffect(() => {
    clearPostings();
    return () => {
      clearUsers();
      clearErrors();
    };
  }, []);

  return (
    <Box
      bg="white"
      m="5% auto"
      w={{ base: "90%", lg: "450px" }}
      borderRadius="md"
      maxW={{ base: null, "450px": "450px" }}
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
  );
};

const mDTP = {
  login: login,
  clearErrors: clearErrors,
  clearUsers: clearUsers,
  clearPostings: clearPostings,
};

export default connect(null, mDTP)(Login);
