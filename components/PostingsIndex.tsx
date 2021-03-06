import React from "react";
import { Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import { ReduxState } from "../redux/types";
import { fetchOne } from "../redux/util/postingsApiUtil";
import { PostingsIndexProps } from "../typescript/components";
import PostingItem from "./PostingItem";
import PostingModal from "./PostingModal";
import NotFound from "./Postings/NotFound";
import LoadingPosting from "./Loading/LoadingPosting";

const PostingsIndex: React.FC<PostingsIndexProps> = ({
  postings,
  setLocalPostings,
}) => {
  const dispatch = useDispatch();
  const modalPosting = useSelector((state: ReduxState) => state.entities.modal);
  const [fetchOffset, setFetchOffset] = React.useState<number>(3);

  const fetchData = () => {
    fetchOne(fetchOffset).then((res) => {
      setFetchOffset(fetchOffset + 1);
      const newPostings = postings.concat(res.data);
      setLocalPostings(newPostings);
      dispatch({ type: "RECEIVE_POSTINGS", newPostings });
    });
  };

  return (
    <Box maxH="xl" overflow="scroll" h="100%" id="scrollDiv">
      {postings.length <= 0 ? (
        <NotFound />
      ) : (
        <InfiniteScroll
          scrollableTarget="scrollDiv"
          dataLength={postings.length}
          next={fetchData}
          hasMore={true}
          loader={<LoadingPosting />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {postings.map((posting, i) => {
            return <PostingItem posting={posting} key={i} />;
          })}
        </InfiniteScroll>
      )}
      <PostingModal isOpen={Object.keys(modalPosting).length > 0} />
    </Box>
  );
};

export default PostingsIndex;
