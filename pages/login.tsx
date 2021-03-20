import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import { useDispatch, connect } from "react-redux";
import { useRouter } from "next/router";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { useAsyncFn } from "react-use";
import { RenderErrors } from "../components/RenderErrors";
import { NextPage } from "next";
import RenderLoginInputs from "../components/RenderLoginInputs";

const Login: NextPage = () => {
  const router = useRouter();
  const [clickedDemo, setClickedDemo] = React.useState<boolean>(false);
  // const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = await dispatch(login(values));
    return response;
  }, []);

  const onSubmit = (values) => {
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
    return () => {
      dispatch(clearErrors());
    };
  }, []);

  return (
    <Box
      bg="white"
      m="10% auto"
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

export default Login;
