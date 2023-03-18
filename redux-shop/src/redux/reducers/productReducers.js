import { ActionTypes } from "../constants/action-types";

const initState = {
    products: []
}
export const productReducer = (state = initState, action) => {
    switch(action.type){
        case ActionTypes.SET_PRODUCTS: return {...state, products:[...action.payload]};
        default: return state
    }
}

export const selectedProductReducer = (state={}, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return {...state, ...payload}
        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return {}
        default: return state
    }
}