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
import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <Box>
      <NavBar />
      This is the login page!
      <Button bg="brand.200">Open Modal</Button>
    </Box>
  );
}
