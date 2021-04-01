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
  const isAuthenticated = useSelector(
    (state: ReduxState) => state.session.isAuthenticated
  );
  const postings = useSelector((state: ReduxState) => state.entities.postings);
  const [localPostings, setLocalPostings] = React.useState<Posting[]>(
    Object.values(postings)
  );

  const [state, getInitial] = useAsyncFn(async () => {
    const postings = await fetchInitial();
    dispatch({ type: "RECEIVE_POSTINGS", postings: postings.data });
    setLocalPostings(Object.values(postings.data));
    return postings.data;
  }, []);

  React.useEffect(() => {
    if (!isAuthenticated) router.push("/login");
    getInitial();
    return () => {
      dispatch(clearPostings());
    };
  }, []);

  return (
    <Box>
      <Box w="90%" m="4% auto">
        <SearchBar
          setLocalPostings={setLocalPostings}
          getInitial={getInitial}
        />
        {state.loading ? (
          <LoadingInitial />
        ) : (
          <PostingsIndex postings={localPostings} />
        )}
      </Box>
    </Box>
  );
};

export default Home;
