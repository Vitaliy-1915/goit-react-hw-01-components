import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import { WrapperContainer } from './Wrapper.styles';

function Wrapper() {
  return (
    <WrapperContainer>
      <Profile />
      <Statistics />
      <Friends />
    </WrapperContainer>
  );
}

export default Wrapper;
