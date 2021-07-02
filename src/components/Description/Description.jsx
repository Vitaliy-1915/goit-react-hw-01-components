import React from 'react';
import {
  DescriptionContainer,
  Avatar,
  Name,
  Tag,
  Location,
} from './Description.styles';
import user from '../../data/user.json';

function Description() {
  const { name, tag, location, avatar } = user;
  return (
    <DescriptionContainer>
      <Avatar src={avatar} alt="Аватар пользователя" />
      <Name>{name}</Name>
      <Tag>{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionContainer>
  );
}

export default Description;
