import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { connect } from "react-redux";
import { CurrentUser } from "../../redux/types";

const ProfileInformation: React.FC<{ currentUser: CurrentUser }> = ({
  currentUser,
}) => {
  const __VALUES = [
    ["Name: ", "firstName", "lastName"],
    ["Email: ", "email"],
    ["Address: ", "address", "city", "state"],
  ];

  return (
    <Box m="6% 0">
      {__VALUES.map((array, i) => {
        return (
          <Box m="2% 0" key={i}>
            {array.map((value, j) => {
              return (
                <Text d="inline" key={j} fontSize={16}>
                  {value.includes(":")
                    ? `${value} `
                    : j < array.length - 1 && i != 0
                    ? `${currentUser[value]}, `
                    : `${currentUser[value]} `}
                </Text>
              );
            })}
          </Box>
        );
      })}
    </Box>
  );
};

const mSTP = (state) => ({
  currentUser: state.session.user,
});

export default connect(mSTP)(ProfileInformation);
