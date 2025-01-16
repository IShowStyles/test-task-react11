
export interface Transaction {
  id: number;
  type: 'Payment' | 'Credit';
  amount: number;
  name: string;
  description: string;
  isPending: boolean;
  authorizedUser?: string;
  date: string;
  source?: string;
  methodUsed?: string;
  percentage?: string;
  iconName?: string;
}
