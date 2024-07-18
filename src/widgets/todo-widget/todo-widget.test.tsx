import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoWidget from '.';

const mockTasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
];

test('renders tasks', () => {
    render(
        <TodoWidget
            tasks={mockTasks}
            addTask={jest.fn()}
            toggleTask={jest.fn()}
            deleteTask={jest.fn()}
        />
    );

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
});

test('calls addTask when a new task is added', () => {
    const addTask = jest.fn();
    render(
        <TodoWidget
            tasks={mockTasks}
            addTask={addTask}
            toggleTask={jest.fn()}
            deleteTask={jest.fn()}
        />
    );

    const input = screen.getByPlaceholderText('Enter new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(addTask).toHaveBeenCalledWith('New Task');
});

test('calls toggleTask when a task is toggled', () => {
    const toggleTask = jest.fn();
    render(
        <TodoWidget
            tasks={mockTasks}
            addTask={jest.fn()}
            toggleTask={toggleTask}
            deleteTask={jest.fn()}
        />
    );

    const checkbox = screen.getAllByRole('checkbox')[0];
    fireEvent.click(checkbox);

    expect(toggleTask).toHaveBeenCalledWith(1);
});

test('calls deleteTask when a task is deleted', () => {
    const deleteTask = jest.fn();
    render(
        <TodoWidget
            tasks={mockTasks}
            addTask={jest.fn()}
            toggleTask={jest.fn()}
            deleteTask={deleteTask}
        />
    );

    const deleteButton = screen.getAllByText('Delete')[0];
    fireEvent.click(deleteButton);

    expect(deleteTask).toHaveBeenCalledWith(1);
});
