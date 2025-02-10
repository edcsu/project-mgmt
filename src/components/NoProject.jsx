import noProjectImage from '../assets/no-projects.png'
import Button from './Button'
function NoProject() {
  return (
    <div className='mt-24 text-center w-2/3'>
        <img src={noProjectImage} alt="no project" className='w-16 h-16 pbject-contain mx-auto'/>
        <h2 className='text-xl font-bold text-stone-500 mt-4 my-4'>
            No project selected
        </h2>
        <p className='text-stone-400 mb-4'>
            Select a project or create a new one
        </p>
        <p className='mt-8'>
            <Button>Create a new project</Button>
        </p>
    </div>
  )
}

export default NoProject