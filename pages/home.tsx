import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { NextPage } from "next";
// import { wrapper, State } from "../redux/store";
import { fetchPostings } from "../redux/util/postings_api_util";
import { RECEIVE_POSTINGS } from "../redux/actions/postingActions";

// export const getStaticProps = wrapper.getStaticProps(({ store, preview }) => {
//   console.log(store);
//   console.log("1. Page.getStaticProps uses the store to dispatch things");
//   store.dispatch({ type: "TICK", payload: "was set in other page" });
// });

export const getServerSideProps = async ({ store, req, res, ...etc }) => {
  const postings = await fetchPostings();

  store.dispatch({ type: RECEIVE_POSTINGS, postings });

  return { props: { hello: "yes" } };
};

const Home = (props) => {
  console.log(props);
  const postings = props.postings;
  const dispatch = useDispatch();

  return <Box>index page</Box>;
};

const mDTP = {
  fetchPostings: fetchPostings,
};

export default connect((state) => state, mDTP)(Home);
