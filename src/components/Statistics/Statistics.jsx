import React from 'react';
import StatisticsTitle from '../StatisticsTitle/StatisticsTitle';
import StatisticsList from '../StatisticsList/StatisticsList';
import statisticalData from '../../data/statistical-data.json';
import { StatisticsContainer } from './Statistics.styles';

function Statistics() {
  return (
    <StatisticsContainer>
      <StatisticsTitle title="Upload stats" />
      <StatisticsList stats={statisticalData} />
    </StatisticsContainer>
  );
}

export default Statistics;
