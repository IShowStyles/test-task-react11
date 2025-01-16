import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTransactionStore } from '../../store/transaction-store.ts'
import { getDayOfWeek } from '../../utils/isDayCurrentWeek.ts'
import { Transaction } from '../../types'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TransactionPage = () => {
  const [tx, setTx] = useState<Transaction>({
    id: 1,
    type: 'Payment',
    amount: 1,
    name: '',
    description: '- / -',
    date: getDayOfWeek(new Date('2025-01-11')),
    isPending: true,
    authorizedUser: '- / -',
    source: '- / -',
    methodUsed: '- / -',
    percentage: '1%',
    iconName: 'bank',
  })
  const { id } = useParams()

  const nav = useNavigate()

  if (!id) {
    nav('/')
  }

  const { transactions } = useTransactionStore()


  useEffect(() => {
    const transaction = transactions.find((elem) => elem.id === Number(id))
    if (!transaction) {
      nav('/')
    }
    if (transaction) {
      setTx(transaction)
    }
  }, [transactions])

  return (
    <>
      <div className="blue-chevron">
        <FontAwesomeIcon icon={faChevronLeft} size={'2x'} onClick={() => nav('/')} />
      </div>
      <div className={'transaction'}>
        <div className={'container'}>
          <div className={'transaction-top'}>
            <h1 className="text-large">
              $ {tx.amount}
            </h1>
            <p className={'text-medium'}>
              {tx.authorizedUser ?? 'Payment'}
            </p>
            <p className={'text-medium'}>
              {tx.date}
            </p>
          </div>
          <div className={'transaction-one__info'}>
            {!tx.isPending ? (
              <p className={'text-large transaction-text'}>
                Status: Approved
              </p>
            ) : (
              <p className={'text-large-semi transaction-text'}>
                Status: Pending
              </p>
            )}
            <p className={'text-medium-bold transaction-text'}>
              {tx.description}
            </p>
            <p className={'text-medium-bold transaction-text'}>
              {tx.authorizedUser ? `from ${tx.authorizedUser}` : ' '}
            </p>     <p className={'text-medium-bold transaction-text'}>
            Method {tx.methodUsed ?? '- / -'}
          </p>
            <div className="transaction-one__total">
              <span className={'text-large'}>Total</span>
              <div className="text-large">
                {tx.amount}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionPage
