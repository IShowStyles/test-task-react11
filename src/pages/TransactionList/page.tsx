import { TransactionInfo } from './info/transaction-info.tsx'
import TransactionList from './list/transaction-list.tsx'
import { useTransactionStore } from '../../store/transaction-store.ts'
import { useEffect } from 'react'

const TransactionPage = () => {

  const {
    cardBalance,
    availableBalance,
    dailyPoints,
    transactions,
    initStore,
  } = useTransactionStore()

  useEffect(initStore, [])


  return (
    <div className={'container'}>
      <TransactionInfo dailyPoints={dailyPoints} cardBal={cardBalance} availableBal={availableBalance} />
      <TransactionList transactions={transactions} />
    </div>
  )
}

export default TransactionPage;
