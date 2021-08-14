//Components
import instance from "./instance";
import * as actionTypes from "./types";

export const fetchSpaceImg = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/images");
      dispatch({
        type: actionTypes.FETCH_SPACEIMG,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
