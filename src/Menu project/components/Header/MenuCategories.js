import React from "react";

export default function MenuCategories() {
  return (
    <nav className="btn-container">
      <ul>
        <li>
          <button className='menu-btn' id="all">All</button>
        </li>
        <li>
          <button className='menu-btn' id="breakfast">Breakfast</button>
        </li>
        <li>
          <button className='menu-btn' id="lunch">Lunch</button>
        </li>
        <li>
          <button className='menu-btn' id="shakes">Shakes</button>
        </li>
      </ul>
    </nav>
  );
}
