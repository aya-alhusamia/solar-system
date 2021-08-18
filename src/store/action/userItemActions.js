import instance from "./instance";
import * as actionTypes from "./types";

export const createUserItem = (newItem) => {
  return async (dispatch) => {
    try {
      const res = await instance.post(`/myitems/${newItem.itemId}`, newItem);
      dispatch({
        type: actionTypes.CREATE_USERITEM,
        payload: { newItem: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const fetchUserItems = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/myitems");
      dispatch({
        type: actionTypes.FETCH_USERITEM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
