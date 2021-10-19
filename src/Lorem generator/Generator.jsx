import React,{useState} from 'react';
import text from "./data";
import UserInput from './UserInput';
import './style.css'

export default function Generator() {
    const [count,setCount] =useState('')
    const [para,setPara] =useState([])
    function generateParagraphs(e){
        e.preventDefault();
        let generatedText=text.slice(0,count);
        setPara(generatedText)
        if(count>text.length){
            let remainingParaLength=count - text.length
            let generatedText=text.slice(0,remainingParaLength);
          setPara(prev=>{
              return [...prev,...generatedText]
          })
        }
        setCount('')
    }
    function userInput(e){
       setCount(+e.target.value)
    }
    return (
        <div className='section'>
          <UserInput generateParagraphs={generateParagraphs} userInput={userInput} count={count} /> 
          <article>
          {para.map(e=>{
              return(
                <p key={Math.random()}>{e}</p>
              )
          })} 
          </article>
        </div>
    )
}
