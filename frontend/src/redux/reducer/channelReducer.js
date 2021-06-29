import {
  GETDATA_CHANNEL_SUCCESS,
  GETDATA_CHANNEL_FAILED,
} from "../actionTypes";
const initialState = {
  channels: [],
  low: [],
  medium: [],
  high: [],
  serviceFail: false,
  childRender: false,
};

export const channelReducer = (state = initialState, action) => {
  console.log("channel reducer..$$$", action.payload);

  console.log("in channel reducer...!!");
  switch (action.type) {
    case GETDATA_CHANNEL_SUCCESS:
      console.log("GETDATA CHANNEL success...!!");
      return {
        ...state,
        channels: action.payload.map((ele) => ele.channelName),
        low: action.payload.map((ele) => ele.lowRisk),
        medium: action.payload.map((ele) => ele.mediumRisk),
        high: action.payload.map((ele) => ele.highRisk),
        childRender: true,
      };
    case GETDATA_CHANNEL_FAILED:
      console.log("GETDATA CHANNEL FAIL...!!");
      return {
        ...state,
        serviceFail: true,
      };
    default:
      return state;
  }
};
