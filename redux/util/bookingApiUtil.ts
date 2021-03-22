import axios from "axios";

export const fetchBooking = (bookingId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/bookings/${bookingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings/${bookingId}`
  );
};

export const fetchOwnerBookings = (userId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${userId}/bookings/owner`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/bookings/owner`
  );
};

export const fetchRenterBookings = (userId) => {
  return axios.get(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/users/${userId}/bookings/renter`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/bookings/renter`
  );
};

export const createBooking = (booking) => {
  return axios.post(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/bookings`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings`,
    booking
  );
};

export const deleteBooking = (bookingId) => {
  return axios.delete(
    process.env.NODE_ENV === "production"
      ? `${process.env.NEXT_PUBLIC_DEPLOYED_HOST_SERVER}/bookings/${bookingId}`
      : `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings/${bookingId}`
  );
};
