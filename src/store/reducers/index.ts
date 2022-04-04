import { combineReducers } from "redux";
import { productsReducer } from "./productsReducer";
import { cartReducer } from "./cartReducer";

export const RootReducer = combineReducers({
  products: productsReducer,
  cartProducts: cartReducer
})

export type RootState = ReturnType<typeof RootReducer>