import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import React from "react";
import { Form } from "react-final-form";

const SearchType = () => {
  return null;
};

const SearchBar = () => {
  const [searchType, setSearchType] = React.useState("Name");
  const handleClick = () =>
    setSearchType(searchType === "Name" ? "Tag" : "Name");

  return (
    <InputGroup size="md">
      <Input pr="4.5rem" type="text" placeholder={`Filter by ${searchType}`} />
      <SearchType />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleClick}>
          {searchType === "Name" ? "Tag" : "Name"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
