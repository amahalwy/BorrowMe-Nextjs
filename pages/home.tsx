import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Spinner } from "@chakra-ui/react";
import { useStore, connect } from "react-redux";
import { NextPage } from "next";
import { fetchPostings } from "../redux/util/postings_api_util";
import {
  RECEIVE_POSTINGS,
  clearPostings,
} from "../redux/actions/postingActions";

import { NextPageContext } from "next";
import PostingsIndex from "../components/PostingsIndex";
import SearchBar from "../components/SearchBar";
import { CLEAR_MODAL } from "../redux/actions/bookingActions";
import { CurrentUser } from "../typescript/interfaces";

interface HomeProps {
  postings: {};
  currentUser: CurrentUser;
  pathname: string;
  dispatch: (r) => void;
}

const Home: NextPage = () => {
  return (
    <Box>
      <Box w="90%" m="4% auto">
        <SearchBar />
      </Box>
      <PostingsIndex
      // filterList={filterList}
      // hideModal={hideModal}
      // showModal={showModal}
      />
    </Box>
  );
};

Home.getInitialProps = async ({ store }: NextPageContext) => {
  const request = await fetchPostings();
  const postings = await request.data;
  store.dispatch({ type: RECEIVE_POSTINGS, postings });
  return {};
};

const mSTP = (state) => ({
  currentUser: state.session.user,
});

export default connect(mSTP)(Home);
