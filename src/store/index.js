import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { fetchItems } from "./action/itemActions";
import authReducer from "./reducers/authReducer";
import itemReducer from "./reducers/itemReducer";

const rootReducer = combineReducers({
  user: authReducer,
  items: itemReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
store.dispatch(fetchItems());
export default store;
