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
import { RECEIVE_POSTINGS } from "../redux/actions/postingActions";

const PostingsIndex: React.FC<PostingsIndexProps> = ({
  filteredList,
  setFilteredList,
}) => {
  const modalPosting = useSelector((state: ReduxState) => state.entities.modal);
  const dispatch = useDispatch();
  const [fetchOffset, setFetchOffset] = React.useState<number>(3);

  const fetchData = () => {
    fetchOne(fetchOffset).then((res) => {
      setFetchOffset(fetchOffset + 1);
      const postings = filteredList.concat(res.data);
      dispatch({ type: RECEIVE_POSTINGS, postings });
      setFilteredList(postings);
    });
  };

  return (
    <Box>
      {filteredList.length <= 0 ? (
        <NotFound />
      ) : (
        <InfiniteScroll
          dataLength={filteredList.length}
          next={fetchData}
          hasMore={true}
          loader={<LoadingPosting />}
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {filteredList.map((posting, i) => {
            return <PostingItem posting={posting} key={i} />;
          })}
        </InfiniteScroll>
      )}
      <PostingModal isOpen={Object.keys(modalPosting).length > 0} />
    </Box>
  );
};

export default PostingsIndex;
