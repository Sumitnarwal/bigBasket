




import { ADD_TO_CART, REMOVE_CART_ITEM, DELETE_ITEM, ADD_QUANITY_TOCART } from "./action"
const init = {
  cartItems: [],
  totalQuantity: 0
}

//console.log("dddd", init.cartItems)

export const cartReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: const item = payload;
    case DELETE_ITEM: return {...store}
     case ADD_QUANITY_TOCART: return{...store,totalQuantity:store.totalQuantity+payload}
    
     default:return store;
  }
};






