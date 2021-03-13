import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";

// export async function getServerSideProps() {
//   return {
//     props: {}, // Will be passed to the page component as props
//   };
// }

const Home = () => {
  const currentUser = useSelector((state) => state.session.user);
  console.log(currentUser);

  if (!currentUser) {
    return <LoadingComponent />;
  }

  return <Box>Index Page</Box>;
};

export default Home;
