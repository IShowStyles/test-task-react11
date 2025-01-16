import { FC } from 'react'
import { Transaction } from '../../../types'
import { getTransactionIcon } from '../../../utils/getTransactionsIcon.ts'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


interface TransactionContainerProps {
  transactions: Transaction[]
}


export const TransactionContainer: FC<TransactionContainerProps> = ({ transactions = [] }) => {

  if (!transactions) {
    return <div className={'empty-transaction'}>
      <p className={'text-large'}>
        Empty transactions
      </p>
    </div>
  }


  return (
    <ul className={'transaction-container'}>
      {transactions.map((elem, idx) => <TransactionItem key={idx}  {...elem} />)}
    </ul>
  )
}


const TransactionItem: FC<Transaction> = ({
                                            type,
                                            amount,
                                            name,
                                            description,
                                            date,
                                            isPending,
                                            authorizedUser,
                                            percentage,
                                            iconName,
                                            id,
                                          }) => (
  <li>
    <Link to={`/transaction/${id}`}>
      <div className="transaction-item">
        <div className={'transaction-image'}>
          <FontAwesomeIcon icon={getTransactionIcon(iconName)} size={'2xl'} />
        </div>
        <div className="transaction-item__header">
          <span className="transaction-item__type text-large">{type}</span>
          <p className="transaction-item__status">
            {isPending && <span className="transaction-item__status">Pending - </span>} {name}
          </p>
          <div>
            {type === 'Credit' ? <div>
              {authorizedUser && <span className="transaction-item__user">{authorizedUser} - </span>}
              <span className="transaction-item__date">
                {date}
            </span>
            </div> : (
              <div>
                <div>
                  {description}
                </div>
                <div className="transaction-item__date text-sm-medium">
                  {date}
                </div>
              </div>
            )}
          </div>

          {/*<div className="transaction-item__description">{description}</div>*/}
        </div>
        <div className="transaction-item__details">
          {/*<span className="transaction-item__type">{type}</span>*/}
          <div className="transaction-item__amount">
            <span className="transaction-item__amount-text text-large">{type === 'Payment' && '+'} {amount}$</span>
            {percentage && type === 'Payment' &&
              <span className="transaction-item__percentage text-small">{percentage}</span>}

          </div>
          <span className={'chevron'}>
          <FontAwesomeIcon icon={faChevronRight} />
        </span>
        </div>
      </div>
    </Link>
  </li>
)


//{
//     id: 1,
//     type: 'Payment',
//     amount: 200,
//     name: 'Top-up',
//     description: 'Пополнение с карты Сбербанк',
//     date: 'Понедельник',
//     isPending: true,
//     source: 'Sberbank Card',
//     methodUsed: 'Linked Card',
//     percentage: '1%',
//     iconName: 'bank',
//   },
