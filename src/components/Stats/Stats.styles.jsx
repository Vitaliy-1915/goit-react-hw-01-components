import styled from '@emotion/styled';

export const StatsList = styled.ul`
  display: flex;
  list-style: none;
  width: 300px;
  height: 87px;
  padding: 0;
  margin: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 86px;
  :first-of-type {
    border-bottom-left-radius: 5px;
  }
  :last-child {
    border-bottom-right-radius: 5px;
  }
  border: solid 1px;
  border-color: #000;
  background-color: #dddada;
`;

export const StatsItemSpanLabel = styled.span``;

export const StatsItemSpanQuantity = styled.span`
  font-weight: bold;
`;
