import  axios  from "axios";

export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE"


const getproductCartRequest = (payload) => {

    return {

        type: ADD_PRODUCT_CART_REQUEST,
        payload,

    }
}

const getproductCartSuccess = (payload) => {
    return {
        type: ADD_PRODUCT_CART_SUCCESS,
        payload,
    }
}

const getproductCartFailure = (payload) => {
    return {
        type: ADD_PRODUCT_CART_FAILURE,
        payload
    }
}

export const addProductCart = (product) => (dispatch) => {
    dispatch(getproductCartRequest())

    axios.post("http://localhost:7005/addtocart", product).then((r) => dispatch(getproductCartSuccess(r.data))).catch((error) =>
        dispatch(getproductCartFailure(error.data)));
}