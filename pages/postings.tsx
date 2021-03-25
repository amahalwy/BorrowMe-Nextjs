import React from "react";
import { Box, Button, Heading, Text, Link } from "@chakra-ui/react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";
import { clearErrors, login } from "../redux/actions/sessionActions";
import { PostingProps } from "../typescript/pages";
import { clearPostings } from "../redux/actions/postingActions";
import { clearUsers } from "../redux/actions/userActions";
import { fetchThree } from "../redux/util/postingsApiUtil";

const Postings: NextPage<PostingProps> = ({}) => {
  const router = useRouter();

  return (
    <Box
      bg="white"
      m="4% auto"
      w={{ base: "90%", lg: "450px" }}
      borderRadius="md"
      maxW={{ base: null, "450px": "450px" }}
      boxShadow="0 3px 3px #888"
    >
      <Box>
        <Heading fontSize={25} textAlign="center" padding="5%">
          Your Postings
        </Heading>
      </Box>
    </Box>
  );
};

const mSTP = (state) => ({
  postings: state.entities.postings,
});

const mDTP = {
  login: login,
  clearErrors: clearErrors,
  clearUsers: clearUsers,
  clearPostings: clearPostings,
};

export default connect(mSTP, mDTP)(Postings);
