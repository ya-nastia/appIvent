import { ProductsState, ProductsAction, ProductsActionTypes } from "../../types/products.d"

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
}

export const productsReducer = (state = initialState, action: ProductsAction): ProductsState => {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS:
      return { products: [], loading: true, error: null }
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS:
      return { products: action.payload, loading: false, error: null }
    case ProductsActionTypes.GET_PRODUCTS_ERROR:
      return { products: [], loading: false, error: action.payload }
    default:
      return state
  }
}