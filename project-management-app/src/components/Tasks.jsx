import { useRef, useState } from "react";
export default function Tasks({ tasks, onAdd, onDelete }) {

    const taskRef = useRef();

    function handleClick() {
        onAdd(taskRef.current.value);
        taskRef.current.value = '';
    }

    return (
        <section>
            <h2>Tasks</h2>
            <textarea ref={taskRef} /> <br />
            {tasks.length === 0 && <p>No tasks added yet.</p>}

            <button className="mt-4 px-4 bg-stone-600 hover:bg-stone-500 rounded-md" onClick={handleClick}>Add</button>
            <ul>
                {tasks.length > 0 && tasks.map((task, index) => (
                    <li key={index}>{task}
                        <button className="mt-4 px-4 ml-2 bg-stone-600 hover:bg-stone-500 rounded-md" onClick={() => onDelete(index)}>Delete</button></li>

                ))}
            </ul>
        </section>
    )
}