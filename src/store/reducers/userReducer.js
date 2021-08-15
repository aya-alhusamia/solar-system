import * as actionTypes from "../actions/types";

const initialState = {
    user: [],
  };

  const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.UPDATE_USER:
        return {
          ...state,
         user: action.payload
        };
      default:
        return state;
    }
  };
  export default userReducer;