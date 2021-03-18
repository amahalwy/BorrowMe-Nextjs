import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import { useDispatch, connect } from "react-redux";
import RenderForm from "../components/RenderForm";
import { useRouter } from "next/router";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { useAsyncFn } from "react-use";
import { RenderErrors } from "../components/RenderErrors";
import { NextPage } from "next";

const Login: NextPage = () => {
  const router = useRouter();
  // const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = await dispatch(login(values));
    return response;
  }, []);

  const onSubmit = (values) => {
    fetch(values).then((res: any) => {
      if (res.success) {
        router.push("/home");
      }
      return null;
    });
  };

  const trialLogin = () => {
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
      p="5vmin"
      w={{ base: "90%", lg: "450px" }}
      borderRadius="md"
      boxShadow="base"
      maxW={{ base: null, "450px": "450px" }}
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
        }) => (
          <form onSubmit={handleSubmit}>
            <RenderForm data-inputType="login" />
            <Box p="30px 0" display="flex">
              <Button
                colorScheme="blue"
                variant="auth-submit"
                type="submit"
                borderRadius="25px"
                m="auto"
                fontSize="1.3em"
                width="450px"
                disabled={
                  hasValidationErrors || pristine || submitting || state.loading
                }
                isLoading={state.loading}
                loadingText="Creating User"
              >
                Login
              </Button>
            </Box>
            <Box>
              <Button onClick={() => trialLogin()}>Demo Login</Button>
            </Box>
            <Box>{/* <RenderErrors errors={errors} /> */}</Box>
            <Box>
              <Text w="100%" align="center">
                Don't have an account yet?{" "}
                <Link onClick={() => router.push("/signup")}>Sign Up</Link>
              </Text>
            </Box>
          </form>
        )}
      />
    </Box>
  );
};

export default Login;
