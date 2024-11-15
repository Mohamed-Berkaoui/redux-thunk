import { ADD_TO_CART, DEC_PRODUCT, DELETE_FROM_CART, INC_PRODUCT } from "./cartActionsTypes";

function cartReducer(state = [], action) {
    switch (action.type) {
      case ADD_TO_CART:
        return [...state, { product: action.payload, quantity: 1 }];
      case INC_PRODUCT: {
        return state.map((element) =>
     element.product.id == action.payload.id
          ? { ...element, quantity: element.quantity + 1 }
          : element
        );
      }
      case DEC_PRODUCT:
        return state.map((element) =>
          element.product.id == action.payload.id
            ? element.quantity > 1
              ? { ...element, quantity: element.quantity - 1 }
              : element
            : element
        );
      case DELETE_FROM_CART:
        return state.filter(element=>element.product.id!==action.payload.id)
      default:
        return state;
    }
  }
  
  export default cartReducer