import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import LazyLoadImage from "./LazyLoadImage";
import { connect } from "react-redux";
import { clickPosting } from "../redux/actions/postingActions";
import { PostingItemProps } from "../typescript/components";

const PostingItem: React.FC<PostingItemProps> = ({ posting, clickPosting }) => {
  return (
    <Box
      m="4% 0"
      p={3}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      bg="white"
    >
      <Box mb="2%">
        <Box mb="2%">
          <Heading>{posting.title}</Heading>
        </Box>

        <Box>
          <Text>
            Owner's note: <i>{posting.description}</i>
          </Text>
          <Text>Price: ${posting.price}/day</Text>
        </Box>
      </Box>

      <Box maxH="400px" overflow="scroll" m="10px 0">
        <LazyLoadImage src={posting.image} />
      </Box>
      <Button onClick={() => clickPosting(posting._id)}>Open Calendar</Button>
    </Box>
  );
};

const mDTP = {
  clickPosting: clickPosting,
};

export default connect(null, mDTP)(PostingItem);
