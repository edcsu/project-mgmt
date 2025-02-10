import { useState } from 'react'
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: []
  })

  function handleAddProject(params) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  let content;

  if (projectState.selectedProjectId === null) {
    content = <NewProject />
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProject onAddProject={handleAddProject}/>
  } else {
    content = <p>I have a project</p>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onAddProject={handleAddProject}/>
      {content}
    </main>
  );
}

export default App;
