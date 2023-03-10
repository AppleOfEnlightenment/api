import type BigNumber from 'bignumber.js';

import type TransactionType from '../constants/TransactionType';
import type Coin from './Coin';
import type SpendBundle from './SpendBundle';

type Transaction = {
  confirmedAtHeight: number;
  createdAtTime: number;
  toAddress: string;
  toPuzzleHash?: string;
  amount: number | BigNumber;
  sent: number | BigNumber;
  feeAmount: number | BigNumber;
  incoming: boolean;
  confirmed: boolean;
  spendBundle?: SpendBundle;
  additions: Coin[];
  removals: Coin[];
  walletId: number;
  tradeId?: number;
  name?: string;
  memos?: Record<string, string>;
  sentTo?: string[];
  type: TransactionType;
};

export default Transaction;
