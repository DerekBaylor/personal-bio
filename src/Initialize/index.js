import React from 'react';
import BottomNavigation from '../components/BottomNavigation';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  return (
    <div>
      <Navigation />
      <Routes />
      <BottomNavigation />
    </div>
  );
}

export default Initialize;
