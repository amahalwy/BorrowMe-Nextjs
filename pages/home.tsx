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
import { fetchCurrentUser } from "../redux/util/userApiUtil";
import { fetchOwnerRequests } from "../redux/util/requestApiUtil";
import { OWNER_REQUESTS } from "../redux/actions/requestActions";

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

  // const cookie = req.headers.cookie.slice(15).split("%20").join(" ");

  //   const userRequest = await fetchCurrentUser(cookie);
  //   const currentUser = await userRequest.data;
  //   const currentUserReceivedRequests = await fetchOwnerRequests(
  //     currentUser.id
  //   );
  //   const ownerRequests = await currentUserReceivedRequests.data;

  //   store.dispatch({ type: OWNER_REQUESTS, ownerRequests });
  const postingsRequest = await fetchPostings();
  const postings: Posting[] = await postingsRequest.data;
  store.dispatch({ type: RECEIVE_POSTINGS, postings });
  return {};
};

const mSTP = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  currentUser: state.session.user,
  postings: state.entities.postings,
  // ownerRequests: state.entities.ownerRequests,
});

export default connect(mSTP)(Home);
