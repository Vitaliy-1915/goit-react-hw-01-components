import React from 'react';
import {
  FriendLists,
  FriendItems,
  FriendItemsStatus,
  FriendItemsAvatar,
  FriendItemsName,
} from './FriendList.styles';

function FriendList({ friends }) {
  return (
    <FriendLists>
      {friends.map(friend => (
        <FriendItems key={friend.id}>
          <FriendItemsStatus>{friend.isOnline}</FriendItemsStatus>
          <FriendItemsAvatar
            src={friend.avatar}
            alt={friend.avatar}
            width="48"
          />
          <FriendItemsName>{friend.name}</FriendItemsName>
        </FriendItems>
      ))}
    </FriendLists>
  );
}

export default FriendList;
