import axios from "axios";

export const fetchRequest = (requestId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/requests/${requestId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/requests/${requestId}
    `
  );
};

export const fetchRequestorRequests = (userId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${userId}/requests/requestor`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/requests/requestor`
  );
};

export const fetchOwnerRequests = (userId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${userId}/requests/receiver`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/requests/receiver`
  );
};

export const createRequest = (request) => {
  return axios.post(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/requests`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/requests`,
    request
  );
};

export const deleteRequest = (requestId) => {
  return axios.delete(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/requests/${requestId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/requests/${requestId}`
  );
};
