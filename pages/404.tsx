import React from "react";

export async function getStaticProps(context) {
  return {
    props: {},
    redirect: {
      destination: "/home",
      permanent: false,
    },
  };
}

const Custom404 = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
    </>
  );
};

export default Custom404;
