import { Box, Button, Heading, Image, Spinner, Text } from "@chakra-ui/react";
import React from "react";
import LazyLoadImage from "./LazyLoadImage";
import { connect, useDispatch } from "react-redux";
import { clickPosting } from "../redux/actions/postingActions";
import { PostingItemProps } from "../typescript/components";
import { Img } from "react-image";
import LoadingComponent from "./Loading/LoadingComponent";

const PostingItem: React.FC<PostingItemProps> = ({ posting }) => {
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log("yepp");
  }, []);

  return (
    <Box
      mb="4%"
      p={3}
      shadow="md"
      borderWidth="1px"
      flex="1"
      borderRadius="md"
      bg="white"
    >
      <Box>
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
          <Img src={posting.image} loader={<LoadingComponent />} />
        </Box>
        <Button
          onClick={() => dispatch(clickPosting(posting._id))}
          variant="non-relative"
        >
          Open Calendar
        </Button>
      </Box>
    </Box>
  );
};

export default PostingItem;
