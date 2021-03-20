import React from "react";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { NextPage } from "next";
import { fetchPostings } from "../redux/util/postingsApiUtil";
import { RECEIVE_POSTINGS } from "../redux/actions/postingActions";
import { useRouter } from "next/router";
import { NextPageContext } from "next";
import PostingsIndex from "../components/PostingsIndex";
import SearchBar from "../components/SearchBar";
import { HomeProps } from "../typescript/pages";

const Home: NextPage<HomeProps> = ({ isAuthenticated }) => {
  const router = useRouter();
  if (!isAuthenticated) router.push("/login");
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

Home.getInitialProps = async ({ store, req, res }: NextPageContext) => {
  if (req && !req.headers.cookie) {
    res.writeHead(307, { Location: "/login" });
    res.end();
    return {};
  }

  const request = await fetchPostings();
  const postings = await request.data;
  store.dispatch({ type: RECEIVE_POSTINGS, postings });
  return {
    isAuthenticated: false,
  };
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user,
});

export default connect(mSTP)(Home);
