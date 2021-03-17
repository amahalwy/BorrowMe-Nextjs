import { Box } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const Custom404 = () => {
  const router = useRouter();

  React.useEffect(() => {
    router.replace("/login");
  });

  return <Box>404 - Page Not Found</Box>;
};

export default Custom404;
