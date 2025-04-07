import type React from 'react';
import type { HomePageProps } from './HomePage.types';
import './HomePage.css';
import { Separator } from '../../components/Separator';
import { TitleBanner } from '../../components/TitleBanner';
import { HomePageAccommodation } from './HomePageAccommodation';
import { HomePageConclusion } from './HomePageConclusion';
import { HomePageHobby } from './HomePageHobby';
import { HomePageInformation } from './HomePageInformation';
import { HomePageOverview } from './HomePageOverview';
import { HomePageSchedule } from './HomePageSchedule';
import { HomePageVenue } from './HomePageVenue';

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <>
      <TitleBanner title="A Kings of War tournament celebrating the very best of the hobby" />
      <HomePageOverview />
      <HomePageInformation />
      <HomePageHobby />
      <HomePageSchedule />
      <Separator />
      <HomePageVenue />
      <HomePageAccommodation />
      <Separator />
      <HomePageConclusion />
    </>
  );
};

export default HomePage;
