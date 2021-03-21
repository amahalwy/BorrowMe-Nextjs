import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { connect } from "react-redux";
import PostingItem from "./PostingItem";
import PostingModal from "./PostingModal";
import { PostingsIndexProps } from "../typescript/components";

const NotFoundPostings: React.FC = () => {
  return (
    <Box
      d="flex"
      justifyContent="center"
      p={3}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      bg="white"
    >
      <Heading>No Postings Found</Heading>
    </Box>
  );
};

const PostingsIndex: React.FC<PostingsIndexProps> = ({
  modalPosting,
  filteredList,
}) => {
  return (
    <Box m="0 auto" w="90%">
      {filteredList.length <= 0 ? <NotFoundPostings /> : null}
      {Object.values(filteredList).map((posting, i) => {
        return <PostingItem posting={posting} key={i} />;
      })}
      <PostingModal isOpen={Object.keys(modalPosting).length > 0} />
    </Box>
  );
};

const mSTP = (state) => ({
  modalPosting: state.entities.modal,
});

export default connect(mSTP)(PostingsIndex);
