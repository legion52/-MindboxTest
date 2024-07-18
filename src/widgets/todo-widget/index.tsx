import React from 'react';
import TodoInput from '../../shared/ui/todo-input';
import TodoList from '../../shared/ui/todo-list';
import { Task } from '../../shared/types/taskTypes';
import { AddTask, ToggleTask, DeleteTask } from '../../shared/types/taskFunctions';
import styles from './todo-widget.module.css';
import H1 from '../../shared/ui/custom-h1';

interface ITodoWidget {
    tasks: Task[];
    addTask: AddTask;
    toggleTask: ToggleTask;
    deleteTask: DeleteTask;
}

const TodoWidget: React.FC<ITodoWidget> = ({ tasks, addTask, toggleTask, deleteTask }) => {
    return (
        <div className={styles.container}>
            <H1>todos</H1>
            <TodoInput addTask={addTask} />
            <br />
            <TodoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
        </div>
    );
};

export default TodoWidget;
