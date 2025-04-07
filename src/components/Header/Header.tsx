import classNames from 'classnames';
import type React from 'react';
import { Button } from '../Button';
import type { HeaderProps } from './Header.types';
import './Header.css';

// Import SVG components
import NorthernKingsLogo from '../../assets/images/nk-logo-vertical.svg?react';
import GtLogo from '../../assets/images/nkgt-2025-logo.svg?react';

export const Header: React.FC<HeaderProps> = ({ compact }) => {
  return (
    <header className={classNames('c-header', { 'c-header--compact': compact })}>
      <div className="c-header__presents">
        <span className="c-header__presents-label">The</span>
        <a href="https://thenorthernkings.com/">
          <NorthernKingsLogo className="c-header__presents-logo" />
        </a>
        <span className="c-header__presents-label">Present</span>
      </div>
      <div className="c-header__main">
        {compact ? (
          <div className="c-header__logo c-header__logo--compact">
            <a href="/">
              <GtLogo className="c-header__logo__image" />
            </a>
          </div>
        ) : (
          <>
            <div className="c-header__logo">
              <GtLogo className="c-header__logo__image" />
            </div>
            <p className="c-header__date">
              Ossett, West Yorkshire.{' '}
              <span>
                June 21<sup>st</sup> and 22<sup>nd</sup>
              </span>
            </p>
            {/* <p className="c-header__strapline u-text-uppercase">Sorry, the event has now sold out</p> */}
          </>
        )}
      </div>
      <div className="c-header__book-now">
        <Button
          className="c-header__book-now__action"
          href="/register"
          variants={['sm', 'lg:lg', 'decorative', 'ghost', 'invert']}
        >
          Register Now
        </Button>
        {/* <Button disabled variants={['sm', 'lg:lg', 'decorative', 'ghost', 'invert']}>
          Sold Out
        </Button> */}
      </div>
    </header>
  );
};

export default Header;
