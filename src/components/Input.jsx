import React from 'react'

function Input({label, isTextArea, ...props}) {
  return (
    <p>
        <label htmlFor="">{label}</label>
        {isTextArea ? <textarea name="" {...props}></textarea> : <input type="text" {...props}/>}
    </p>
  )
}

export default Input