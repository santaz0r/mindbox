// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { TodosList } from '../ui/todos-list';
import { TODOS_MOCK } from '../../../shared/mocks';

describe('CardsList component', () => {
  it('Render List', () => {
    render(<TodosList todos={TODOS_MOCK} />);
    expect(screen.getByTestId('todos-list')).toBeInTheDocument();
    expect(screen.getAllByTestId('todo-item')).toHaveLength(3);
  });
});
