import React from "react";
import { connect } from "react-redux";
import Link from "next/link";
import { Text, Box, Heading } from "@chakra-ui/react";

const Custom404 = ({ isAuthenticated }) => {
  return (
    <Box d="flex" h="40vh" alignItems="center" justifyContent="center">
      <Box>
        <Heading fontSize={{ base: 34, lg: 56 }}>404 - Page Not Found</Heading>
        {isAuthenticated ? (
          <Link href="/home">
            <Box color="black" fontSize={{ base: 24, lg: 30 }}>
              Redirect to{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
              >
                home
              </span>
            </Box>
          </Link>
        ) : (
          <Link href="/login">
            <Box color="black" fontSize={{ base: 24, lg: 30 }}>
              Redirect to{" "}
              <span
                style={{
                  color: "blue",
                  textDecoration: "underline",
                  fontStyle: "italic",
                }}
              >
                login
              </span>
            </Box>
          </Link>
        )}
      </Box>
    </Box>
  );
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mSTP)(Custom404);
