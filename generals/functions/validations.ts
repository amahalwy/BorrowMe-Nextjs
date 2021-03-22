import * as EmailValidator from "email-validator";
export const required = (value: string) => (value ? undefined : "Required");
export const requiredAndEmail = (value: string) =>
  EmailValidator.validate(value) ? undefined : "Invalid Email Address";
const requiredAndPassword = (value: string) =>
  value && value.length >= 6 ? undefined : "Password Too Short";
const requiredAndZipcode = (value: string) =>
  value && value.length === 5 ? undefined : "Incorrect Format (XXXXX)";

const requiredAndString = (value: string) => {
  if (!value) {
    return `Required`;
  } else {
    if (value.match("^[a-zA-Z ]+$")) {
      return undefined;
    } else {
      return "Unaccepted Characters";
    }
  }
};

export const returnValidation = (value: string) => {
  if (
    value === "firstName" ||
    value === "lastName" ||
    value === "city" ||
    value === "state"
  ) {
    return requiredAndString;
  } else if (value === "email") {
    return requiredAndEmail;
  } else if (value === "confirmPassword" || value === "password") {
    return requiredAndPassword;
  } else if (value === "zipCode") {
    return requiredAndZipcode;
  } else {
    return required;
  }
};
