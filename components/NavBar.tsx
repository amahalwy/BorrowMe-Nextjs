import { Box, Button, Heading, Image } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";
import { connect, useDispatch } from "react-redux";
import { logout } from "../redux/actions/sessionActions";
import { useAsyncFn } from "react-use";

const buttonStyles = {
  borderRadius: "25px",
  border: "2px solid white",
  background: "#a2d3c2",
  color: "#fff",
  font: "bold",
  padding: "5px 15px",
};

const LoggedIn = () => {
  const router = useRouter();
  const [state, fetch] = useAsyncFn(async () => {
    const response = await dispatch(logout());
    return response;
  }, []);

  const logoutUser = () => {
    fetch().then(() => router.push("/login"));
  };

  const dispatch = useDispatch();
  return (
    <Box w="100%" d="flex" h="66px" bg="#a2d3c2" shadow="xl">
      <Box w="75%">
        <Box
          w="17%"
          ml="6%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            w="25%"
            h="90%"
            borderRadius="10px"
            _hover={{ bg: "rgba(0,0,0,0.4)", cursor: "pointer" }}
          >
            <Image
              w="100%"
              h="100%"
              src="https://borrowme-pro.s3.us-east-2.amazonaws.com/icons/bm-logo.png"
            />
          </Box>
          <Box>
            <Heading color="white" as="h2" fontSize={30} fontWeight="bold">
              BorrowMe
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box w="25%" d="flex" alignItems="center" justifyContent="center">
        <Button
          onClick={logoutUser}
          style={buttonStyles}
          _hover={{ border: "1px solid red" }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
};

const LoggedOut = () => {
  const router = useRouter();
  return (
    <Box w="100%" d="flex" h="66px" bg="#a2d3c2" shadow="xl">
      <Box w="75%">
        <Box
          w="17%"
          ml="6%"
          h="100%"
          d="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <Box
            w="25%"
            h="90%"
            borderRadius="10px"
            _hover={{ bg: "rgba(0,0,0,0.4)", cursor: "pointer" }}
          >
            <Image
              w="100%"
              h="100%"
              src="https://borrowme-pro.s3.us-east-2.amazonaws.com/icons/bm-logo.png"
            />
          </Box>
          <Box>
            <Heading color="white" as="h2" fontSize={30} fontWeight="bold">
              BorrowMe
            </Heading>
          </Box>
        </Box>
      </Box>
      <Box
        pr="10%"
        ml="5%"
        w="20%"
        d="flex"
        alignItems="center"
        justifyContent="space-between"
      >
        <Button onClick={() => router.push("/signup")} style={buttonStyles}>
          Signup
        </Button>
        <Button onClick={() => router.push("/login")} style={buttonStyles}>
          Login
        </Button>
      </Box>
    </Box>
  );
};

const NavBar = (props) => {
  return <>{props.isAuthenticated ? <LoggedIn /> : <LoggedOut />}</>;
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user,
});

export default connect(mSTP)(NavBar);
