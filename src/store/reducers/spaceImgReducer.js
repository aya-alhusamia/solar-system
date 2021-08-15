import * as actionTypes from "../action/types";

const initialState = {
  images: [],
  loading: true,
};
const spaceImgReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_SPACEIMG:
      console.log(action.payload)
      return {
        ...state,
        images: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export default spaceImgReducer;
