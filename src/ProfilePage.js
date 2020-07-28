import React, { useContext } from 'react';

import ProfileContext from './Profile.context';
import './ProfilePage.css'

const ProfilePage = () => {

  const {
    name,
    email,
    image,
  } = useContext(ProfileContext);

  return (
    <div className="profile">
      <div className="this">Name: {name}</div>
      <div className="this">Email: {email}</div>
      <div className="this"><img src={image} alt="picture" /></div>
    </div>
  );
}

export default ProfilePage;