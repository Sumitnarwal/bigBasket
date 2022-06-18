import * as types  from "./actionType"


const initState={
    products:[],
    error:false,
    loading:false,
    id:""
 
}
export const productReducer=(state=initState,{type,payload})=>{
    switch(type){
        case types.FETCH_DATA_REQUEST:return{...state,error:false,loading:true}
        case types.FETCH_DATA_SUCCESS:return{...state,error:false,products:payload}
        case types.FETCH_DATA_FAILURE:return{...state,error:payload,loading:false}
        
        case types.SINGLE_PRO_ID_REQUEST:return{...state,error:payload,loading:false}
        case types.SINGLE_PRO_ID_SUCCESS:return{...state,error:false,id:payload}
        case types.SINGLE_PRO_ID_FAILURE:return{...state,error:false,loading:true}
        
        
      
        default: return state
    }
}   

