import type React from 'react';
import type { FooterProps } from './Footer.types';
import './Footer.css';

// Import SVG component
import NorthernKingsLogo from '../../assets/images/nk-logo-vertical.svg?react';

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="c-footer">
      <NorthernKingsLogo className="c-footer__logo" />
      <p className="c-footer__copyright">
        <span>&copy; Copyright of The Northern Kings. </span>
        <span>All rights reserved.</span>
      </p>
    </footer>
  );
};

export default Footer;
