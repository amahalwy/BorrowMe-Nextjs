import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box padding={6} boxShadow="lg" bg="white" mb={4}>
      <SkeletonCircle size="10" />
      <SkeletonText mt={4} noOfLines={4} spacing="4" />
    </Box>
  );
};

export default Loading;
