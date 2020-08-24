import { takeLatest } from 'redux-saga/effects';

import apiCall from '../../api/api';

const placeBet = apiCall({
    type: "PLACE_BET",
    method: "put",
    path: (payload) => `/users/bet/${payload.id}/`,
});

export default function* rootSaga() {
    yield takeLatest("PLACE_BET", placeBet);
}