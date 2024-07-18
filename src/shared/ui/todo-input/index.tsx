import React, { useState } from 'react';
import Input from '../input';
import Button from '../button';
import style from './todo-input.module.css'

const TodoInput: React.FC<{ addTask: (task: string) => void }> = ({ addTask }) => {
    const [input, setInput] = useState('');

    const handleAddTask = () => {
        if (input.trim()) {
            addTask(input);
            setInput('');
        }
    };

    return (
        <div className={style.input}>
            <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter new task"
            />
            <Button onClick={handleAddTask}>Add</Button>
        </div>
    );
};

export default TodoInput;
