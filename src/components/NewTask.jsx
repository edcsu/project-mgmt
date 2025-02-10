import { useState } from 'react'

function NewTask() {
  const [enteredTask, setEnteredTask] = useState()

  function handleChange(event) {
    setEnteredTask(event.target.value)
  }

  return (
    <div className='flex items-center gap-2'>
        <input type="text" className='w-64 px-2 py-1 rounded-sm bg-stone-200'/>
        <button 
            className='px-2 py-1 rounded-r-xl text-stone-700 hover:text-stone-950 cursor-pointer border border-stone-400 hover:border-stone-700 hover:bg-stone-100'
            onChange={handleChange}
            value={enteredTask}
        >
            Add Task
        </button>
    </div>
  )
}

export default NewTask