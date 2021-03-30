import { Box, Image } from "@chakra-ui/react";
import React from "react";
import { NavBarLogoProps } from "../../typescript/components";

const NavBarLogo: React.FC<NavBarLogoProps> = ({ router }) => {
  return (
    <Box>
      <Box h="100%" d="flex" alignItems="center">
        <Box
          w={{ base: "48px", md: "60px" }}
          h={{ base: "48px", md: "58px" }}
          borderRadius="10px"
          _hover={{ bg: "rgba(0,0,0,0.4)", cursor: "pointer" }}
          onClick={() => router.push("/home")}
        >
          <Image
            w="100%"
            h="100%"
            src="https://borrowme-pro.s3.us-east-2.amazonaws.com/icons/bm-logo.png"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default NavBarLogo;
