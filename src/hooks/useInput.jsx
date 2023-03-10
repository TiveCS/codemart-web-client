import { useState } from "react";

export default function useInput(defaultValue = '') {
    const [value, setValue] = useState(defaultValue);

    function onValueChangeHandler(event) {
        event.preventDefault();
        setValue(event.target.value);
    }

    return [value, onValueChangeHandler];
}