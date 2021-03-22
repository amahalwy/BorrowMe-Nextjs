import axios from "axios";

export const fetchPostings = () => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/`
  );
};

export const fetchPosting = (postingId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/${postingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/${postingId}`
  );
};

export const fetchUserPostings = (ownerId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${ownerId}/postings`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${ownerId}/postings`
  );
};

export const createPosting = (posting) => {
  return axios.post(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings`,
    posting
  );
};

export const updatePosting = (postingId, data) => {
  return axios.patch(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/${postingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/${postingId}`,
    data
  );
};
