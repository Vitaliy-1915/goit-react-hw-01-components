import React from 'react';
import TransactionHistorys from '../TransactionHistorys/TransactionHistorys';
import transactions from '../../data/transactions.json';
import { TransactionHistoryContainer } from './TransactionHistory.styles';

function TransactionHistory() {
  return (
    <TransactionHistoryContainer>
      <TransactionHistorys items={transactions} />
    </TransactionHistoryContainer>
  );
}

export default TransactionHistory;
