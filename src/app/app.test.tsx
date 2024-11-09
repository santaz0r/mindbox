import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { App } from '.';

describe('App component', () => {
  it('Render App', () => {
    render(<App />);
    expect(screen.getByTestId('input-group')).toBeInTheDocument();
    expect(screen.getByTestId('radio-group')).toBeInTheDocument();
    expect(screen.getByTestId('todos-list')).toBeInTheDocument();
  });

  it('Add todo', () => {
    render(<App />);
    const button = screen.getByText(/Add new todo/i);
    const textInput = screen.getByTestId('text-input');
    fireEvent.change(textInput, {
      target: { value: 'test' },
    });
    fireEvent.click(button);
    expect(textInput).toHaveTextContent('');
    expect(screen.getAllByTestId('todo-item')[3]).toHaveTextContent('test');
    expect(screen.getAllByTestId('todo-item')).toHaveLength(4);
  });

  it('Change todo status', () => {
    render(<App />);

    const todo = screen.getAllByTestId('todo-item')[1];
    const checkBtn = todo.querySelector('input') as HTMLInputElement;
    fireEvent.click(checkBtn);

    expect(checkBtn.checked).toBe(true);
  });

  it('Clear all completed todos', () => {
    render(<App />);
    const button = screen.getByText(/Clear completed/i);
    fireEvent.click(button);
    expect(screen.getAllByTestId('todo-item')).toHaveLength(2);
  });
});
