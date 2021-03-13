import { Box } from "@chakra-ui/layout";
import { Skeleton, Heading } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/spinner";
import React from "react";

const LoadingComponent = () => {
  return (
    <Box>
      <Spinner />
    </Box>
  );
};

export default LoadingComponent;
