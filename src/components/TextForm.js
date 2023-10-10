import React, { useState } from 'react'

export default function TextForm({ heading, mode, showAlert }) {

    // Declare a new state variable which we will call text.
    const [text, setText] = useState("")
    // This function for convert text to uppercase btn
    const upperBtn = (element) => {
        let upperText = text.toUpperCase()
        // print the upperText value in the textArea field.
        setText(upperText)
        // To display alert when user click on button.
        showAlert("Converted To UpperCase.", 'success')
    }
    // This function for convert text to lower case btn
    const lowerBtn = (element) => {
        let lowerText = text.toLowerCase()
        // update the value of text with the help of setText function.
        setText(lowerText)
        // To display alert when user click on button.
        showAlert("Converted To lowercase.", 'success')
    }
    // This function for change the value of textarea.
    const changeValue = (element) => {
        // print the value in text area field with the help of setText function.(update the value of text with the help of setText function )
        setText(element.target.value)
    }

    // This function is used to clear the input field.
    const clearBtn = (element) => {
        // text value is set to empty space.
        setText('')
        // To display alert when user click on button.
        showAlert("Input field cleared successfully.", 'success')
    }
    // using jquery hide the alert element.
    window.$(document).ready(function alert() {
        window.$("#alert").hide()
    }
    )
    // This function is used to copy the text into clipboard.
    const copyText = () => {
        let cpText = document.querySelector("#textArea");
        if (text.length > 0) {
            // select the text
            cpText.select()
            // copy the text into clipboard.
            navigator.clipboard.writeText(cpText.value)
            // with the help of jqery change the text of button.
            window.$("#copy-text").text('Text-Copied')
            // To display alert when user click on button.
            showAlert("Text has been copied to clipboard.", 'success')
        } else {
            window.$("#alert").show();
            window.$('.strong').text("Write Something into the text-area. ")
        }
    }
    // This function is used to remove Extra spaces to the given sentences
    const removeExtraSpace = (element) => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(' '))
        // To display alert when user click on button.
        showAlert("Extra Spaces has been removed.",'success')
    }
    // This function is used to count the characters without spaces
    let total = 0
    const countChar = (arr) => {
        if (arr instanceof Array) {
            for (let i of arr) {
                total = total + i.length
            }
            return total
        }
    }
    return (
        <>
            <div className="alert alert-warning alert-dismissible fade show" role="alert" id='alert'>
                <strong className='strong'>Write Something</strong>
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <h3 className={`text-${mode === "dark" ? "light" : "dark"}`}>{heading}</h3>
            <div className="mb-3">
                <textarea className={`form-control fs-5`} id="textArea" rows="10" value={text} onChange={changeValue} placeholder='Enter Text Here:' spellCheck='true' style={{ backgroundColor: mode === 'dark' ? '#042743' : 'white', color: mode === 'dark' ? '#fff' : '#333' }}></textarea>
            </div>
            {/* buttons for change font */}
            <button className='btn btn-outline-primary' onClick={upperBtn}>Convert To Uppercase.</button>
            <button className='btn btn-outline-secondary mx-2' onClick={lowerBtn}>Convert To lowercase.</button>
            <button className={`btn btn-outline-${mode === 'dark' ? "light" : "dark"} mx-2`} onClick={clearBtn}>Clear The Input Field.</button>
            {/*  */}
            <button className='btn btn-outline-success mx-2' onClick={copyText} id='copy-text'>Copy Text.</button>
            <button className={`btn btn-outline-${mode === 'dark' ? "light" : "dark"} mx-2`} onClick={removeExtraSpace}>Remove Extra Spaces.</button>

            {/*  */}
            <div className={`container my-3 text-${mode === "dark" ? "light" : "dark"}`}>
                <h2>Your Analyzed Text is:</h2>
                <p className='fw-bold fs-5'>You typed characters: <span> {countChar(text.split(' '))}</span>
                    <br />
                    And words are: <span>{text.split(' ').length}</span>
                </p>
                <h3>Preview:</h3>
                <p className='fw-medium'>{text.length > 0 ? text : "Please enter something to the above text-field and preview here:"}</p>
            </div>



        </>
    )
}
