import clsx from 'clsx';

import type { ReactNode } from 'react';

import './index.css'

interface buttonProps {
  classNameContainer?: string;
  children: ReactNode;
 }

export const Button: React.FC<buttonProps> = ({
  classNameContainer,
  children,
}) => {

  const combinedClassName = clsx(
    'button',
    classNameContainer
  );

  return (
    <button type="button" className={combinedClassName}>
      {children}
    </button>
  )
}