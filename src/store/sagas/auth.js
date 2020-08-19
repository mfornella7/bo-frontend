import { takeLatest } from 'redux-saga/effects';
import { SIGNIN, SIGNUP, UPDATE_PROFILE } from '../../helpers/constants';

import api from '../../api/api';

const signin = api({
    type: SIGNIN,
    method: "post",
    path: () => "/auth/login/",
    success: (res, action) => {
      localStorage.setItem("binaryOptions", JSON.stringify(res.data));
    },
});

const signup = api({
    type: SIGNUP,
    method: "post",
    path: () => "/auth/signup/",
    success: () => {
      localStorage.removeItem("binaryOptions");
    },
});

const updateProfile = api({
    type: UPDATE_PROFILE,
    method: "put",
    path: () => "/auth/update/",
    success: (res, action) => {
      localStorage.setItem("binaryOptions", JSON.stringify(res.data));
    },
});

export default function* rootSaga() {
    yield takeLatest(SIGNIN, signin);
    yield takeLatest(SIGNUP, signup);
    yield takeLatest(UPDATE_PROFILE, updateProfile);
}