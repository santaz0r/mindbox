import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const RadioGroup = ({ children }: Props) => {
  return (
    <div data-testid="radio-group" style={{ display: 'flex' }}>
      {children}
    </div>
  );
};
