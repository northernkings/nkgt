import classNames from 'classnames';
import React from 'react';
import type { TitleBannerProps } from './TitleBanner.types';
import './TitleBanner.css';

// Import SVG component
import SeparatorSvg from '../../assets/images/separator.svg?react';

export const TitleBanner: React.FC<TitleBannerProps> = ({ title, variants = [], as }) => {
  const Component = as || 'h1';
  const variantClasses = classNames(
    variants.map((variant: string) => `c-title-banner--${variant}`),
  );

  return (
    <div className={classNames('c-title-banner', variantClasses)}>
      {React.createElement(
        Component,
        { className: 'c-title-banner__title u-text-headline u-text-decorative' },
        title,
      )}
      <div className="c-title-banner__separator">
        <SeparatorSvg />
      </div>
    </div>
  );
};

export default TitleBanner;
