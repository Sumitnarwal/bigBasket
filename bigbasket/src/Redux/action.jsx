
import Axios from "axios"

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

        Axios.get("/products", {
            params: { ...payload }
        }).then((r) => dispatch(fetDataSuccess(r.data))).catch((error) =>
            dispatch(fetDataFailure(error.data)));
    };
};