import { TransactionContainer } from './transaction-container.tsx'
import { FC } from 'react'
import { Transaction } from '../../../types'

interface TransactionListProps {
  transactions: Transaction[]
}

const TransactionList: FC<TransactionListProps> = ({
                                                     transactions,
                                                   }) => {
  return (
    <div className={'transaction-list'}>
      <h2 className={'transaction-list__title text-large'}>
        Latest Transactions
      </h2>
      <TransactionContainer transactions={transactions} />
    </div>
  )
}

export default TransactionList
