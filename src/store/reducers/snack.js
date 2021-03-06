import { createAction, handleActions } from "redux-actions";
import { HIDE_SNACK, SHOW_SNACK } from "../../helpers/constants";

const initialState = {
  message: "",
  show: false,
  status: "error",
  duration: 2000,
};

export const hideSnack = createAction(HIDE_SNACK);
export const showSnack = createAction(SHOW_SNACK);

export default handleActions(
  {
    [HIDE_SNACK]: (state) => ({
      ...state,
      show: false,
      message: "",
    }),

    [SHOW_SNACK]: (state, { payload } = { duration: 2000 }) => ({
      ...state,
      ...payload,
      show: true,
    }),
  },
  initialState
);
