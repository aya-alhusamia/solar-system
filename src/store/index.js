import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchItems } from "./action/itemActions";
import { fetchSpaceImg } from "./action/spaceImgActions";
import authReducer from "./reducers/authReducer";
import itemReducer from "./reducers/itemReducer";
import spaceImgReducer from "./reducers/spaceImgReducer";
 
import userItemReducer from "./reducers/userItemReducer";
 

const rootReducer = combineReducers({
  user: authReducer,
  items: itemReducer,
  images: spaceImgReducer,
 
  userItems: userItemReducer,
 ;

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchItems());
store.dispatch(fetchSpaceImg());
export default store;
