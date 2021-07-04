import React from 'react';
import Description from '../Description/Description';
import Stats from '../Stats/Stats';
import { ProfileContainer } from './Profile.styles';

function Profile() {
  return (
    <ProfileContainer>
      <Description />
      <Stats />
    </ProfileContainer>
  );
}

export default Profile;
