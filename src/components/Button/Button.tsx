import classNames from 'classnames';
import type { ButtonProps } from './Button.types';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
  type,
  href,
  variants = [],
  children,
  className,
  ...props
}) => {
  const Component = href ? 'a' : 'button';
  const variantClasses = classNames(variants.map((variant: string) => `c-button--${variant}`));

  return (
    <Component
      {...props}
      className={classNames('c-button', variantClasses, className)}
      type={!href ? type : undefined}
      href={href}
    >
      {children}
    </Component>
  );
};
export default Button;
