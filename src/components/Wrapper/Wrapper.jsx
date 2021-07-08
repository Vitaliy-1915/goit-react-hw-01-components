import React from 'react';
import Profile from '../Profile/Profile';
import Statistics from '../Statistics/Statistics';
import Friends from '../Friends/Friends';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import { WrapperContainer } from './Wrapper.styles';

function Wrapper() {
  return (
    <WrapperContainer>
      <Profile />
      <Statistics />
      <Friends />
      <TransactionHistory />
    </WrapperContainer>
  );
}

export default Wrapper;
