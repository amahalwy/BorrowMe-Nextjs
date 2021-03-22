import axios from "axios";

export const fetchUser = (userId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}`
  );
};

export const updateUser = (userId, formData) => {
  return axios.put(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}`,
    formData,
    {
      headers: {
        "Content-Type": `multipart/form-data`,
      },
    }
  );
};
export const fetchCurrentUser = (token) => {
  const newToken = token.split("%20").join(" ");
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/current`,
    {
      headers: {
        Authorization: newToken,
      },
    }
  );
};
