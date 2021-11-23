import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import 'firebase/auth';
import BottomNavigation from '../components/BottomNavigation';
import Navigation from '../components/Navigation';
import Routes from '../routes';

function Initialize() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChange((authed) => {
      if (authed) {
        const userInfo = {
          uid: authed.userId,
          name: authed.displayName,
          isAdmin: process.env.REACT_APP_ADMIN_UID === authed.uid,
        };
        setUser(userInfo);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  });

  return (
    <div>
      <Navigation />
      <Routes />
      <BottomNavigation />
    </div>
  );
}

export default Initialize;
