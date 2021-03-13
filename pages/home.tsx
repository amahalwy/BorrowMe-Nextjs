import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { useRouter } from "next/router";
import LoadingComponent from "../components/LoadingComponent";

// export async function getServerSideProps() {
//   return {
//     props: {}, // Will be passed to the page component as props
//   };
// }

const Home = () => {
  const router = useRouter();
  const currentUser = useSelector((state) => state.session.user);
  console.log(currentUser);

  // if (Object.keys(currentUser).length === 0) {
  // router.push("/login");
  // return <LoadingComponent />;
  // }

  return <Box>Index Page</Box>;
};

export default Home;
