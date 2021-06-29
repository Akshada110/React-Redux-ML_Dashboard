import { combineReducers } from "redux";
import { serviceReducer } from "./serviceReducer";
import { envReducer } from "./envReducer";
import { channelReducer } from "./channelReducer";

const rootReducer = combineReducers({
  service: serviceReducer,
  environment: envReducer,
  channel : channelReducer
});

export default rootReducer;
