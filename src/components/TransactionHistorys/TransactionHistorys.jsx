import React from 'react';
import {
  TransactionHistoryTable,
  TransactionHistoryTableThead,
  TransactionHistoryTableTheadTr,
  TransactionHistoryTableTheadTrTh,
  TransactionHistoryTableTbody,
  TransactionHistoryTableTbodyTr,
  TransactionHistoryTableTbodyTrTd,
} from './TransactionHistorys.styles';

function TransactionHistorys({ items }) {
  return (
    <TransactionHistoryTable>
      <TransactionHistoryTableThead>
        <TransactionHistoryTableTheadTr>
          <TransactionHistoryTableTheadTrTh>
            Type
          </TransactionHistoryTableTheadTrTh>
          <TransactionHistoryTableTheadTrTh>
            Amount
          </TransactionHistoryTableTheadTrTh>
          <TransactionHistoryTableTheadTrTh>
            Currency
          </TransactionHistoryTableTheadTrTh>
        </TransactionHistoryTableTheadTr>
      </TransactionHistoryTableThead>
      {items.map(item => (
        <TransactionHistoryTableTbody key={item.id}>
          <TransactionHistoryTableTbodyTr>
            <TransactionHistoryTableTbodyTrTd>
              {item.type}
            </TransactionHistoryTableTbodyTrTd>
            <TransactionHistoryTableTbodyTrTd>
              {item.amount}
            </TransactionHistoryTableTbodyTrTd>
            <TransactionHistoryTableTbodyTrTd>
              {item.currency}
            </TransactionHistoryTableTbodyTrTd>
          </TransactionHistoryTableTbodyTr>
        </TransactionHistoryTableTbody>
      ))}
    </TransactionHistoryTable>
  );
}

export default TransactionHistorys;
