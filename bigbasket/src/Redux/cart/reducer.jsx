



import { ADD_PRODUCT_CART_FAILURE, ADD_PRODUCT_CART_REQUEST, ADD_PRODUCT_CART_SUCCESS } from "./action"


const initState = {
    cart: [],
    error: false,
    loading: false,

}


export const cartReducer = (state = initState, { type, payload }) => {
    switch (type) {
        case ADD_PRODUCT_CART_REQUEST: return { ...state, error: false, loading: true }
        case ADD_PRODUCT_CART_SUCCESS: return { ...state, error: false, cart: payload }
        case ADD_PRODUCT_CART_FAILURE: return { ...state, error: payload, loading: false }
        default: return state;
    }
}






