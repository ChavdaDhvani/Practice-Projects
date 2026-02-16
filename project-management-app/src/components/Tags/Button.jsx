export default function Button({children, handlesubmit, ...props}){
    return (
        <button 
            {...props}
            onClick={handlesubmit}
            className="px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">
                {children}
        </button>
    )
}