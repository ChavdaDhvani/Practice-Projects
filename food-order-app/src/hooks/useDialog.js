import { useEffect, useRef } from "react";

export function useDialog(open){
     const dialog = useRef();

    useEffect(() => {
        if (!dialog.current) return;

        if (open) {
            dialog.current.showModal();
        } else {
            dialog.current.close();
        }
    }, [open]);

    return dialog;
}