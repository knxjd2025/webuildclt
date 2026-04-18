import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type ContainerWidth = 'narrow' | 'default' | 'wide' | 'full';

const widthClass: Record<ContainerWidth, string> = {
  narrow: 'max-w-3xl',
  default: 'max-w-6xl',
  wide: 'max-w-7xl',
  full: 'max-w-none',
};

interface ContainerProps {
  as?: ElementType;
  width?: ContainerWidth;
  className?: string;
  children: ReactNode;
}

export function Container({
  as: Tag = 'div',
  width = 'default',
  className,
  children,
}: ContainerProps) {
  return (
    <Tag className={cn('mx-auto w-full px-4 sm:px-6', widthClass[width], className)}>
      {children}
    </Tag>
  );
}
