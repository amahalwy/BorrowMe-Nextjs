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
  return axios.post("http://localhost:5000/api/users/signup", userData);
};

export const login = (userData) => {
  return axios.post("http://localhost:5000/api/users/login", userData);
};

export const getCurrent = (token) => {
  const fixedToken = token.slice(0, token.length).split("%20").join(" ");
  return axios.get(`http://localhost:5000/api/users/`, {
    headers: {
      Authorization: fixedToken,
    },
  });
};
