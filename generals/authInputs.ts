const firstName = {
  id: "firstName",
  placeholder: "First Name",
  inputStyles: {
    display: "inline-block",
    color: "red",
    margin: "0",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};

const lastName = {
  id: "lastName",
  placeholder: "Last Name",
  inputStyles: {
    display: "inline-block",
    color: "red",
    margin: "0",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};

const address = {
  id: "address",
  placeholder: "Address",
  inputStyles: {
    display: "block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};

const city = {
  id: "city",
  placeholder: "City",
  inputStyles: {
    display: "inline-block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "2",
  },
};

const zipCode = {
  id: "zipCode",
  placeholder: "Zip Code",
  inputStyles: {
    display: "inline-block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "2",
  },
};

const state = {
  id: "state",
  placeholder: "State",
  inputStyles: {
    display: "inline-block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "2",
  },
};

const email = {
  id: "email",
  placeholder: "Email",
  inputStyles: {
    display: "block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};

const password = {
  id: "password",
  placeholder: "Password",
  inputStyles: {
    cursor: "pointer",
    display: "block",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};

const confirmPassword = {
  id: "confirmPassword",
  placeholder: "Confirm Password",
  type: "password",
  inputStyles: {
    cursor: "pointer",
    color: "red",
  },
  gridItemStyles: {
    colSpan: "6",
  },
};


export const signInInputs = [
  email,
  password,
];

export const signupInputs = [
  firstName,
  lastName,
  address,
  city,
  zipCode,
  state,
  email,
  password,
  confirmPassword,
];