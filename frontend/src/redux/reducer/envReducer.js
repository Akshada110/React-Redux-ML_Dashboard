import { GETDATA_ENV_SUCCESS, GETDATA_ENV_FAILED } from "../actionTypes";
const initialState = {
  environment: [],
  low: [],
  medium: [],
  high: [],
  serviceFail: false,
  childRender: false,
};

export const envReducer = (state = initialState, action) => {
  console.log("reducer..$$$", action.payload);

  console.log("in env reducer...!!");
  switch (action.type) {
    case GETDATA_ENV_SUCCESS:
      console.log("GETDATA success...!!");
      return {
        ...state,
        environment: action.payload.map((ele) => ele.environmentname),
        low: action.payload.map((ele) => ele.lowRisk),
        medium: action.payload.map((ele) => ele.mediumRisk),
        high: action.payload.map((ele) => ele.highRisk),
        childRender: true,
      };
    case GETDATA_ENV_FAILED:
      console.log("GETDATA FAIL...!!");
      return {
        ...state,
        serviceFail: true,
      };
    default:
      return state;
  }
};
