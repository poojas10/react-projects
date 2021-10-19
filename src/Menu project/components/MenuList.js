import React,{useState} from 'react';
import MenuCard from './MenuCard';
// import img from "../../images/pancakes-breakfast.jpeg"

export default function MenuList({items,id}) {
    return (
        <>
         {items.map(menu=>{
             return <MenuCard {...menu} key={Math.random()}/>
         })
         }
        </>
    )
}

