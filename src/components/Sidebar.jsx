import Button from "./Button"

function Sidebar({onAddProject, projects, onSelectProject, selectedProjectId}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projetcs</h2>
        <div>
           <Button onClick={onAddProject}>
                + Add Project
            </Button> 
        </div>
        <ul className="mt-4">
            {projects.map( project => {
                let elementCssClasses = "w-full text-left px-2 py-1 rounded-sm my-1hover:text-stone-200 hover:bg-stone-800 cursor-pointer"
                if(project.id === selectedProjectId){
                    elementCssClasses += " bg-stone-800 text-stone-200"
                } else {
                    elementCssClasses += " text-stone-400"
                }
                return (
                    <li key={project.id}>
                        <button className={elementCssClasses}
                            onClick={() => onSelectProject(project.id)}
                        >
                            {project.title}
                        </button>
                    </li>
                )
            })}
        </ul>
    </aside>
  )
}

export default Sidebar