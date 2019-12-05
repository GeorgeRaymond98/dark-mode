import { useLocalStorage } from "./useLocalStorage";
import { useEffect } from "react";

export const useDarkMode = () => {
    const [someValue, setSomeValue] = useLocalStorage('key', false);

    useEffect(() => {
        const body = document.querySelector("body");
        if(someValue === true) {
            body.classList.add("dark-mode")
        } else {
            body.classList.remove("dark-mode");
        }
    },[setSomeValue])
    return[someValue,setSomeValue]
}