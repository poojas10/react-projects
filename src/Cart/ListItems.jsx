import { useContext } from "react";
import { CartState } from "./GlobalContext";


function ListItems({ title, amount, price, id ,img}) {
  const { increase, decrease, removeItem } = useContext(CartState);
  return (
    <article className='cart-item'>
      <img className='product-img' src={img} alt="" />
      <div className="item-info">
        <p className='product-title'>{title}</p>
        {/* <h3>{amount}</h3> */}
        <p className='price'>{`$${price}`}</p>
        <button className='remove-btn'
        onClick={() => {
          removeItem(id);
        }}
      >
        remove
      </button>
      </div>
      <div className="item-quantity-controls">
      <button className='quantity-increase btn'
        onClick={() => {
          increase(id);
        }}
      >
      <i className="fas fa-chevron-up"></i>
      </button>
      <h3 className='quantity'>{amount}</h3>
      <button className='quantity-decrease btn'
        onClick={() => {
          decrease(id);
        }}
      >
         <i className="fas fa-chevron-down"></i>
      </button>
      </div>   
    </article>
  );
}
export default ListItems;
