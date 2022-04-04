import * as ProductsActionCreators from './products'
import * as CartActionCreators from './cart'

export const ActionCreators = {
    ...ProductsActionCreators,
    ...CartActionCreators
}