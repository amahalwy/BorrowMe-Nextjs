import React from "react";
import { Box, Button } from "@chakra-ui/react";
import {
  __LOGGED_OUT_BUTTONS,
  __LOGGED_IN_BUTTONS,
} from "../../generals/objects/navButtons";
import Link from "next/link";

const NavBarLinks = ({ isAuthenticated, router, logoutUser }) => {
  return (
    <Box d="flex" alignItems="center">
      {!isAuthenticated ? (
        <>
          {__LOGGED_OUT_BUTTONS.map((element, i) => {
            return i < __LOGGED_OUT_BUTTONS.length - 1 ? (
              <Box marginLeft="10" fontSize={25} color="white">
                <Link key={i} href={element.path}>
                  {element.text}
                </Link>
              </Box>
            ) : (
              <Button
                backgroundColor="#012a36"
                color="white"
                borderRadius="5px"
                padding="4"
                fontSize={25}
                _hover={{ bg: "#012a36" }}
                marginLeft="10"
                onClick={() => router.push(element.path)}
              >
                {element.text}
              </Button>
            );
          })}
        </>
      ) : (
        <>
          {__LOGGED_IN_BUTTONS.map((element, i) => {
            return (
              <Box
                marginLeft={{ lg: "5", xl: "10" }}
                fontSize={{ lg: "19", xl: "25" }}
                color="white"
              >
                <Link key={i} href={element.path}>
                  {element.text}
                </Link>
              </Box>
            );
          })}
          <Button
            bg="#012a36"
            color="white"
            borderRadius="5px"
            padding="4"
            fontSize={{ lg: "19", xl: "25" }}
            _hover={{ bg: "#012a36" }}
            marginLeft={{ lg: "10", xl: "30" }}
            onClick={logoutUser}
          >
            Logout
          </Button>
        </>
      )}
    </Box>
  );
};

export default NavBarLinks;
