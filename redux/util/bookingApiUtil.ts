import axios from "axios";

export const fetchBooking = (bookingId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings/${bookingId}`
  );
};

export const fetchOwnerBookings = (userId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/bookings/owner`
  );
};

export const fetchRenterBookings = (userId) => {
  return axios.get(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/users/${userId}/bookings/renter`
  );
};

export const createBooking = (booking) => {
  return axios.post(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings`,
    booking
  );
};

export const deleteBooking = (bookingId) => {
  return axios.delete(
    `${process.env.NEXT_PUBLIC_LOCAL_HOST_SERVER}/bookings/${bookingId}`
  );
};
