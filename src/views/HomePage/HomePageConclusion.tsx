import type React from 'react';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

export const HomePageConclusion: React.FC = () => {
  const intro = (
    <>
      <p className="u-text-headline u-color-black">
        <span className="u-text-decorative">Are you ready for battle</span>?
      </p>
      <Button
        href="/register"
        variants={['lg:lg', 'decorative', 'invert']}
      >
        Register Now
      </Button>
      {/* <Button disabled variants={['lg:lg', 'decorative', 'invert']}>Sold Out</Button> */}
    </>
  );

  return (
    <Section
      variants={['center']}
      intro={intro}
    />
  );
};

export default HomePageConclusion;
