import React from 'react';
import { DescriptionContainer } from './Description.styles';
import user from '../../data/user.json';

function Description() {
  const { name, tag, location, avatar } = user;
  return (
    <DescriptionContainer>
      <img src={avatar} alt="Аватар пользователя" />
      <p>{name}</p>
      <p>{tag}</p>
      <p>{location}</p>
    </DescriptionContainer>
  );
}

export default Description;
