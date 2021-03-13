import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();
  console.log(currentUser);

  React.useEffect(() => {
    // dispatch();
  }, []);

  return <Box>Index Page</Box>;
};

export default Home;
