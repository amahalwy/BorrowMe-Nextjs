import React from "react";
import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchBarProps } from "../typescript/components";

const SearchBar: React.FC<SearchBarProps> = ({
  input,
  searchType,
  setInput,
  handleChange,
}) => {
  return (
    <InputGroup size="md">
      <Input
        shadow="md"
        bg="white"
        pr="4.5rem"
        type="text"
        placeholder={`Filter by ${searchType}`}
        value={input}
        onChange={(e) => setInput(e.currentTarget.value)}
      />
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" onClick={handleChange}>
          {searchType === "Name" ? "Tag" : "Name"}
        </Button>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
