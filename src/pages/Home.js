import React from 'react';
import MainVisual from '../components/MainVisual';
import News from '../components/News';
import Topics from '../components/Topics';
import Diary from '../components/Diary';
import Interview from '../components/Interview';

function Home() {
  return (
    <>
      <MainVisual />
      <News />
      <Topics />
      <Diary />
      <Interview />
    </>
  );
}

export default Home; 