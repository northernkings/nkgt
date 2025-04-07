import type React from 'react';
import { Section } from '../../components/Section';

import './HomePageAccommodation.css';

// Import SVG components
import LogoHolidayInn from '../../assets/images/logo-holiday-inn.svg?react';
import LogoMews from '../../assets/images/logo-mews.svg?react';
import LogoRamada from '../../assets/images/logo-ramada.svg?react';

export const HomePageAccommodation: React.FC = () => {
  const intro = (
    <>
      <p>
        Ossett is a little market town within the City of Wakefield, West Yorkshire. There are
        multiple boutique hotels within walking distance but also more standard hotels only a three
        to four minute drive from the venue.
      </p>
      <p>Below are links to a few suggestions:</p>
    </>
  );

  return (
    <Section
      title="Accommodation"
      variants={['spacious', 'black', 'center:md']}
      intro={intro}
    >
      <ul className="c-accommodation__list u-list-logos">
        <li>
          <a href="https://www.ihg.com/holidayinn/hotels/gb/en/find-hotels/">
            <LogoHolidayInn className="c-accommodation__logo c-accommodation__logo--holiday-inn" />
            <span className="u-sr-only">Holiday Inn</span>
          </a>
        </li>
        <li>
          <a href="https://www.wyndhamhotels.com/en-uk/ramada/yorkshire-united-kingdom/ramada-wakefield">
            <LogoRamada className="c-accommodation__logo c-accommodation__logo--ramada" />
            <span className="u-sr-only">Ramada</span>
          </a>
        </li>
        <li>
          <a href="https://mews-hotel.co.uk/">
            <LogoMews className="c-accommodation__logo c-accommodation__logo--mews" />
            <span className="u-sr-only">The Mews Hotel</span>
          </a>
        </li>
      </ul>
    </Section>
  );
};

export default HomePageAccommodation;
