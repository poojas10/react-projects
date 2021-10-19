import React,{useContext} from 'react';
import { CartState } from './GlobalContext';

export default function NavBar() {
    const {state}= useContext(CartState)
    const quantity = state.item.length>0?state.item.map(e=>e.amount).reduce((a,b)=>a+b):0
    return (
        <nav>
           <div className="nav-center">
               <h1 id='logo'>Shopping</h1>
               <div className="cart-icon">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M16 6v2h2l2 12H0L2 8h2V6a6 6 0 1 1 12 0zm-2 0a4 4 0 1 0-8 0v2h8V6zM4 10v2h2v-2H4zm10 0v2h2v-2h-2z"></path></svg>
               <div className="total-quantity">
                   <p>{quantity}</p>
               </div>
               </div>
               </div> 
        </nav>
    )
}
