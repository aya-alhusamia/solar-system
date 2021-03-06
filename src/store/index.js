import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { checkForToken } from "./action/authActions";
import { fetchItems } from "./action/itemActions";
import { fetchSpaceImg } from "./action/spaceImgActions";
import { fetchUserItems } from "./action/userItemActions";
import { fetchVideo } from "./action/videoActions";
import authReducer from "./reducers/authReducer";
import itemReducer from "./reducers/itemReducer";
import spaceImgReducer from "./reducers/spaceImgReducer";
import userItemReducer from "./reducers/userItemReducer";
import videoReducer from "./reducers/videoReducer";
import clientSecret from "./reducers/stripeReducer";

const rootReducer = combineReducers({
  user: authReducer,
  items: itemReducer,
  images: spaceImgReducer,
  videos: videoReducer,
  userItems: userItemReducer,
  clientSecret: clientSecret,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchItems());
store.dispatch(checkForToken());
store.dispatch(fetchSpaceImg());
store.dispatch(fetchUserItems());
store.dispatch(fetchVideo());
export default store;
