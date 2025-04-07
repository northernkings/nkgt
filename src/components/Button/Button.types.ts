import type { ReactNode } from 'react';

export interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  variants?: string[];
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}
