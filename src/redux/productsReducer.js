

function productsReducer(state = {products:[],error:false,loading:false}, action) {
    switch (action.type) {
      case "ADD_PRODUCT":
        return {products:[...state.products, action.payload],error:false,loading:false}
        case "GET_PRODUCTS":return {products:action.payload,error:false,loading:false}
        case "LOADING":return {products:[],loading:true,error:false}
        case "GET_PRODUCTS_ERROR":return {products:[],loading:false,error:true}
      default:
        return state;
    }
  }
  export default productsReducer