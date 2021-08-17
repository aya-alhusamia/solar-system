//Components
import Item from "../../Component/SpaceStore/Item";
import instance from "./instance";
import * as actionTypes from "./types";

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/items");
      dispatch({
        type: actionTypes.FETCH_ITEM,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
