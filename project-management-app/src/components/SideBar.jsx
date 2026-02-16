export default function SideBar({ setProjectsId, projects, onSelectProject }) {
    return (
        <>
            <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
                <h1 className="text-3xl font-bold">
                    Your Projects
                </h1>
                <button onClick={setProjectsId} className="mt-4 px-4 py-2 bg-stone-700 hover:bg-stone-600 rounded-md">
                    + New Project
                </button>
                <ul className="mt-8 flex flex-col gap-4">
                    {projects.length === 0 && (
                        <li className="text-stone-400"> No projects available</li>
                    )}
                    {projects.map(project => (
                        <li key={project.id} >
                            <button
                                onClick={() => onSelectProject(project.id)}
                                className="w-full text-left px-2 py-1 rounded-md my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800"
                            >
                                {project.title}
                            </button>
                        </li>

                    ))}        </ul>
            </aside>
        </>
    )
}