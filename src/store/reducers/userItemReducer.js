import * as actionTypes from "../action/types";

const initialState = {
  userItems: [],
  loading: true,
};
const itemReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_USERITEM:
      return {
        ...state,
        userItems: [...state.userItems, action.payload],
      };
    default:
      return state;
  }
};
export default itemReducer;
