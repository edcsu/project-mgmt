import Button from "./Button"

function Sidebar({onAddProject}) {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projetcs</h2>
        <div>
           <Button onClick={onAddProject}>
                + Add Project
            </Button> 
        </div>
        <ul></ul>
    </aside>
  )
}

export default Sidebar