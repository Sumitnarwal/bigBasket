import  axios  from "axios";
import { fetchData } from "../action";

export const ADD_PRODUCT_CART_REQUEST = "ADD_PRODUCT_CART_REQUEST";
export const ADD_PRODUCT_CART_SUCCESS = "ADD_PRODUCT_CART_SUCCESS";
export const ADD_PRODUCT_CART_FAILURE = "ADD_PRODUCT_CART_FAILURE"

export const ADD_TO_CART = " ADD_TO_CART"
export const ALL_CART_PRO = " ALL_CART_PRO"
export const REMOVE_CART_ITEM = "REMOVE_CART_ITEM"
export const DELETE_ITEM = "DELETE_ITEM"
 export const ADD_QUANITY_TOCART = "ADD_QUANITY_TOCART"
// export const INC_QUANITY_TOCART = "INC_QUANITY_TOCART"
// export const DEC_QUANITY_TOCART = "DEC_QUANITY_TOCART"

// const addproductCartRequest = (payload) => {
//     return {
//         type: ADD_PRODUCT_CART_REQUEST,
//         payload,
//     }
// }

// const addproductCartSuccess = (payload) => {
//     return {
//         type: ADD_PRODUCT_CART_SUCCESS,
//         payload,
//     }
// }

// const addproductCartFailure = (payload) => {
//     return {
//         type: ADD_PRODUCT_CART_FAILURE,
//         payload
//     }
// }

// export const addProductCart = (product) => (dispatch) => {
//     dispatch(addproductCartRequest())

//     axios.post("http://localhost:7005/addtocart", product).then((r) => dispatch(addproductCartSuccess(r.data))).catch((error) =>
//         dispatch(addproductCartFailure(error.data)));
//}



    
 
  
  // Add to Cart
  export const addItemsToCart = (data)=>{
     return{
         type : ADD_TO_CART,
         payload:data
     }
  }
  
  
   export const deleteItem = (id)=>{
   // alert("delete id recive")
        return {
            type : DELETE_ITEM,
            payload : id
        }
   } 
 

  export const noOfproductincart=(payload)=>{
    return{
      type:ADD_QUANITY_TOCART,
      payload
    }
  }


  export const delelteProdCart = (product) => (dispatch) => {
     alert("product removed")
    axios.delete(`https://bigbaskets.herokuapp.com/addtocart/${product}`)  //kk
    .then((r) => dispatch(deleteItem(r.data)))
  }


  export const addsingleProductCart = (id) => (dispatch) => {
   // alert(`item${id} `)

  axios.get(`https://bigbaskets.herokuapp.com/softdrink/${id}`)  //kkk
  .then((r) =>{  console.log("gvg",r.data),
  dispatch(addProductCart(r.data))})
}


  export const addProductCart = (product) => (dispatch) => {
      alert("Product Add to cart")
    axios.post("https://bigbaskets.herokuapp.com/addtocart", product)  //kk
    .then((r) => dispatch(addItemsToCart(r.data)))
    .catch((err)=>console.log(err))
  }





  //////////////////////
  // export const cartQuantity =  (dispatch) => {
  //   axios.get("https://bgbskt.herokuapp.com/addtocart")  //kk
  //   .then((r) => dispatch(noOfproductincart(r.data.length)))
  // }
  

