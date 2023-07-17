import { useEffect } from "react";
export const useOutsideClick = (ref, onClose) => {

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (ref && ref.current && !ref.current.contains(event.target)) {
                onClose();
            }
        };
        document.addEventListener("mousedown", handleOutsideClick);

        return () => {
            document.addEventListener("mousedown", handleOutsideClick);
        };
    }, [ref, onClose]);
};
