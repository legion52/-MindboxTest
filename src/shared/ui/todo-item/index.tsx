import React from 'react';
import { Task } from '../../types/taskTypes';
import style from './todo-item.module.css'

interface TodoItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, toggleTask, deleteTask }) => {
  return (
    <div className={`${style.item} ${task.completed ? style.activeItem : ''}`}>
      <label className={style.customCheckbox}>
        <input type="checkbox" checked={task.completed} onChange={() => toggleTask(task.id)} />
        <span></span>
      </label>
      <div
        onClick={() => toggleTask(task.id)} className={`${style.todoText} ${task.completed ? style.activeTodoText : ''}`}>
        {task.text}
      </div>
      <button className={style.deleteButton} onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
