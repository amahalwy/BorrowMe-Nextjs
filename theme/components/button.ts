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
    search: {
      mr: "2%",
      bg: "brand.300",
      color: "white",
      _hover: {
        bg: "brand.301",
      },
    },
    "non-relative": {
      pos: "block",
      bg: "gray.100",
      lineHeight: "1.2",
      borderRadius: "md",
      fontWeight: "semibold",
      _focus: {
        boxShadow: "outline",
      },
      _disabled: {
        opacity: 0.4,
        cursor: "not-allowed",
        boxShadow: "none",
      },
      _hover: {
        _disabled: {
          bg: "initial",
        },
      },
    },
  },
};

export default Button;
