import { applyMiddleware, combineReducers, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
//import { cartReducer } from "./cart/reducer";

import { cartReducer } from "./cart2/reducer";
import { productReducer } from "./reducer";

const rootReducer=combineReducers({ecommerceData:productReducer,
    cartData:cartReducer
})


const composeEnhancers= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose ;
export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk))
    
);

console.log(store.getState())



