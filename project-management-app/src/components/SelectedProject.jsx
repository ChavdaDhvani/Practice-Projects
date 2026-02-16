import Tasks from "./Tasks";
export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask }) {
  return (
    <div className="w-2/3 mt-16">
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      <p className="text-stone-700 mb-4">{project.description}</p>
      <p className="text-stone-500">Due Date: {project.dueDate}</p>
      <br />
      <button
        onClick={onDelete}
        className="px-4 py-2 text-sm font-semibold text-red-600 rounded-md hover:bg-red-100 transition"
      >
        Delete Project
      </button>
      <h2 className="font-bold mb-4 mt-5" >Add New Tasks</h2>
      <Tasks tasks={project.tasks} onAdd={onAddTask} onDelete={onDeleteTask} />

    </div>
  )

}
