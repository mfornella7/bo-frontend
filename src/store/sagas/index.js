import { all } from 'redux-saga/effects';

import auth from './auth';
import option from './option';

export default function* rootSaga () {
    yield all([
      auth(),
      option()
    ]);
}