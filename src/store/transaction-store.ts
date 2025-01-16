import { create } from 'zustand'
import { Transaction } from '../types'
import { calculateDailyPoints } from '../utils/calculateDailyPoints.ts'
import { getDayOfWeek } from '../utils/isDayCurrentWeek.ts'
import data from '../data/transactions-data.json'

interface TransactionStoreState {
  cardBalance: number;
  availableBalance: number;
  dailyPoints: string;
  transactions: Transaction[];
  initStore: () => void;
}


const getTransactions = () => {
  const tx = data.map((elem, idx) => {
    if (idx === 0) {
      return {
        ...elem,
        date: getDayOfWeek(new Date()),
      }
    }
    const date = getDayOfWeek(new Date(elem.date))
    return {
      ...elem,
      date,
    }
  })
  return tx
}

export const useTransactionStore = create<TransactionStoreState>()(
  (set) => ({
    cardBalance: 0,
    availableBalance: 1500,
    dailyPoints: '',
    transactions: getTransactions(),
    initStore: () => {
      const balance = Math.floor(Math.random() * 1500)
      const dayOfSeason = 3
      const points = calculateDailyPoints(dayOfSeason)

      set({
        cardBalance: balance,
        availableBalance: 1500 - balance,
        dailyPoints: points,
      })
    },
  }),
)
