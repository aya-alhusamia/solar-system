//Components
import Item from "../../Component/SpaceStore/Item";
import instance from "./instance";
import * as actionTypes from "./types";

export const createItem = (newItem, users) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newItem) formData.append(key, newItem[key]);
      formData.append("users", JSON.stringify(users));
      const res = await instance.post("/items", formData);
      dispatch({
        type: actionTypes.CREATE_ITEM,
        payload: { newItem: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

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

//create item
// export const createItem = ()
// async (req, res, next) => {
//   try {
//     if (req.shop.userId === req.user.id) {
//       if (req.file) {
//         req.body.image = `http://${req.get("host")}/${req.file.path}`;
//       }
//       req.body.userId = req.user.id;
//       const newItem = await Item.create(req.body);
//       res.status(201).json(newItem);
//     } else {
//       next({
//         status: 401,
//         message: "unautharized",
//       });
//     }
//   } catch (error) {
//     next(error);
//   }
// };

// export const addItemToCart = (newItem) => ({
//   type: actionTypes.ADD_ITEM,
//   payload: newItem,
// });
