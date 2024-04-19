import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
};

const RadioGroup = ({ children }: TProps) => {
  return (
    <div data-testid="radio-group" style={{ display: 'flex' }}>
      {children}
    </div>
  );
};

export default RadioGroup;
