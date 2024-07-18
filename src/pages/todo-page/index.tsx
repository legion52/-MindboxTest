import React, { useState } from 'react';
import { Task } from '../../shared/types/taskTypes';
import TodoWidget from '../../widgets/todo-widget';
import Footer from '../../widgets/footer';

const TodoPage: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 322, text: 'Тестовое задание', completed: false },
    { id: 324, text: 'Прекрасный код', completed: true },
    { id: 432, text: 'Не очень прекрасный код', completed: true },
    { id: 657, text: 'Покрытие тестами', completed: false },
    { id: 617, text: 'Сохранение todos в localStorage', completed: false },
    { id: 874, text: 'Реализовать через Redux', completed: false },
  ]);

  const [selectedTab, setSelectedTab] = useState<'All' | 'Active' | 'Completed'>('All');

  const handleTabClick = (tab: 'All' | 'Active' | 'Completed') => {
    setSelectedTab(tab);
  };

  const addTask = (text: string) => {
    setTasks([...tasks, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const filteredTasks = tasks.filter(task => {
    if (selectedTab === 'All') return true;
    if (selectedTab === 'Active') return !task.completed;
    if (selectedTab === 'Completed') return task.completed;
    return true;
  }).reverse();

  return (
    <div>
      <TodoWidget
        tasks={filteredTasks}
        addTask={addTask}
        toggleTask={toggleTask}
        deleteTask={deleteTask}
      />
      <Footer
        count={tasks.filter(task => !task.completed).length}
        filter={selectedTab}
        onFilterChange={handleTabClick}
        onClearCompleted={clearCompleted}
      />
    </div>
  );
};

export default TodoPage;
