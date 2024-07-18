import React, { useState } from 'react';
import { Task } from '../shared/types/taskTypes';
import TodoInput from '../shared/ui/todo-input';
import TodoList from '../shared/ui/todo-list';
import TodoPage from '../pages/todo-page';

const App: React.FC = () => {


  return (
    <div>
      <TodoPage />
    </div>
  );
};

export default App;
