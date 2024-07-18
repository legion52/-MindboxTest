import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from '.';

test('calls onFilterChange when a filter is clicked', () => {
    const onFilterChange = jest.fn();
    render(
        <Footer
            count={3}
            filter='All'
            onFilterChange={onFilterChange}
            onClearCompleted={jest.fn()}
        />
    );

    const activeTab = screen.getByText('Active');
    fireEvent.click(activeTab);

    expect(onFilterChange).toHaveBeenCalledWith('Active');
});

test('calls onClearCompleted when the clear button is clicked', () => {
    const onClearCompleted = jest.fn();
    render(
        <Footer
            count={3}
            filter='All'
            onFilterChange={jest.fn()}
            onClearCompleted={onClearCompleted}
        />
    );

    const clearButton = screen.getByText('Clear completed');
    fireEvent.click(clearButton);

    expect(onClearCompleted).toHaveBeenCalled();
});
