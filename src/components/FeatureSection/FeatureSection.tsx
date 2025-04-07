import classNames from 'classnames';
import type React from 'react';
import type { FeatureSectionProps } from './FeatureSection.types';
import './FeatureSection.css';

export const FeatureSection: React.FC<FeatureSectionProps> = ({
  title,
  variants = [],
  media,
  children,
  className,
  ...props
}) => {
  const Component = 'div';
  const variantClasses = classNames(
    variants.map((variant: string) => `c-feature-section--${variant}`),
  );

  return (
    <Component
      {...props}
      className={classNames('c-feature-section', variantClasses, className)}
    >
      <div className="c-feature-section__inner l-container">
        <div className="c-feature-section__content">
          {title && (
            <div className="c-feature-section__header">
              <h2 className="c-feature-section__title">{title}</h2>
            </div>
          )}
          <div className="c-feature-section__body l-flow-slim">{children}</div>
        </div>
        {media && (
          <div className="c-feature-section__media">
            <div className="c-feature-section__media__inner">{media}</div>
          </div>
        )}
      </div>
    </Component>
  );
};

export default FeatureSection;
