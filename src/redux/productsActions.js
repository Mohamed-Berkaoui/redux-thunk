import axios from "axios";

export const addProductAction = (a) => {
    return { type: "ADD_PRODUCT", payload: a };
  };

  export function loadingProducts(){
    return {type:"LOADING"}
  }

  export const getProductsAction=(products)=>{
    return {type:"GET_PRODUCTS",payload:products}
  }

  export const getProductsActionERROR=(error)=>{
    return {type:"GET_PRODUCTS_ERROR",payload:error}
  }
  

  export const fetchProducts=()=>{
    return function(dispatch){
        dispatch(loadingProducts())
        fetch('http://localhost:3000/products')
        .then(res=>res.json())
        .then(json=>dispatch(getProductsAction(json)))
        .catch(e=>dispatch(getProductsActionERROR("error")))
    }
  }
  export function postProduct(product){
return function (dispatch){
    
    axios.post("http://localhost:3000/products",product)
    .then(res=>      dispatch(addProductAction(res.data)))
}
  }