import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { fetchPostings } from "../redux/actions/postingActions";
import { connect } from "react-redux";
import { useRouter } from "next/router";

// export async function getServerSideProps(context) {
//   console.log(context);
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }

const Home = (props) => {
  const postings = props.postings;
  console.log(props);

  // const router = useRouter();

  const currentUser = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  return <Box>index page</Box>;
};

export default connect((state) => {
  return { postings: state.entities.postings, currentUser: state.session.user };
})(Home);
