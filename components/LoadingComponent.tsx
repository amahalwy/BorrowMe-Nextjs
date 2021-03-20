import { Box } from "@chakra-ui/layout";
import { Skeleton, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <Box w="100%" h="100vh" fontSize={100}>
      Loading...
    </Box>
  );
};

export default LoadingComponent;
