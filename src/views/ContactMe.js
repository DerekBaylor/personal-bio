import React, { useEffect, useState } from 'react';
import getContactInfo from '../api/data/contactData';
import ContactInfoCard from '../components/ContactInfoCard';

export default function ContactMe() {
  const [contactInfo, setContactInfo] = useState([]);

  useEffect(() => {
    getContactInfo().then(setContactInfo);
  }, []);

  return (
    <div className="contact-info-view-container">
      <h1 className="title-text">This is how you contact me.</h1>
      <div className="contact-info-card-view">
        {contactInfo.map((card) => (
          <ContactInfoCard
            key={card.uid}
            card={card}
            setCard={setContactInfo}
          />
        ))}
      </div>
    </div>
  );
}
