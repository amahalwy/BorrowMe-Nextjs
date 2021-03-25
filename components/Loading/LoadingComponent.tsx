import { Flex, Spinner, Box, Heading } from "@chakra-ui/react";
import React from "react";

const LoadingComponent: React.FC = () => {
  return (
    <Flex alignItems="center" w="100%" h="80%" justifyContent="center" m="4% 0">
      <Spinner size="lg" color="#a2d3c2" />
    </Flex>
  );
};

export default LoadingComponent;
