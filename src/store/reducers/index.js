import { combineReducers } from 'redux';

import auth from './auth.js';
import snack from './snack.js';
import option from './option.js';

export default combineReducers({
    auth,
    snack,
    option
});