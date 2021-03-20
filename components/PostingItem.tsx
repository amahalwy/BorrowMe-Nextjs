import {
  Box,
  Button,
  Heading,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import React from "react";
import LazyLoadImage from "./LazyLoadImage";
import { useDispatch } from "react-redux";
import { clearModal, clickPosting } from "../redux/actions/postingActions";
import { Posting } from "../typescript/components";

const PostingItem: React.FC<{ posting: Posting }> = ({ posting }) => {
  const dispatch = useDispatch();
  return (
    <Box
      m="4% 0"
      p={3}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
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
      <Button onClick={() => dispatch(clickPosting(posting._id))}>
        Open Calendar
      </Button>
    </Box>
  );
};

export default PostingItem;
