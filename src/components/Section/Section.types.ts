import type { ReactNode } from 'react';

export interface SectionProps {
  title?: string;
  variants?: string[];
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}
