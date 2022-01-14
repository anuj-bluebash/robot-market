import { combineReducers } from 'redux'
import cartReducer from './cart/cart.reducer.js'
import shopReducer from './shop/shop.reducer.js'

const rootReducer = combineReducers({
  cart: cartReducer,
  shop: shopReducer,
})

export default rootReducer
