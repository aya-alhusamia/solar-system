import * as actionTypes from "../action/types";

const initialState = {
  items: [],
  loading: true,
};
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ITEM:
      const { updatedItem } = action.payload;
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        ),
      };
    case actionTypes.FETCH_ITEM:
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default itemReducer;
