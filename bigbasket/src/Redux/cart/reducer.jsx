



// import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS } from "./action"

import { ADD_TO_CART, REMOVE_CART_ITEM, DELETE_ITEM } from "./action"
const init = {
  cartItems: [],
  totalQuantity: 0

}
console.log("dddd", init.cartItems)

// export const cartReducer = (state = initState, { type, payload }) => {
//     switch (type) {
//         //case ADD_PRODUCT_CART_REQUEST: return { ...state, error: false, loading: true }
//       //  case ADD_PRODUCT_CART_SUCCESS: return { ...state, error: false, cart: payload }
//     //    case ADD_PRODUCT_CART_FAILURE: return { ...state, error: payload, loading: false }
//         default: return state;
//     }
// }


export const cartReducer = (store = init, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const isItemExist = store.cartItems.find((i) => i._id === item._id);

      // if (isItemExist) {
      //   isItemExist.quantity++
      //   isItemExist.totalprice += payload.price

      // }
      //  else {
      //   return {
      //     ...store,
      //     cartItems: [...store.cartItems, { ...payload, quantity: 1, totalprice: payload.price }],
      //   };
      // }

    // case REMOVE_CART_ITEM:

    //   const items = payload;

    //   const isItemExists = store.cartItems.find(
    //     (i) => i._id === items._id
    //   );
    //   //console.log(isItemExists)
    //   isItemExists.quantity--
    //   isItemExists.totalprice -= payload.price


    case DELETE_ITEM: 
   // alert(payload._id)
    return {
      ...store
    }

    default:
      return store;
  }

};




