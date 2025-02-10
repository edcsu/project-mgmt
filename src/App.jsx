import { useState } from 'react'
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { v7 as uuidv7 } from 'uuid';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function startAddProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }
  
  function handleAddProject(project) {
    setProjectState(prevState => {
      const newProject = {
        ...project,
        id : uuidv7()
      }
      return{
        ...prevState,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProject onAddProject={startAddProject}/>
  } else {
    content = <p>I have a project</p>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={startAddProject}/>
      {content}
    </main>
  );
}

export default App;
