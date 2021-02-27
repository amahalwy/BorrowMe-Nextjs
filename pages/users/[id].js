import React from "react";

// Get the user from the server through the function called
// getServerSideProps

export async function getServerSideProps(req) {
  // Fetch data from external API
  // const res = await fetch(
  //   `https://borrow-me-app.herokuapp.com/api/users/${req.params.id}`
  // );
  // const data = await res.json();
  // return { props: { data } };
}

export default function UserPage({ props }) {
  console.log(props);
  return <div>This is a user page!!</div>;
}
