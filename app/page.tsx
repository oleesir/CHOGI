'use client';

import AnimateLayout from '@/app/AnimateLayout';
import IntroWords from '@/components/introWords';
import WelcomeSection from '@/components/welcomeSection';
import ConnectSection from '@/components/connectSection';
import YearSection from '@/components/yearSection';
import TiltCardView from '@/components/tiltCardView';
import MonthSection from '@/components/monthSection';
import WatchOnlineSection from '@/components/watchOnlineSection';
import UpComingEventSection from '@/components/upcomingEventSection';

export default function Home() {
  return (
    <AnimateLayout>
      <header className='relative  h-screen flex flex-col overflow-hidden bg-black'>
        <video
          autoPlay
          loop
          muted
          className='absolute z-10 w-auto min-w-full min-h-full max-w-none top-0 object-cover opacity-25'
        >
          <source
            src='https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4'
            type='video/mp4'
          />
          Your browser does not support the video tag.
        </video>
        <IntroWords />
      </header>
      <WelcomeSection />
      <YearSection />
      <TiltCardView />
      <MonthSection />
      <WatchOnlineSection />
      <UpComingEventSection />
    </AnimateLayout>
  );
}
