import React from "react";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { useRouter } from "next/router";
import { NextPage, NextPageContext } from "next";
import { fetchPostings } from "../redux/util/postingsApiUtil";
import { RECEIVE_POSTINGS } from "../redux/actions/postingActions";
import PostingsIndex from "../components/PostingsIndex";
import SearchBar from "../components/SearchBar";
import { HomeProps } from "../typescript/pages";
import { Posting } from "../redux/types";

const Home: NextPage<HomeProps> = ({ isAuthenticated, postings }) => {
  const router = useRouter();
  const [filteredList, setFilteredList] = React.useState<Posting[]>(postings);
  const [input, setInput] = React.useState<string>("");
  const [searchType, setSearchType] = React.useState<string>("Name");

  const handleChange = () => {
    setFilteredList(postings);
    setInput("");
    setSearchType(searchType === "Name" ? "Tag" : "Name");
  };

  const handleFilterList = (input: string) => {
    const filtered = Object.values(postings).filter((posting: Posting) => {
      return searchType === "Name"
        ? input === ""
          ? posting
          : posting.title.toLowerCase().includes(input.toLowerCase())
        : input === ""
        ? posting
        : posting.tags.some((tag) =>
            tag.toLowerCase().includes(input.toLowerCase())
          );
    });
    setInput(input);
    setFilteredList(filtered);
  };

  if (!isAuthenticated) router.push("/login");
  return (
    <Box>
      <Box w="90%" m="4% auto">
        <SearchBar
          input={input}
          searchType={searchType}
          setInput={handleFilterList}
          handleChange={handleChange}
        />
      </Box>
      <PostingsIndex filteredList={filteredList} />
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
  const postings: Posting[] = await request.data;
  store.dispatch({ type: RECEIVE_POSTINGS, postings });
  return {
    isAuthenticated: false,
  };
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user,
  postings: state.entities.postings,
});

export default connect(mSTP)(Home);
