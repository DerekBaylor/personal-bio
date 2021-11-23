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
      if (authed) {
        const userInfo = {
          uid: authed.uid,
          name: authed.displayName,
        };
        setUser(userInfo);
        if (userInfo.uid === firebaseConfig.adminUid) {
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
      <Navigation admin={admin} />
      <Routes admin={admin} />
      <BottomNavigation admin={admin} />
    </div>
  );
}

export default Initialize;
