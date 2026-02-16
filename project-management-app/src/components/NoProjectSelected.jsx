import image from '../assets/images.jpg';

export default function NoProjectSelected({ setProjectsId }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-20 h-20 object-contain mx-auto" src={image} alt="No project selected" />
            <h2 className="text-xl font-bold text-stone-500 my-4">
                No Project Selected
            </h2>
            <p className="text-stone-400 mb-4">
                Please create a new project or select an existing one.
            </p>
            <button onClick={setProjectsId} >
                Create new Project
            </button>
        </div>
    )
}