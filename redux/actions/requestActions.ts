import * as APIUtil from "../util/requestApiUtil";

export const OWNER_REQUESTS = "OWNER_REQUESTS";
export const REQUESTOR_REQUESTS = "REQUESTOR_REQUESTS";
export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";
export const RECEIVE_REQUEST_ERRORS = "RECEIVE_REQUEST_ERRORS";
export const CLEAR_REQUESTS = "CLEAR_REQUESTS";
export const CLICK_REQUEST = "CLICK_REQUEST";
export const CLEAR_MODAL = "CLEAR_MODAL";
export const SUCCESS = "SUCCESS";

const receiveOwnerRequests = (requests) => ({
  type: OWNER_REQUESTS,
  requests,
});

const receiveRequestorRequests = (requests) => ({
  type: REQUESTOR_REQUESTS,
  requests,
});

const receiveRequest = (request) => ({
  type: RECEIVE_REQUEST,
  request,
});

const removeRequest = (requestId) => ({
  type: REMOVE_REQUEST,
  requestId,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_REQUEST_ERRORS,
  errors,
});

const clear = () => ({
  type: CLEAR_REQUESTS,
});

const clearMod = () => ({
  type: CLEAR_MODAL,
});

const click = (request) => ({
  type: CLICK_REQUEST,
  request,
});

const successRequest = (status) => ({
  type: SUCCESS,
  status,
});

export const fetchRequest = (requestId) => (dispatch) => {
  APIUtil.fetchRequest(requestId)
    .then((request) => dispatch(receiveRequest(request)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const fetchOwnerRequests = (userId) => (dispatch) => {
  APIUtil.fetchOwnerRequests(userId)
    .then((requests) => dispatch(receiveOwnerRequests(requests)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const fetchRequestorRequests = (userId) => (dispatch) => {
  APIUtil.fetchRequestorRequests(userId)
    .then((requests) => dispatch(receiveRequestorRequests(requests)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const createRequest = (request) => (dispatch) => {
  APIUtil.createRequest(request)
    .then((request) => {
      dispatch(receiveRequest(request));
      dispatch(successRequest(request.status));
    })
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const deleteRequest = (requestId) => (dispatch) => {
  APIUtil.deleteRequest(requestId)
    .then(() => dispatch(removeRequest(requestId)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const clearRequests = () => (dispatch) => {
  dispatch(clear());
};

export const clickRequest = (requestId) => (dispatch) => {
  APIUtil.fetchRequest(requestId)
    .then((request) => dispatch(click(request)))
    .catch((err) => dispatch(receiveErrors(err.response.data)));
};

export const clearModal = () => (dispatch) => {
  dispatch(clearMod());
};
