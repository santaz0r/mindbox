import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
};

export const Group = ({ children, className }: Props) => {
  return (
    <div data-testid="input-group" className={className}>
      {children}
    </div>
  );
};
