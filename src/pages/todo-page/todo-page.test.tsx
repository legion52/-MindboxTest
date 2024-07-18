import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from './index';

test('adds a new task', () => {
    render(<TodoPage />);

    const input = screen.getByPlaceholderText('Enter new task');
    const addButton = screen.getByText('Add');

    fireEvent.change(input, { target: { value: 'New Task' } });
    fireEvent.click(addButton);

    expect(screen.getByText('New Task')).toBeInTheDocument();
});

test('toggles task completion', () => {
    render(<TodoPage />);

    const taskText = screen.getByText('Тестовое задание');
    const checkbox = taskText.previousElementSibling as HTMLInputElement;
    fireEvent.click(checkbox);

    expect(taskText).toHaveClass('activeTodoText');
});

test('filters tasks', () => {
    render(<TodoPage />);

    const activeTab = screen.getByText('Active');
    fireEvent.click(activeTab);

    expect(screen.queryByText('Прекрасный код')).not.toBeInTheDocument();
    expect(screen.queryByText('Покрытие тестами')).toBeInTheDocument();

    const completedTab = screen.getByText('Completed');
    fireEvent.click(completedTab);

    expect(screen.queryByText('Прекрасный код')).toBeInTheDocument();
    expect(screen.queryByText('Покрытие тестами')).not.toBeInTheDocument();
});
