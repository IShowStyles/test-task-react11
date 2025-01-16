import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

interface TransactionInfoProps {
  cardBal: number;
  availableBal: number;
  dailyPoints: number
}

export const TransactionInfo: FC<TransactionInfoProps> = ({
                                                            cardBal,
                                                            availableBal,
                                                            dailyPoints,
                                                          }) => {
  return (
    <div className={'transaction__top'}>
      <div className={'transaction-grid'}>
        <div className={'transaction-info transaction-grid__area1'}>
          <h1 className={'transaction-info__title text-medium'}>
            Card Balance
          </h1>
          <strong className={'transaction-info__text text-large'}>
            {cardBal ?? ' - / - '}
          </strong>
          <p className={'transaction-info__amount text-medium'}>
            {availableBal ? `$${availableBal} Available` : ' - / - '}
          </p>
        </div>
        <div className={'payment-due transaction-grid__area2'}>
          <p className={'payment-due__title text-large'}>
            No Payment Due
          </p>
          <p className={'payment-due__text text-medium'}>
            You`ve paid your September balance.
          </p>
          <div className={'big-check-mark transaction-circle'}>
            <FontAwesomeIcon icon={faCheck} />
          </div>
        </div>
        <div className={'daily-points transaction-grid__area3'}>
          <p className={'daily-points__title text-medium-bold'}>
            Daily Points
          </p>
          <p className={'daily-points__amount text-sm-medium'}>
            {dailyPoints}K
          </p>
        </div>
      </div>
    </div>
  )
}
