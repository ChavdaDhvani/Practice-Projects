import "./App.css";
import { useState } from "react";
import SideBar from "./components/SideBar";
import NoProjectSelected from "./components/NoProjectSelected";
import NewProject from "./components/NewProject";
import SelectedProject from "./components/SelectedProject";

function App() {

  const [projects, setProjects] = useState([]);

  const [projectId, setProjectsId] = useState(null);

  function handleAddTask(text) {
    if (!text) return;
    setProjects(prev => {
      return prev.map(project => {
        if (project.id === projectId) {
          return {
            ...project,
            tasks: [...project.tasks, text]
          }
        }
        return project;
      })
    })
  }

  function handleDeleteTask(taskIndex) {
    setProjects(prev => {
      return prev.map(project => {
        if (project.id === projectId) {
          const updatedTasks = project.tasks.filter((_, index) => index !== taskIndex);
          return {
            ...project,
            tasks: updatedTasks
          }
        }
        return project;
      })
    })
  }

  function handleNewProject(newProject) {
    setProjects(
      prev => [
        ...prev,
        { ...newProject, id: Math.random(), tasks: [] }
      ]
    )
    setProjectsId(null);
  }

  function handleSelectProject(id) {
    setProjectsId(id);
  }

  function handleDelete() {
    setProjects(
      prev => prev.filter(project => project.id !== projectId)
    )
    setProjectsId(null);
  }

  function showDefaultPage() {
    if (projectId === null) {

    }
  }

  let content;

  if (projectId === 'new') {
    content = <NewProject onSave={handleNewProject} handleDelete={() => setProjectsId(null)} />;
  } else if (projectId === null) {
    content = <NoProjectSelected setProjectsId={() => setProjectsId('new')} />;
  } else {
    const selectedProject = projects.find(
      (project) => project.id === projectId
    )
    content = <SelectedProject
      key={projectId}
      onDelete={handleDelete}
      project={selectedProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
    />
  }


  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <SideBar
          onSelectProject={handleSelectProject}
          projects={projects}
          setProjectsId={() => setProjectsId('new')}
        />
        {content}
      </main>

    </>
  );
}

export default App;
