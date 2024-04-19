// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import dataTst from '../../../data/data.json';
import TodosList from './TodosList';

describe('CardsList component', () => {
  it('Render List', () => {
    render(<TodosList todos={dataTst} />);
    expect(screen.getByTestId('todos-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('todo-item')).toHaveLength(3);
  });
});
