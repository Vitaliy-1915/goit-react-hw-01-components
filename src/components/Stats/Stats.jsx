import React from 'react';
import user from '../../data/user.json';
import {
  StatsList,
  StatsItem,
  StatsItemSpanLabel,
  StatsItemSpanQuantity,
} from './Stats.styles';

function Stats() {
  const { followers, views, likes } = user.stats;
  return (
    <StatsList>
      <StatsItem>
        <StatsItemSpanLabel>Followers</StatsItemSpanLabel>
        <StatsItemSpanQuantity>{followers}</StatsItemSpanQuantity>
      </StatsItem>
      <StatsItem>
        <StatsItemSpanLabel>Views</StatsItemSpanLabel>
        <StatsItemSpanQuantity>{views}</StatsItemSpanQuantity>
      </StatsItem>
      <StatsItem>
        <StatsItemSpanLabel>Likes</StatsItemSpanLabel>
        <StatsItemSpanQuantity>{likes}</StatsItemSpanQuantity>
      </StatsItem>
    </StatsList>
  );
}

export default Stats;
