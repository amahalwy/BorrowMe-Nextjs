import axios from "axios";
import { Posting } from "../types";

export const fetchPostings = () => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/`
  );
};

export const fetchInitial = () => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/initial`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/initial`
  );
};

export const fetchOne = (num: number) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/fetchOne/${num}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/fetchOne/${num}`
  );
};

export const fetchThree = (num: number) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/fetchThree/${num}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/fetchThree/${num}`
  );
};

export const fetchPosting = (postingId: string) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/${postingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/${postingId}`
  );
};

export const fetchUserPostings = (ownerId: string) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${ownerId}/postings`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${ownerId}/postings`
  );
};

export const createPosting = (posting: Posting) => {
  return axios.post(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings`,
    posting
  );
};

export const updatePosting = (postingId: string, data: any) => {
  return axios.patch(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/${postingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/${postingId}`,
    data
  );
};

export const searchPosting = (query: string) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/postings/search/?${query}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/postings/search/?${query}`
  );
};
