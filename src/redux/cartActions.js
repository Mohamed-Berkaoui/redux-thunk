import { ADD_TO_CART, DEC_PRODUCT, DELETE_FROM_CART, INC_PRODUCT } from "./cartActionsTypes";

export function incQuantityAction(param) {
    return { type:INC_PRODUCT,payload: param };
  }
  export function deleteFromCartAction(param){
    return {type:DELETE_FROM_CART ,payload:param}
  }
  export function decQuantityAction(param) {
    return { type:DEC_PRODUCT , payload: param };
  }
  export function addToCartAction(param) {
    return { type: ADD_TO_CART, payload: param };
  }