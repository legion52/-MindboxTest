import React from 'react';
import { Task } from '../../types/taskTypes';
import TodoItem from '../todo-item';
import style from './todo-list.module.css'

interface TodoListProps {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <div className={style.listContainer}>
        {tasks?.length ? tasks.map(task => (
          <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
        )) : <span className={style.mess}>Нет задач</span>}
        <div></div>
    </div>


  );
};

export default TodoList;
