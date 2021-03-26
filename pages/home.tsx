import React from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAsyncFn } from "react-use";
import { fetchInitial } from "../redux/util/postingsApiUtil";
import { Posting, ReduxState } from "../redux/types";
import { clearPostings } from "../redux/actions/postingActions";
import { HomeProps } from "../typescript/pages";
import PostingsIndex from "../components/PostingsIndex";
import SearchBar from "../components/SearchBar";
import LoadingInitial from "../components/Loading/LoadingInitial";

const Home: NextPage<HomeProps> = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [input, setInput] = React.useState<string>("");
  const [searchType, setSearchType] = React.useState<string>("Name");
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );
  const postings = useSelector((state: ReduxState) => state.entities.postings);
  const [filteredList, setFilteredList] = React.useState<Posting[]>(
    Object.values(postings)
  );
  const [localPostings, setLocalPostings] = React.useState<Posting[]>(
    Object.values(postings)
  );

  const handleChange = () => {
    // setFilteredList(postings);
    // setInput("");
    // setSearchType(searchType === "Name" ? "Tag" : "Name");
  };

  const handleFilterList = (input: string) => {
    // const filtered = Object.values(postings).filter((posting: Posting) => {
    //   return searchType === "Name"
    //     ? input === ""
    //       ? posting
    //       : posting.title.toLowerCase().includes(input.toLowerCase())
    //     : input === ""
    //     ? posting
    //     : posting.tags.some((tag) =>
    //         tag.toLowerCase().includes(input.toLowerCase())
    //       );
    // });
    // setInput(input);
    // setFilteredList(filtered);
  };

  const [state, fetch] = useAsyncFn(async () => {
    const postings = await fetchInitial();
    dispatch({ type: "RECEIVE_POSTINGS", postings });
    setFilteredList(Object.values(postings.data));
    return postings.data;
  }, []);

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/login");
    fetch();
    return () => {
      dispatch(clearPostings());
    };
  }, []);

  return (
    <Box>
      <Box w="90%" m="4% auto">
        <SearchBar
          input={input}
          searchType={searchType}
          setInput={handleFilterList}
          handleChange={handleChange}
        />
        {state.loading ? (
          <LoadingInitial />
        ) : (
          <PostingsIndex
            filteredList={filteredList}
            setFilteredList={setFilteredList}
          />
        )}
      </Box>
    </Box>
  );
};

export default Home;
