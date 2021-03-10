const firstName = {
  id: "firstName",
  placeholder: "First Name",
  inputStyles: {
    margin: "0",
  },
};

const lastName = {
  id: "lastName",
  placeholder: "Last Name",
  inputStyles: {
    margin: "0",
  },
};

const address = {
  id: "address",
  placeholder: "Address",
  inputStyles: {
    display: "block",
  },
};

const city = {
  id: "city",
  placeholder: "City",
  inputStyles: {
    width: "95%",
    marginRight: "5%",
  },
};

const zipCode = {
  id: "zipCode",
  placeholder: "Zip Code",
  inputStyles: {
    width: "94%",
    margin: "0 3%",
  },
};

const state = {
  id: "state",
  placeholder: "State",
  inputStyles: {
    width: "95%",
    marginLeft: "5%",
  },
};

const email = {
  id: "email",
  placeholder: "Email",
  inputStyles: {
    display: "block",
  },
};

const password = {
  id: "password",
  placeholder: "Password",
  inputStyles: {
    cursor: "pointer",
    display: "block",
  },
};

const confirmPassword = {
  id: "confirmPassword",
  placeholder: "Confirm Password",
  type: "password",
  inputStyles: {
    cursor: "pointer",
  },
};

const SignupInputs = [
  [firstName],
  [lastName],
  [address],
  [city, zipCode, state],
  [email],
  [password],
  [confirmPassword],
];

export default SignupInputs;
