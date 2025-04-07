import type { ReactNode } from 'react';

export interface FeatureSectionProps {
  title?: string;
  variants?: string[];
  media?: ReactNode;
  children?: ReactNode;
  className?: string;
  [key: string]: any;
}
