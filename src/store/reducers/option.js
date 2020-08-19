import { createAction, handleActions } from "redux-actions";

const initialState = {
    chartType: 2,
    timePeriod: 3,
    chartSelection: 0,
};

export const updateChartType = createAction("UPDATE_CHART_TYPE");
export const updateTimePeriod = createAction("UPDATE_TIME_PERIOD");
export const updateChartSelection = createAction("UPDATE_CHART_SELECTION");

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
    "UPDATE_CHART_SELECTION": (state, { payload } ) => ({
      ...state,
      chartSelection: payload.chartSelection
    }),
  },
  initialState
);
