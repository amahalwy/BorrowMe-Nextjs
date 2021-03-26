import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const LoadingInitial = () => {
  const iterate = [1, 2, 3];
  return (
    <>
      {iterate.map(() => {
        return (
          <Box
            padding="6"
            m="4% 0"
            p={3}
            shadow="md"
            borderWidth="1px"
            flex="1"
            borderRadius="md"
            bg="white"
          >
            <SkeletonCircle size="10" />
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        );
      })}
    </>
  );
};

export default LoadingInitial;
