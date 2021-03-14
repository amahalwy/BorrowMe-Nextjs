import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box } from "@chakra-ui/react";
import { connect } from "react-redux";
import { fetchPostings } from "../redux/actions/postingActions";

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

Home.getInitialProps = async ({ reduxStore }) => {
  const postings = await reduxStore.dispatch(fetchPostings());
  console.log(postings);
  // return { postings: postings };
};

export default connect((state) => state)(Home);
// return { postings: state.entities.postings, currentUser: state.session.user };
