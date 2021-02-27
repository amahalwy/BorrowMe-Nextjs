import React from "react";
import {
  Box,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

// interface PersonProps {
//   name: string;
//   age: number;
//   height: number;
// }

const Person = ({ name }) => {
  return (
    <Box>
      <p>Name: </p>
      {/* <p>Age: {age}</p>
      <p>Height: {height ? height : "Not given"}</p> */}
    </Box>
  );
};

export default function Login() {
  return (
    <Box>
      This is the login page!
      <Button bg="brand.200">Open Modal</Button>
      <Person name={user} />
    </Box>
  );
}
