import { useState } from 'react'
import NewProject from "./components/NewProject";
import NoProject from "./components/NoProject";
import Sidebar from "./components/Sidebar";
import { v7 as uuidv7 } from 'uuid';
import ProjectDetails from './components/ProjectDetails';

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks:[]
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
      const projectId = uuidv7();
      const newProject = {
        ...project,
        id : projectId
      }
      return{
        ...prevState,
        selectedProjectId: projectId,
        projects: [...prevState.projects, newProject]
      }
    })
  }

  function handleCancelRequest() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  function handleSelectedProject(id) {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: id
      }
    })
  }

  function handleDeleteProject() {
    setProjectState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== prevState.selectedProjectId)
      }
    })
  }

  function handleAddTask(value) {
    setProjectState(prevState => {
      const taskId = uuidv7();
      const newTask = {
        text: value,
        id : taskId,
        projectId: prevState.selectedProjectId
      }
      return{
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      }
    })
  }

  function handleDeleteTask() {
    
  }

  const selectedProject = projectState.projects.find(project => project.id === projectState.selectedProjectId)

  let content = <ProjectDetails 
    project={selectedProject} 
    onDelete={handleDeleteProject} 
    onAddTask={handleAddTask} 
    onDeleteTask={handleDeleteTask}
    tasks={projectState.tasks} />;

  if (projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelRequest}/>
  } else if(projectState.selectedProjectId === undefined){
    content = <NoProject onAddProject={startAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8 mr-8">
      <Sidebar 
        onAddProject={startAddProject}
        projects={projectState.projects} 
        onSelectProject={handleSelectedProject} 
      />
      {content}
    </main>
  );
}

export default App;
