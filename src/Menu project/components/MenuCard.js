import React from 'react'

export default function MenuCard({name,price,imgUrl,discription}){
    return (
        <article className='menu-item'>
               <div  className='dish-img'>
               <img src={imgUrl} alt=''></img>
               </div>
               <div className='item'>
               <header>
               <h4 className='item-name'>{name}</h4>
               <p className='item-price'>{`$`+price}</p>
               </header>
               <div className='item-content'>
                   <p>{discription}</p>
               </div>
               </div>
             </article>
    )
}
