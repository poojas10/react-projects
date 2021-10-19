import React, { useEffect, useReducer, useState } from "react";
import CartContainer from "./CartContainer";
import "./style.css";
import reducer from "./reducer";
export const CartState = React.createContext();

const initialState = {
  item: [],
  isLoad: true,
  amount: [],
};

export default function AppProvider() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCartEmpty, setEmptyCart] = useState(false);

  
  async function fetchData() {
    dispatch({ type: "LOAD" });
    try {
      const request = await fetch(
        "https://course-api.com/react-useReducer-cart-project"
      );
      if (!request.ok) throw new Error("something is wrong");
      const response = await request.json();
      dispatch({ type: "ITEM", payload: { response } });
    } catch (err) {
      console.error(err.message);
    }
  }
  function increase(id) {
    dispatch({
      type: "TOGGLE-QUANTITY",
      payload: { id: id, text: "increase" },
    });
  }
  function decrease(id) {
    dispatch({
      type: "TOGGLE-QUANTITY",
      payload: { id: id, text: "decrease" },
    });
   emptyCartContent()
  }
  function removeItem(id) {
    dispatch({ type: "REMOVE-ITEM", payload: id });
    emptyCartContent()
  }
  function clearCart() {
    dispatch({ type: "CLEAR-ITEM" });
  }
  function emptyCartContent(){
    if (state.item.length === 1) {
      clearCart();
      setEmptyCart(true);
    }
  }
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    dispatch({ type: "TOTAL-PRICE" });
  }, [state.item]);
  return (
    <CartState.Provider
      value={{
        state,
        increase,
        decrease,
        removeItem,
        clearCart,
        isCartEmpty,
        setEmptyCart,
      }}
    >
      <CartContainer />
    </CartState.Provider>
  );
}
