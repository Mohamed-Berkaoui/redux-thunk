import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decQuantityAction, deleteFromCartAction, incQuantityAction } from "../redux/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  return (
    <div className="d-flex flex-column gap-2 my-2">
      {cart.map((element) => (
        <div className="cart-box w-100 d-flex border-1 border-black border justify-content-between container  rounded   align-items-center">
            <h4 className="m-0">{element.product.title}</h4>
            <p className="m-0">{element.product.price}</p>
            <div className="d-flex align-items-center  gap-2">
              <Button onClick={()=>dispatch(incQuantityAction(element.product))}>+</Button>
              <p className="m-0">{element.quantity}</p>
              <Button onClick={()=>dispatch(decQuantityAction(element.product))}>-</Button>
              <Button onClick={()=>dispatch(deleteFromCartAction(element.product))}>delete</Button>

            </div>
        </div>
      ))}
    </div>
  );
}
export default Cart;
