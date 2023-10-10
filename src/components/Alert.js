import React from 'react'

export default function Alert({alert}) {
    // This function is used to convert any sentence into title case.
    const capitalize= (word)=>{
        word=word.toLowerCase()
        return word[0].toUpperCase()+word.slice(1,)    
    }
    return (
        
        // show alert when alert is not null
        alert && <>
        <div className={`alert alert-${alert[1]}`} role="alert">
            <strong>{capitalize(alert[1])} :</strong> {alert[0]}
        </div>
        </>
    )
}
