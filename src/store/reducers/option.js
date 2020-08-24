import { createAction, handleActions } from "redux-actions";
import { Success }                from '../../api/status';

const initialState = {
    chartType: 2,
    timePeriod: 3,
    chartSelection: 0,
    balance: 999,
};

export const updateChartType = createAction("UPDATE_CHART_TYPE");
export const updateTimePeriod = createAction("UPDATE_TIME_PERIOD");
export const updateChartSelection = createAction("UPDATE_CHART_SELECTION");
export const placeBet = createAction("PLACE_BET");


export default handleActions(
  {
    "UPDATE_CHART_TYPE": (state, { payload } ) => ({
      ...state,
      chartType: payload.chartType
    }),
    "UPDATE_TIME_PERIOD": (state, { payload } ) => ({
      ...state,
      timePeriod: payload.timePeriod
    }),
    [Success("PLACE_BET")]: (state, { payload } ) => ({
      ...state,
      balance: payload.balance
    }),
  },
  initialState
);
