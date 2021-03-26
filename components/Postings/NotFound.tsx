import React from "react";
import { Box, Heading } from "@chakra-ui/react";

const NotFound: React.FC = () => {
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

export default NotFound;
