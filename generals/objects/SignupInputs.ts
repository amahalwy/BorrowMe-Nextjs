import { Field } from "../../typescript/interfaces";

const firstName: Field = {
  id: "firstName",
  placeholder: "First Name",
  inputStyles: {
    margin: "0",
  },
};

const lastName: Field = {
  id: "lastName",
  placeholder: "Last Name",
  inputStyles: {
    margin: "0",
  },
};

const address: Field = {
  id: "address",
  placeholder: "Address",
  inputStyles: {
    display: "block",
  },
};

const city: Field = {
  id: "city",
  placeholder: "City",
  inputStyles: {
    width: "95%",
    marginRight: "5%",
  },
};

const zipCode: Field = {
  id: "zipCode",
  placeholder: "Zip Code",
  inputStyles: {
    width: "94%",
    margin: "0 3%",
  },
};

const state: Field = {
  id: "state",
  placeholder: "State",
  inputStyles: {
    width: "95%",
    marginLeft: "5%",
  },
};

const email: Field = {
  id: "email",
  placeholder: "Email",
  inputStyles: {
    display: "block",
  },
};

const password: Field = {
  id: "password",
  placeholder: "Password",
  type: "password",
  inputStyles: {
    display: "block",
  },
};

const confirmPassword: Field = {
  id: "confirmPassword",
  placeholder: "Confirm Password",
  type: "password",
  inputStyles: {
    display: "block",
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
