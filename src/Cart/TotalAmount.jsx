import {useContext } from "react";
import { CartState } from "./GlobalContext";

function TotalAmount() {
    const { state,isCartEmpty,setEmptyCart,clearCart } = useContext(CartState);
    const totalPrice = state.amount.reduce((a, b) => a + b).toFixed(2);
    return (
      <footer>
        <div className="total-amount">
        <p className='amount-label label'>total</p>
        <p className='total-price label'>{`$${totalPrice}`}</p>

        </div>
        {!isCartEmpty && !state.isLoad && state.item.length>0 && <button
           className='clear-items' onClick={() => {
              clearCart()
              setEmptyCart(true)
            }}
          >
          CLEAR CART
          </button>}
      </footer>
    );
  }
  export default TotalAmount