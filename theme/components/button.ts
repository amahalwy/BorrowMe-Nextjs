const Button = {
  variants: {
    "auth-login": {
      bg: "brand.300",
      color: "white",
      w: "100%",
      mb: "10px",
      borderRadius: "25px",
      fontSize: "1.3em",
      loadingText: "Logging in",
      _hover: {
        bg: "brand.301",
        _disabled: {
          bg: "brand.302",
        },
      },
    },
    "auth-signup": {
      bg: "brand.300",
      color: "white",
      w: "100%",
      mb: "10px",
      borderRadius: "25px",
      fontSize: "1.3em",
      loadingText: "Signing up",
      _hover: {
        bg: "brand.301",
        _disabled: {
          bg: "brand.302",
        },
      },
    },
    "edit-profile": {
      bg: "brand.300",
      color: "white",
      w: "100%",
      mb: "10px",
      borderRadius: "25px",
      fontSize: "1.3em",
      _hover: {
        bg: "brand.301",
        _disabled: {
          bg: "brand.302",
        },
      },
    },
  },
};

export default Button;
