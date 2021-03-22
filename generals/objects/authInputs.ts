import { Field } from "../../typescript/components";

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
    width: "100%",
  },
};

const state: Field = {
  id: "state",
  placeholder: "State",
  inputStyles: {
    width: "100%",
    margin: "0 4%",
  },
};

const zipCode: Field = {
  id: "zipCode",
  placeholder: "Zip",
  inputStyles: {
    width: "100%",
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

const firstNameProfile: Field = {
  id: "firstName",
  placeholder: "First Name",
  inputStyles: {
    paddingRight: "3%",
  },
};

const lastNameProfile: Field = {
  id: "lastName",
  placeholder: "Last Name",
  inputStyles: {
    marginLeft: "3%",
  },
};

export const signupInputs = [
  [firstName],
  [lastName],
  [address],
  [city, state, zipCode],
  [email],
  [password],
  [confirmPassword],
];

export const loginInputs = [email, password];

export const editProfileInputs = [
  [firstNameProfile, lastNameProfile],
  [email],
  [address],
  [city, state, zipCode],
];
