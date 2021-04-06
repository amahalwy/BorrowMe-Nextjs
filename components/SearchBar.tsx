import React from "react";
import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  FormControl,
  Select,
  Box,
} from "@chakra-ui/react";
import { SearchBarProps } from "../typescript/components";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAsyncFn } from "react-use";
import { useDispatch } from "react-redux";
import { searchPosting } from "../redux/util/postingsApiUtil";
import { Field, Form } from "react-final-form";
import Cal from "../lib/cal";

const SearchBar: React.FC<SearchBarProps> = ({
  setLocalPostings,
  getInitial,
}) => {
  const dispatch = useDispatch();
  const [state, fetch] = useAsyncFn(async (query) => {
    const response = await searchPosting(query);
    return response;
  }, []);

  const onSubmit = (values) => {
    search(values);
  };

  const search = async (values: { query: string; search: string }) => {
    const newQuery = `${values.query.toLowerCase()}=${values.search}`;
    const req = await fetch(newQuery);
    const postings = req.data;
    dispatch({ type: "RECEIVE_SEARCH", postings });
    setLocalPostings(postings);
  };

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ query: "Title" }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <FormControl>
            <Field
              name="search"
              render={({ input }) => (
                <InputGroup>
                  <Input
                    w="100%"
                    shadow="md"
                    bg="white"
                    type="text"
                    id="search"
                    size="lg"
                    placeholder="Search by"
                    {...input}
                  />
                  <Field
                    name="query"
                    render={({ input }) => (
                      <InputRightElement w="35%" top="9%" right="1%">
                        <Select
                          icon={<ChevronDownIcon />}
                          bg="gray.100"
                          {...input}
                        >
                          <option value="Title">Title</option>
                          <option value="Tag">Tag</option>
                          <option value="Availability">Availability</option>
                        </Select>
                      </InputRightElement>
                    )}
                  />
                </InputGroup>
              )}
            />
            {values.query === "Availability" ? (
              <InputGroup size="lg" mt="2%" zIndex={2}>
                <Cal />
              </InputGroup>
            ) : null}
            {pristine ? null : (
              <Box mt="4%" d="flex">
                <Button
                  type="submit"
                  variant="search"
                  isLoading={state.loading}
                >
                  Search
                </Button>
                <Button
                  bg="brand.400"
                  onClick={() => {
                    getInitial();
                    form.reset();
                  }}
                  disabled={submitting || pristine}
                >
                  Reset
                </Button>
              </Box>
            )}
          </FormControl>
        </form>
      )}
    />
  );
};

export default SearchBar;
