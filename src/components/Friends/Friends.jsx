import React from 'react';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import { FriendsContainer } from './Friends.styles';

function Friends() {
  return (
    <FriendsContainer>
      <FriendList friends={friends} />
    </FriendsContainer>
  );
}

export default Friends;
