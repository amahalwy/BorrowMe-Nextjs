import React from "react";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import PostingItem from "./PostingItem";
import PostingModal from "./PostingModal";
import { Posting, PostingsIndexProps } from "../typescript/components";

const PostingsIndex: React.FC<PostingsIndexProps> = ({
  modalPosting,
  postings,
}) => {
  return (
    <Box m="0 auto" w="90%">
      {Object.values(postings).map((posting, i) => {
        return <PostingItem posting={posting} key={i} />;
      })}
      <PostingModal isOpen={Object.keys(modalPosting).length > 0} />
    </Box>
  );
};

const mSTP = (state) => ({
  modalPosting: state.entities.modal,
  postings: state.entities.postings,
});

export default connect(mSTP)(PostingsIndex);
