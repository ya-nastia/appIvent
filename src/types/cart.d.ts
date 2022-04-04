import { Product } from "./products"

export type CartState = {
  cartProducts: Product[], 
  amount: number
}

export enum CartActionTypes {
  ADD_TO_CART = 'ADD_TO_CART',
  REMOVE_FROM_CART = 'REMOVE_FROM_CART',
  SAVE_TO_LOCAL_STORAGE = 'SAVE_TO_LOCAL_STORAGE',
  GET_FROM_LOCAL_STORAGE = 'GET_FROM_LOCAL_STORAGE'
}

export type GetFromLocalStorageAction = {
  type: CartActionTypes.GET_FROM_LOCAL_STORAGE
  payload: Product[]
}

export type AddToCartAction = {
  type: CartActionTypes.ADD_TO_CART,
  payload: Product
}
export type RemoveFromCartAction = {
  type: CartActionTypes.REMOVE_FROM_CART,
  payload: Product
}
export type CartAction = AddToCartAction | RemoveFromCartAction | GetFromLocalStorageAction;
