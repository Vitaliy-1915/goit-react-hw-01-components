import React from 'react';
import {
  StatList,
  StatListItem,
  StatListItemLabel,
  StatListItemPercentage,
} from './StatisticsList.styles';
import '../../App.css';

function StatisticsList({ stats }) {
  return (
    <StatList>
      {stats.map(stat => (
        <StatListItem className={stat.label} key={stat.id}>
          <StatListItemLabel>{stat.label}</StatListItemLabel>
          <StatListItemPercentage>{stat.percentage} %</StatListItemPercentage>
        </StatListItem>
      ))}
    </StatList>
  );
}

export default StatisticsList;
