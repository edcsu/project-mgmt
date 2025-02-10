import React from 'react'
import NewTask from './NewTask'

function Tasks({ id, tasks, onAdd, onDelete}) {
  const projectTasks = tasks.filter(task => task.projectId === id)

  return (
    <section>
        <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
        <NewTask onAdd={onAdd}/>
        {tasks.length === 0 ? (
            <p className='text-stone-800 my-4 '>This projects doesnot have any tasks yet</p>
        ) : (
            <ul className='p-4 mt-8 rounded-md bg-stone-100'>
                {projectTasks.map(task => (
                    <li key={task.id} className='flex justify-between my-2'>
                        <span>{task.text}</span>
                        <button 
                            className='cursor-pointer text-red-400 px-2 py-1 hover:text-stone-100 hover:bg-red-400 hover:rounded-sm'
                            onClick={() => onDelete(task.id)}
                        >
                            clear
                        </button>
                    </li>))}
            </ul>
        )}
        
    </section>
  )
}

export default Tasks