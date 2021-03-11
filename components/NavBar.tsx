import {
  background,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";

import React from "react";
import { useRouter } from "next/router";

const NavBar = () => {
  const router = useRouter();
  const buttonStyles = {
    borderRadius: "25px",
    border: "2px solid white",
    margin: "0 40px 0 0",
    // fontWeight: "700",
    background: "#a2d3c2",
    color: "#fff",
    font: "bold",
    padding: "5px 15px",
    // _hover: {
    //   bg: "#779e91",
    //   color: "#000",
    //   border: "#000",
    // },
  };

  return (
    <Box w="100%">
      <Box w="40%">
        <Heading
          color="#fff"
          as="h2"
          position="fixed"
          fontSize="24px"
          m="24px 0 0 180px"
          fontWeight="semibold"
        >
          Borrow Me
        </Heading>
      </Box>

      <Box
        bg="#a2d3c2"
        height="68px"
        separator=" "
        justifyContent="flex-end"
        alignItems="center"
        display="flex"
      >
        <Box w="290px">
          <Button
            onClick={() => router.push("/signup")}
            style={buttonStyles}
            _hover={{ border: "1px solid red" }}
            // _hover={buttonStyles._hover}
          >
            Signup
          </Button>
          <Button onClick={() => router.push("/login")} style={buttonStyles}>
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default NavBar;
