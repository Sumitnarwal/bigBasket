import * as types  from "./actionType"


const initState={
    products:[],
    error:false,
    loading:false,
 
}
export const productReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.FETCH_DATA_REQUEST:return{...state,error:false,loading:true}
        case types.FETCH_DATA_SUCCESS:return{...state,error:false,products:payload}
        case types.FETCH_DATA_FAILURE:return{...state,error:payload,loading:false}
        
      
        default: return state
    }
}   

