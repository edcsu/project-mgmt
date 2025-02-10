const inputClasses = 'w-full p-1 boeder-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus-border-stone-600'

function Input({label, isTextArea, ref, ...props}) {
  return (
    <p className='flex flex-col gap-1 my-4'>
        <label className='text-sm font-bold uppercase text-stone-500' htmlFor="">{label}</label>
        {isTextArea ? 
            <textarea ref={ref} className={inputClasses} name="" {...props}></textarea> : 
            <input ref={ref} className={inputClasses} type="text" {...props}/>}
    </p>
  )
}

export default Input