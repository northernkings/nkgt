import classNames from 'classnames';
import type React from 'react';
import type { SeparatorProps } from './Separator.types';
import './Separator.css';

// Import SVG component
import SeparatorSvg from '../../assets/images/separator.svg?react';

export const Separator: React.FC<SeparatorProps> = ({ compact }) => {
  return (
    <div className={classNames('c-separator', { 'c-separator--compact': compact })}>
      <SeparatorSvg />
    </div>
  );
};

export default Separator;
