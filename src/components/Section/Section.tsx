import classNames from 'classnames';
import type React from 'react';
import type { SectionProps } from './Section.types';
import './Section.css';

export const Section: React.FC<SectionProps> = ({
  title,
  intro,
  variants = [],
  children,
  className,
  ...props
}) => {
  const Component = 'div';
  const variantClasses = classNames(variants.map((variant: string) => `c-section--${variant}`));

  return (
    <Component
      {...props}
      className={classNames('c-section', variantClasses, className)}
    >
      <div className="c-section__inner l-container">
        {title && (
          <div className="c-section__header">
            <h2 className="c-section__title">{title}</h2>
          </div>
        )}
        {intro && <div className="c-section__intro l-flow">{intro}</div>}
        <div className="c-section__body l-flow">{children}</div>
      </div>
    </Component>
  );
};

export default Section;
