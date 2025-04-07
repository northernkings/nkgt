import type { ElementType, ReactNode } from 'react';

export interface EditorialSectionProps {
  title?: string;
  titleAs?: ElementType;
  variants?: string[];
  media?: ReactNode;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}
