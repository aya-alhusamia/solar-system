//Components
import instance from "./instance";
import * as actionTypes from "./types";

export const fetchVideo = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/videos");
      dispatch({
        type: actionTypes.FETCH_VIDEO,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
