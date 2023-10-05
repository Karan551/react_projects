import React, { useState } from 'react'

export default function TextForm({ heading }) {
    // Declare a new state variable which we will call text.
    const [text, setText] = useState("")
    // This function for btn
    const upperBtn = (element) => {
        let upperText = text.toUpperCase()
        // print the upperText value in the textArea field.
        setText(upperText)
    }
    const lowerBtn = (element) => {
        let lowerText = text.toLowerCase()
        // update the value of text with the help of setText function.
        setText(lowerText)
    }
    const changeValue = (element) => {
        // print the value in text area field with the help of setText function.(update the value of text with the help of setText function )
        setText(element.target.value)

        // console.log(element.target)
        // console.log(element.target.value)
    }


    return (
        <>
            <h3>{heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changeValue} placeholder='Enter Text Here:' spellCheck='true'></textarea>
            </div>

            <button className='btn btn-outline-primary btn-lg' onClick={upperBtn}>Convert To Uppercase.</button>
            <button className='btn btn-outline-secondary btn-lg mx-2' onClick={lowerBtn}>Convert To lowercase.</button>



        </>
    )
}
