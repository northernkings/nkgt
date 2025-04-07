import classNames from 'classnames';
import type React from 'react';
import type { EditorialSectionProps } from './EditorialSection.types';
import './EditorialSection.css';

export const EditorialSection: React.FC<EditorialSectionProps> = ({
  title,
  titleAs,
  variants = [],
  media,
  children,
  className,
  ...props
}) => {
  const Component = 'div';
  const TitleComponent = titleAs || 'h2';
  const variantClasses = classNames(
    variants.map((variant: string) => `c-editorial-section--${variant}`),
  );

  return (
    <Component
      {...props}
      className={classNames('c-editorial-section', variantClasses, className)}
    >
      <div className="c-editorial-section__inner l-container">
        <div className="c-editorial-section__content">
          {title && (
            <div className="c-editorial-section__header">
              <TitleComponent className="c-editorial-section__title u-text-uppercase">
                {title}
              </TitleComponent>
            </div>
          )}
          <div className="c-editorial-section__body l-flow-slim">{children}</div>
        </div>
        {media && <div className="c-editorial-section__media">{media}</div>}
      </div>
    </Component>
  );
};

export default EditorialSection;
