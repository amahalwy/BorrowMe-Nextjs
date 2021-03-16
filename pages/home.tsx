import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Spinner } from "@chakra-ui/react";
import { connect } from "react-redux";
import { NextPage } from "next";
import { fetchPostings } from "../redux/util/postings_api_util";
import {
  RECEIVE_POSTINGS,
  clearPostings,
} from "../redux/actions/postingActions";
import { wrapper } from "../redux/store";

export const getServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    const request = await fetchPostings();
    const postings = await request.data;
    store.dispatch({ type: RECEIVE_POSTINGS, postings });
  }
);

const Home: NextPage = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    return () => dispatch(clearPostings());
  }, []);
  return <Box></Box>;
};

export default Home;
