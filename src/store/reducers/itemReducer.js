import * as actionTypes from "../action/types";

const initialState = {
  items: [],
  loading: true,
};
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
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
