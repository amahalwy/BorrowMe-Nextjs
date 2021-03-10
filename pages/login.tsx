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

export default function Login() {
  return (
    <Box>
      This is the login page!
      <Button bg="brand.200">Open Modal</Button>
    </Box>
  );
}
