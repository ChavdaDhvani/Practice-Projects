import { useRef, useState } from "react";
import Modal from "./Modal";


export default function NewProject({ onSave, handleDelete }) {

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dueDateRef = useRef();

    const [showModal, setShowModal] = useState(false);

    function handleSave() {
        const newPorject = {
            title: titleRef.current.value,
            description: descriptionRef.current.value,
            dueDate: dueDateRef.current.value,
        }
        const isValid = value => !value || value.trim() === '';

        if (
            isValid(newPorject.title) ||
            isValid(newPorject.description) ||
            isValid(newPorject.dueDate)
        ) {
            setShowModal(true);
            return;
        }
        onSave(newPorject);
    }



    return (

        <>
            <Modal open={showModal} onClose={() => setShowModal(false)} />
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li><button
                        onClick={handleDelete}
                        className="text-stone-800 hover:text-stone-950">
                        Cancel
                    </button>
                    </li>
                    <li><button
                        onClick={handleSave}
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">
                        Save
                    </button>
                    </li>
                </menu>
                <div>
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Title
                    </label>
                    <input ref={titleRef} className="w-full mt-2 mb-4 px-4 py-2 border border-stone-300 rounded-md" type="text" placeholder="Project Title" />
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Description
                    </label>
                    <textarea ref={descriptionRef} className="w-full mt-2 mb-4 px-4 py-2 border border-stone-300 rounded-md" type="text" placeholder="Project Description" />
                    <label className="text-sm font-bold uppercase text-stone-500">
                        Due Date
                    </label>
                    <input ref={dueDateRef} className="w-full mt-2 mb-4 px-4 py-2 border border-stone-300 rounded-md" type="date" />
                </div>
            </div>
        </>
    )
}