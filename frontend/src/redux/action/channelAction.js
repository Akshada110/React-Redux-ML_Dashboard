import * as actionTypes from "../actionTypes";
import axios from "axios";

const url = "http://localhost:5000/getchanneldata";

// const url2 = "http://localhost:5000/getenvdata";

export const getChannelDataAction = () => (dispatch) => {
  console.log("get Actions##############");
  axios
    .get(url)
    .then((res) =>
      dispatch({
        type: actionTypes.GETDATA_CHANNEL_SUCCESS,
        payload: res.data,
      })
    )

    .catch((err) =>
      dispatch({ type: actionTypes.GETDATA_CHANNEL_FAILED, payload: err.error })
    );
};
