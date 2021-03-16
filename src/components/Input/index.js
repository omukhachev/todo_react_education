import { useState } from "react";
import './style.css'

const Input = ({ addItem }) => {
    const [value, setValue] = useState('');
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            if (value.replace(/\s+/g, '').length !== 0) {
                addItem(value);
                setValue('');
            }
        }
    }
    return (
        <input
            id="inputKey"
            value={value}
            onKeyDown={onKeyDown}
            className="task-input"
            placeholder="Enter your task name here"
            onChange={(e) => setValue(e.target.value)}
        />
    )
}

export default Input