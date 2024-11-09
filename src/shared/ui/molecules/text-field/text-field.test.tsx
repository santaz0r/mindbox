// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';

import { TextField } from './text-field';

describe('SearchBar component', () => {
  it('Render List', () => {
    render(<TextField />);
    expect(screen.getByTestId('text-input')).toBeInTheDocument();
  });
  it('typing', () => {
    render(<TextField />);

    fireEvent.change(screen.getByTestId('text-input'), {
      target: { value: 'test' },
    });
    expect(screen.queryByDisplayValue(/test/)).toBeInTheDocument();
  });
});
