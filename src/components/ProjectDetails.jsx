import React from 'react'
import { formatDistanceToNow, format } from 'date-fns'
import Tasks from './Tasks'

function ProjectDetails({project, onDelete, onAddTask, onDeleteTask, tasks}) {
    const formattedDate = format(new Date(project.dueDate), 'dd-MMM-yyyy')
    const formattedDateDistance = formatDistanceToNow((new Date(project.dueDate)))
  return (
    <div className='w-[35rem] mt-16'>
        <header className='pb-4 mb-4 border-b-2 border-stone-300'>
            <div className='flex items-center justify-between'>
                <h1 className='text-3xl font-bold text-stone-300 mb-2'>{project.title}</h1>
                <button 
                    className='text-stone-50 bg-red-400 rounded-xl px-3 py-2 hover:text-stone-10 hover:bg-red-600 cursor-pointer'
                    onClick={onDelete}
                >
                    Delete
                </button>
            </div>
            <p className='mb-4 text-stone-400'>
                 <span className='text-stone-800 mr-1'>
                    Due in :
                </span>
                {formattedDateDistance}
                <span className='mx-1'>
                    ({formattedDate})
                </span> 
            </p>
            <p className='text-stone-600 whitespace-pre-wrap'>{project.description}</p>
        </header>
        <Tasks 
            onAdd={onAddTask} 
            onDelete={onDeleteTask} 
            tasks={tasks}
            id={project.id}
        />
    </div>
  )
}

export default ProjectDetails