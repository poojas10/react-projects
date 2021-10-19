import React,{useState} from "react";
import "./header.css";
import MenuCategories from "./MenuCategories";
import MenuList from "./MenuList";
import { menu } from './data';

export default function Header() {
const [item,setItem] =useState(menu)
    function displayMenu(e){
      console.log(e);
      // if(e.key==='Enter'){
      //   console.log('entered');
      // }
      // if(e.key === 'enter' || e.type ==='click'){
      //   const filteredItem=menu.filter(el=>el.category.includes(e.target.id));
      //   setItem(filteredItem)
      // }
    }
  return (
    <main>
      <section className="menu-section">
        <header>
          <h1>Our Menu</h1>
          <MenuCategories btnClick={displayMenu} />
        </header>
        <div className='menu-list'>
        <MenuList items={item} id={displayMenu}/>
        </div>
      </section>
    </main>
    // <MenuCategories />
  );
}
