import * as actionTypes from "../action/types";

const initialState = {
  videos: [],
  loading: true,
};
const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_VIDEO:
      console.log(action.payload);
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default videoReducer;
