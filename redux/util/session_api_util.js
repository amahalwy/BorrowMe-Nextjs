import axios from "axios";

// We've been using this method in previos steps
export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const signup = (userData) => {
  return axios.post("http://localhost:5000/api/users/signup", userData);
};

export const login = (userData) => {
  return axios.post("http://localhost:5000/api/users/login", userData);
};

export const logout = (userId) => {
  return axios.delete(`http://localhost:5000/api/users/${userId}`);
};
