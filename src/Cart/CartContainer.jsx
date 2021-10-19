import {useContext,useState } from "react";
import NavBar from "./NavBar";
import { CartState } from "./GlobalContext";
import ListItems from "./ListItems";
import EmptyCart from "./EmptyCart";
import TotalAmount from './TotalAmount'

function CartContainer() {
    const { state,clearCart ,isCartEmpty,setEmptyCart} = useContext(CartState);
    return (
      <>
        {!state.isLoad && <NavBar />}
      <main>
        <section className="section">
        {!state.isLoad && <h1 className='title'>YOUR BAG</h1>}
          {isCartEmpty && <EmptyCart />}
          {state.isLoad && <h1>Loading...</h1>}
          {state.item.length > 0 &&
            state.item.map((item) => {
              return <ListItems key={item.id} {...item} />;
            })}
        {!state.isLoad && state.amount.length > 0 && <TotalAmount />}
        </section>
      </main>
      </>
    );
  }
  export default CartContainer