import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  className: string;
};

const Group = ({ children, className }: TProps) => {
  return (
    <div data-testid="input-group" className={className}>
      {children}
    </div>
  );
};

export default Group;
