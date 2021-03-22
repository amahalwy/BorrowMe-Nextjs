import axios from "axios";
import cookieCutter from "cookie-cutter";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    cookieCutter.set("borrowMeBearer", token);
  } else {
    delete axios.defaults.headers.common["Authorization"];
    cookieCutter.set("borrowMeBearer", "", { expires: new Date(0) });
  }
};

export const signup = (userData) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/signup`,
    userData
  );
};

export const login = (userData) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/login`,
    userData
  );
};
