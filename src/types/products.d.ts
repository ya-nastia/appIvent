
type Product = {
  id: number, 
  image: string,
  name: string,
  price: number
}

export type Products = {
  products: Product[]
};

export type ProductsState = {
  products: any[];
  loading: boolean;
  error: null | string;
}

export enum ProductsActionTypes {
  GET_PRODUCTS = 'GET_PRODUCTS',
  GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR'
}
export type GetProductsAction = {
  type: ProductsActionTypes.GET_PRODUCTS
}
export type GetProductsActionSuccess = {
  type: ProductsActionTypes.GET_PRODUCTS_SUCCESS,
  payload: any[]
}
export type GetProductsActionError = {
  type: ProductsActionTypes.GET_PRODUCTS_ERROR,
  payload: string
}

export type ProductsAction = GetProductsAction | GetProductsActionError | GetProductsActionSuccess;