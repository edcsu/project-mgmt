import React from 'react'
const inputClasses = 'w-full p-1 boeder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-border-stone-600'

function Input({label, isTextArea, ...props}) {
  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-stone-500' htmlFor="">{label}</label>
        {isTextArea ? 
            <textarea className={inputClasses} name="" {...props}></textarea> : 
            <input className={inputClasses} type="text" {...props}/>}
    </p>
  )
}

export default Input