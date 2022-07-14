import  axios  from "axios";

export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE"


// const getproductCartRequest = (payload) => {

//     return {

//         type: ADD_PRODUCT_CART_REQUEST,
//         payload,

//     }
// }

// const getproductCartSuccess = (payload) => {
//     return {
//         type: ADD_PRODUCT_CART_SUCCESS,
//         payload,
//     }
// }

// const getproductCartFailure = (payload) => {
//     return {
//         type: ADD_PRODUCT_CART_FAILURE,
//         payload
//     }
// }

// export const addProductCart = (product) => (dispatch) => {
//     dispatch(getproductCartRequest())

//     axios.post("http://localhost:7005/addtocart", product).then((r) => dispatch(getproductCartSuccess(r.data))).catch((error) =>
//         dispatch(getproductCartFailure(error.data)));
// }



    export const ADD_TO_CART = " ADD_TO_CART"
    export const ALL_CART_PRO = " ALL_CART_PRO"
    export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
    export const DELETE_ITEM = "DELETE_ITEM"

 
  
  
  // Add to Cart
  export const addItemsToCart = (data)=>{
     return{
         type : ADD_TO_CART,
         payload:data
     }
  }
  
 
  
   export const deleteItem = (id)=>{
    alert("delete id recive")
        return {
            type : DELETE_ITEM,
            payload : id
        }
   } 
 
  
  // REMOVE FROM CART
//   export const removeItemsFromCart = (data) => {
//      return {
//          type : REMOVE_CART_ITEM,
//          payload:data
//      }
//   };



  export const delelteProdCart = (product) => (dispatch) => {
      alert(product)

    axios.delete(`http://localhost:7005/addtocart/${product}`)
    .then((r) => dispatch(deleteItem(r.data))).then((r)=>{

    })
  }
  export const addsingleProductCart = (id) => (dispatch) => {
    alert(`item${id} `)

  axios.get(`http://localhost:7005/softdrink/${id}`)
  
  .then((r) =>{  console.log("gvg",r.data),
  dispatch(addProductCart(r.data))})

}

  export const addProductCart = (product) => (dispatch) => {
      alert("item dispatch")

    axios.post("http://localhost:7005/addtocart", product)
    .then((r) => dispatch(addItemsToCart(r.data)))
  }
  