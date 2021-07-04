import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import { WrapperContainer } from './Wrapper.styles';

function Wrapper() {
  return (
    <WrapperContainer>
      <Profile />
      <Statistics />
    </WrapperContainer>
  );
}

export default Wrapper;
