//Action Types
import * as actionTypes from "../action/types";

const initialState = {
  user: null,
  
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.payload,
      };
     
    default:
      return state;
  }
};
export default reducer;
