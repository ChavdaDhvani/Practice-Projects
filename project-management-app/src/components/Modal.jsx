export default function Modal({ open, onClose }) {

  if (!open) return null;

  return (
    <>
      <dialog open className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        <h2 className="mb-8 font-bold md:text-xl text-stone-800">
          All fields are required!
        </h2>
        <form method="dialog">
          <button onClick={onClose}>Close</button>
        </form>
      </dialog>
    </>
  )
}