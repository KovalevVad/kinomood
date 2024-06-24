import clsx from 'clsx';
import type { ElementType, ReactNode } from 'react';

import './index.css'

interface TitleProps {
  classNameContainer?: string;
  children: ReactNode;
  href?: string;
  size?: 'small' | 'medium' | 'large';
  as?: ElementType;
}

const DEFAULT_ELEMENT: ElementType = 'h1';

export const Title = ({
  children,
  classNameContainer,
  size,
  href,
  as: Component = DEFAULT_ELEMENT
}: TitleProps ) => {

  const combinedClassName = clsx(
    'title',
    size && `title-${size}`,
    classNameContainer
  );

  return (
    <Component className={combinedClassName} href={href}>
      {children}
    </Component>
  )
}