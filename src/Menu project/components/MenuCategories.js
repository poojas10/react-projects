import React from "react";

export default function MenuCategories({btnClick}) {
  return (
    <nav className="btn-container">
      <ul>
        <li tabIndex='1'>
          <button className='menu-btn' id="all" onClick={btnClick} onKeyUp={btnClick}>All</button>
        </li>
        <li tabIndex='2'>
          <button className='menu-btn' id="breakfast" onClick={btnClick} onKeyUp={btnClick}>Breakfast</button>
        </li>
        <li tabIndex='3'>
          <button className='menu-btn' id="lunch" onClick={btnClick} onKeyUp={btnClick}>Lunch</button>
        </li>
        <li tabIndex='4'>
          <button className='menu-btn' id="shakes" onClick={btnClick} onKeyUp={btnClick}>Shakes</button>
        </li>
      </ul>
    </nav>
  );
}
