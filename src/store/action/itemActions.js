//Components
import instance from "./instance";
import * as actionTypes from "./types";

export const updateItem = (updatedItem) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedItem) formData.append(key, updatedItem[key]);
      const res = await instance.put(`/items/${updatedItem.id}`, formData);
      dispatch({
        type: actionTypes.UPDATE_ITEM,
        payload: { updatedItem: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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
