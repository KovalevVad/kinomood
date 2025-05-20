import clsx from 'clsx';

import type { ReactNode } from 'react';

import './index.css';

interface buttonProps {
  classNameContainer?: string;
  children: ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<buttonProps> = ({
  classNameContainer,
  children,
  onClick, 
}) => {
  const combinedClassName = clsx('button', classNameContainer);

  return (
    <button type="button" className={combinedClassName} onClick={onClick}>
      {children}
    </button>
  );
};
