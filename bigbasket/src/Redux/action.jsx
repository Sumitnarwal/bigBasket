
import axios from "axios"


import * as types from "./actionType"

const fetDataRequest = (payload) => {
    return {
        type: types.FETCH_DATA_REQUEST,
        payload,
    }
}

const fetDataSuccess = (payload) => {
    return {
        type: types.FETCH_DATA_SUCCESS,
        payload,
    }
}

const fetDataFailure = (payload) => {
    return {
        type: types.FETCH_DATA_FAILURE,
        payload
    }
}

export const fetchData = (payload) => {
    return (dispatch) => {
        dispatch(fetDataRequest());
        axios.get("https://bgbskt.herokuapp.com/softdrink", {
            params: { ...payload }
        }).then((item) => dispatch(fetDataSuccess(item.data))
        ).catch((error) =>
            dispatch(fetDataFailure(error.data)));
    };
};
///////////////////////////////////////////////////////////////
//////// single product id

const SingleProdIdrequest = (payload) => {
    return {
        type: types.SINGLE_PRO_ID_REQUEST,
        payload,
    }
}

const SingleProdIdrequestSuccess = (payload) => {
    return {
        type: types.SINGLE_PRO_ID_SUCCESS,
        payload,
    }
}

const SingleProdIdrequestFailure = (payload) => {
    return {
        type: types.SINGLE_PRO_ID_FAILURE,
        payload
    }
}
export const getSingleProduct = (id) => (dispatch) => {
  //  console.log("pro", id)
    dispatch(SingleProdIdrequest());

    axios.get(`https://bgbskt.herokuapp.com/softdrink/${id}`).then((r) => dispatch(SingleProdIdrequestSuccess(r.data))).catch((error) =>
        dispatch(SingleProdIdrequestFailure(error.data)));
};