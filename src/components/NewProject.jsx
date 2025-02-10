import { useRef } from 'react'
import Input from './Input'
import Modal from './Modal'

function NewProject({onAdd, onCancel}) {
  const dialog = useRef()

  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  function handleSave() {
    const enteredTitle = title.current.value
    const enteredDescription = description.current.value
    const enteredDueDate = dueDate.current.value

    if (enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredDueDate.trim() === '' ||
        new Date(enteredDueDate.trim()) < new Date()) {
        dialog.current.open()
        return
    }

    onAdd({
        title: enteredTitle,
        description: enteredDescription,
        dueDate: enteredDueDate
    })
  }

  return (
    <>
        <Modal ref={dialog} buttonText="Close" >
            <h2 className='text-xl font-bold text-stone-700 mt-4 my-4'>Invalid input</h2>
            <p className='text-stone-600 mb-4'>A value is missing</p>
            <p className='text-stone-600 mb-4'>Ensure that each input has a value</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li>
                    <button className='text-stone-800 hover:text-stone-900 cursor-pointer' onClick={onCancel}>Cancel</button>
                </li>
                <li>
                    <button 
                        className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:text-stone-850 cursor-pointer'
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"/>
                <Input ref={description} label="Description" isTextArea/>
                <Input type="date" ref={dueDate} label="Due Date"/>
            </div>
        </div>
    </>
  )
}

export default NewProject