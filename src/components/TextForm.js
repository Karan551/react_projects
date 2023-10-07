import React, { useState } from 'react'

export default function TextForm({ heading }) {
    // Declare a new state variable which we will call text.
    const [text, setText] = useState("")
    // This function for convert text to uppercase btn
    const upperBtn = (element) => {
        let upperText = text.toUpperCase()
        // print the upperText value in the textArea field.
        setText(upperText)
    }
    // This function for convert text to lower case btn
    const lowerBtn = (element) => {
        let lowerText = text.toLowerCase()
        // update the value of text with the help of setText function.
        setText(lowerText)
    }
    // This function for change the value of textarea.
    const changeValue = (element) => {
        // print the value in text area field with the help of setText function.(update the value of text with the help of setText function )
        setText(element.target.value)
    }

    // 
    const clearBtn = (element) => {
        // text value is set to empty space.
        setText('')
    }
    // This function is used to count the characters without spaces
    let total = 0
    const countChar = (arr) => {
        if(arr instanceof Array){
            for (let i of arr) {
                total = total + i.length
            }
            return total
        }
    }
    return (
        <>
            <h3>{heading}</h3>
            <div className="mb-3">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" value={text} onChange={changeValue} placeholder='Enter Text Here:' spellCheck='true'></textarea>
            </div>
            {/* buttons for change font */}
            <button className='btn btn-outline-primary' onClick={upperBtn}>Convert To Uppercase.</button>
            <button className='btn btn-outline-secondary mx-2' onClick={lowerBtn}>Convert To lowercase.</button>
            <button className='btn btn-outline-info mx-2' onClick={clearBtn}>Clear The Input Field.</button>

            {/*  */}
            <div className="container my-3">
                <h2>Your Analyzed Text is:</h2>
                <p className='fw-bold fs-5'>You typed characters: <span> {countChar(text.split(' '))}</span>
                    <br />
                    And words are: <span>{text.split(' ').length}</span>
                </p>
                <h3>Preview:</h3>
                <p>{text}</p>
            </div>



        </>
    )
}
