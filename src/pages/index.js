import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '@/components/HeroSection';
import Clubs from '../components/Clubs';
import Event from '../components/Event';
import RecruitmentSection from '@/components/RecruitmentSection';

const Index = () => {
  return (
    <div>
      <Navbar />
      <HeroSection/>
      <Clubs />
      <Event />
      <RecruitmentSection/>
    </div>
  );
};

export default Index;
