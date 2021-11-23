import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import BottomNavigation from '../components/BottomNavigation';
import Navigation from '../components/Navigation';
import Routes from '../routes';
import firebaseConfig from '../api/apiKeys';

function Initialize() {
  const [user, setUser] = useState(null);
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      console.warn(authed.uid);
      if (authed) {
        const userInfo = {
          uid: authed.uid,
          name: authed.displayName,
        };
        setUser(userInfo);
        if (userInfo.uid === firebaseConfig.adminUid) {
          console.warn('Here we go');
          setAdmin(userInfo);
        }
      } else if (user || user === null) {
        setUser(null);
        setAdmin(null);
      }
    });
  }, []);

  return (
    <div>
      <Navigation />
      <Routes admin={admin} />
      <BottomNavigation />
    </div>
  );
}

export default Initialize;
