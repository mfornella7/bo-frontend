import { createAction, handleActions }  from 'redux-actions';
import { Success, Fail }                from '../../api/status';

import {
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  UPDATE_PROFILE,
} from '../../helpers/constants';

export const signin = createAction(SIGNIN);
export const signup = createAction(SIGNUP);
export const updateProfile = createAction(UPDATE_PROFILE);
export const signout = createAction(SIGNOUT, () => {
  localStorage.removeItem("binaryOptions");
  window.location.href = "/auth";
});

const getInitialState = () => {
  let authInfo = JSON.parse(
    localStorage.getItem("binaryOptions") || null
  );
  return authInfo
    ? {
        token: authInfo.token,
        currentUser: authInfo.info,
        status: "",
        error: null,
      }
    : {
        token: null,
        currentUser: null,
        status: "",
        error: null,
      };
};
// Reducer

export default handleActions(
  {
    [Success(SIGNIN)]: (state, { payload }) => ({
      ...state,
      token: payload.token,
      status: "SUCCESS",
      currentUser: payload.info,
    }),
    [Fail(SIGNIN)]: (state, { payload }) => ({
      ...state,
      token: null,
      status: "FAIL",
      currentUser: null,
      error: payload,
    }),
    [Success(SIGNUP)]: (state, { payload }) => ({
      ...state,
      status: "SUCCESS",
      error: null,
    }),
    [Fail(SIGNUP)]: (state, { payload }) => ({
      ...state,
      token: null,
      status: "FAIL",
      currentUser: null,
      error: payload,
    }),
    [Success(UPDATE_PROFILE)]: (state, { payload }) => ({
      ...state,
      token: payload.token,
      status: "SUCCESS",
      currentUser: payload.info,
    }),
    [Fail(UPDATE_PROFILE)]: (state, { payload }) => ({
      ...state,
      status: "FAIL",
      error: payload,
    }),
    [SIGNOUT]: (state, { payload }) => ({
      ...state,
      token: null,
      status: SIGNOUT,
      currentUser: null,
      error: null,
    }),
  },
  getInitialState()
);

