import { CartAction, CartActionTypes } from "../../types/cart.d";
import { Product } from "../../types/products";

export const addToCart = (product: Product): CartAction => {

  let cartProductsStr = localStorage.getItem('cartProducts');
  if (cartProductsStr !== null) {
    let cartProducts = JSON.parse(cartProductsStr);
    cartProducts.push(product);
    localStorage.setItem('cartProducts', JSON.stringify(cartProducts));
  } else {
    localStorage.setItem('cartProducts', JSON.stringify([product]));
  }

  return {
    type: CartActionTypes.ADD_TO_CART,
    payload: product
  }
}

export const removeFromCart = (product: Product): CartAction => {

  let cartProductsStr = localStorage.getItem('cartProducts');
  if (cartProductsStr !== null) {
    let cartProducts = JSON.parse(cartProductsStr);
    let newCartProducts = cartProducts.filter((cartProduct: Product) => cartProduct.id !== product.id);
    localStorage.setItem('cartProducts', JSON.stringify(newCartProducts));
  } 

  return {
    type: CartActionTypes.REMOVE_FROM_CART,
    payload: product
  }
}

export const getFromLocalStorage = (): CartAction | undefined => {
  // try {
    const cartProducts = localStorage.getItem('cartProducts');
    if (typeof cartProducts === 'string') {
      return {
        type: CartActionTypes.GET_FROM_LOCAL_STORAGE,
        payload: JSON.parse(cartProducts)
      }
    } else {
      return {
        type: CartActionTypes.GET_FROM_LOCAL_STORAGE,
        payload: []
      }
    }
  // } catch (e) {
    // console.error(e);
  // }
}