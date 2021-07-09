import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  width: 500px;
  font-weight: bold;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
`;

export const TransactionHistoryTableThead = styled.thead`
  background: #83ced3;
`;

export const TransactionHistoryTableTheadTr = styled.tr``;

export const TransactionHistoryTableTheadTrTh = styled.th`
  height: 50px;
  text-transform: uppercase;
  color: gray;
`;

export const TransactionHistoryTableTbody = styled.tbody``;

export const TransactionHistoryTableTbodyTr = styled.tr`
  :nth-of-type(even) {
    background: #e6e3e3;
  }
`;

export const TransactionHistoryTableTbodyTrTd = styled.td`
  padding: 10px 15px;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  color: gray;
  text-transform: capitalize;
`;
