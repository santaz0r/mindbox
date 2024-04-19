import { ReactNode } from 'react';

type TProps = {
  children: ReactNode;
  className: string;
};

const Group = ({ children, className }: TProps) => {
  return <div className={className}>{children}</div>;
};

export default Group;
