import axios from "axios";

export const fetchPostings = () => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/api/postings/`
  );
};

export const fetchPosting = (postingId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/api/postings/${postingId}`
  );
};

export const fetchUserPostings = (ownerId) => {
  return axios.get(`/api/users/${ownerId}/postings`);
};

export const createPosting = (posting) => {
  return axios.post("/api/postings", posting);
};

export const updatePosting = (postingId, data) => {
  return axios.patch(`/api/postings/${postingId}`, data);
};
