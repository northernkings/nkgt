import type React from 'react';
import IconDownload from '../../assets/images/icon-download.svg?react';
import { Button } from '../../components/Button';
import { FeatureSection } from '../../components/FeatureSection';
import './HomePageInformation.css';

export const HomePageInformation: React.FC = () => {
  const media = (
    <img
      src="/images/feature-2023-3--900x600.webp"
      alt="Kings of War game in action"
      width="900"
      height="600"
      loading="lazy"
    />
  );

  return (
    <FeatureSection
      title="Tournament information"
      variants={['padded', 'black', 'reverse:lg']}
      media={media}
      className="c-home-page-information"
    >
      <ul>
        <li>Five game, swiss style tournament with chess clocks.</li>
        <li>60 minute games at 2300 points.</li>
        <li>
          Games will be played using Kings of War version 3.5 ("Big Red Book") and the most recent
          Rules Committee Published FAQ.
        </li>
        <li>The Northern Kings positive scoring system will be in play (see pack).</li>
        <li>
          Lists are to be submitted via email to{' '}
          <a href="mailto:northernkings.kow@gmail.com">northernkings.kow@gmail.com</a>
          by Midnight 8th June. Players who submit their list on time will receive a +5 Tournament
          Point bonus.
        </li>
        <li>
          Lists are <strong>required</strong> to be generated via the{' '}
          <a href="https://companion.manticgames.com/r">Mantic Companion</a>.
        </li>
        <li>
          Awards for the top three 'Overall' players (Battle and Hobby combined), Best General, Best
          Army, Player's Choice, Most Sporting.
        </li>
        <li>
          Lunch will be provided on both days (please advise us in advance of any dietary
          requirements).
        </li>
        <li>
          Price: <strong>&pound;60.00</strong> per registrant (via PayPal)
        </li>
      </ul>
      <p>Ensure you read the entire tournament pack before arriving for registration.</p>

      <Button
        href="/pack"
        variants={['decorative']}
      >
        View the Tournament Pack
      </Button>

      {/* <p>
        <strong>Tournament Pack to follow.</strong>
      </p> */}
    </FeatureSection>
  );
};

export default HomePageInformation;
