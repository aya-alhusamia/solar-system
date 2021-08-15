import instance from "./instance";
import * as actionTypes from "./types";

export const addItemToCart = (newItem) => ({
  type: actionTypes.ADD_ITEM,
  payload: newItem,
});

export const deleteItemFromCart = (itemId) => ({
  type: actionTypes.DELETE_ITEM,
  payload: itemId,
});


  dispatch({
    type: actionTypes.ADD_ITEM,
    payload: [],
  });

