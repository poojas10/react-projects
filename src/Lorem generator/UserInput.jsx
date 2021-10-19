import React from 'react'

export default function UserInput({generateParagraphs,userInput,count}) {
    return (
        <div className='title'>
            <h3>TIRED OF BORING LOREM IPSUM?</h3>
            <form className='input' onSubmit={generateParagraphs}>
                <label htmlFor="para-num">Paraghraphs:</label>
            <input type='number' id='para-num' onChange={userInput} value={count}></input>
            <button className='btn'>GENERATE</button>
            </form>
        </div>
    )
}
