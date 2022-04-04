import { CartAction, CartActionTypes, CartState } from "../../types/cart.d";

const initialState: CartState = {
  cartProducts: [],
  amount: 0
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_TO_CART:
      return {
        cartProducts: [...state.cartProducts, action.payload],
        amount: state.amount + 1
      }
    case CartActionTypes.REMOVE_FROM_CART:
      const newCartProducts = state.cartProducts.filter(product => product.id !== action.payload.id);
      console.log('in reducer:', newCartProducts);
      return {
        cartProducts: newCartProducts,
        amount: state.amount - 1
      }
    case CartActionTypes.GET_FROM_LOCAL_STORAGE:
      return {
        cartProducts: action.payload,
        amount: action.payload.length
      }
    default:
      return state
  }
}