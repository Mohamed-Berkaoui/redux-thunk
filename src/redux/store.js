import { applyMiddleware, combineReducers, createStore } from "redux";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import { thunk } from "redux-thunk";

const reducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
  });
  
  const reduxStore = createStore(reducer,applyMiddleware(thunk));
  
  export default reduxStore