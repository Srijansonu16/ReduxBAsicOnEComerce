import { combineReducers, createStore } from "redux";
import cartReducer from "./Reducer/cart";

const rootReducer = combineReducers({
  cart: cartReducer
});

const store = createStore(rootReducer);

export default store;
