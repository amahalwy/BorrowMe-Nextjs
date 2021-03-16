import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { Form } from "react-final-form";
import axios from "axios";
import { useSelector, useDispatch, connect } from "react-redux";
import RenderForm from "../components/RenderForm";
import { useRouter } from "next/router";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { useAsyncFn } from "react-use";
import { RenderErrors } from "../components/RenderErrors";

const Login: React.FC = (props) => {
  const router = useRouter();
  const errors = useSelector((state) => state.errors.session);
  const dispatch = useDispatch();

  const [state, fetch] = useAsyncFn(async (values) => {
    const response = await dispatch(login(values));
    return await response;
  }, []);

  const onSubmit = (values) => {
    fetch(values).then((res) => {
      if (res.data.success) {
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
    dispatch(login(demopassword));
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
      borderRadius="10px"
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
            <Box p="30px 0">
              <Box>
                <Button
                  type="submit"
                  borderRadius="25px"
                  colorScheme="blue"
                  m="auto"
                  fontSize="1.3em"
                  width="450px"
                  disabled={
                    hasValidationErrors ||
                    pristine ||
                    submitting ||
                    state.loading
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
            </Box>
            <Box>{/* <RenderErrors errors={errors} /> */}</Box>
            <Box>
              <Text>
                Don't have an account? yet{" "}
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
