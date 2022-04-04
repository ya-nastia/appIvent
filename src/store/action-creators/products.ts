import { ProductsActionTypes, ProductsAction } from "../../types/products.d";
import { Dispatch } from "redux";
import axios from "axios";

//https://appevent.ru/dev/task1/catalog
export const fetchProducts = () => {
  return async (dispatch: Dispatch<ProductsAction>) => {
    try {
      dispatch({type: ProductsActionTypes.GET_PRODUCTS})
      const response = await axios.get('https://appevent.ru/dev/task1/catalog');
      dispatch({
        type: ProductsActionTypes.GET_PRODUCTS_SUCCESS, 
        payload: response.data.items
      })
    } catch(e) {
      dispatch({type: ProductsActionTypes.GET_PRODUCTS_ERROR, payload: 'Error'})
    }
  }
}