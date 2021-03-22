import * as APIUtil from "../util/userApiUtil";
import { receiveCurrentUser } from "./sessionActions";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const UPDATE_USER = "UPDATE_USER";
export const CURRENT_USER = "CURRENT_USER";
export const CLEAR_USERS = "CLEAR_USERS";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const update = (user) => ({
  type: UPDATE_USER,
  user,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

const clear = () => ({
  type: CLEAR_USERS,
});

export const fetchUser = (userId) => (dispatch) => {
  return APIUtil.fetchUser(userId)
    .then((user) => {
      dispatch(receiveUser(user.data));
      return user.data;
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const updateUser = (userId, formData) => (dispatch) => {
  return APIUtil.updateUser(userId, formData)
    .then((user) => {
      dispatch(update(user.data));
      dispatch(receiveCurrentUser(user.data));
      return user.data;
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const clearUsers = () => (dispatch) => {
  dispatch(clear());
};
