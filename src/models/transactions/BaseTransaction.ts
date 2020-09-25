import { cardTransactionTypes } from "./card-transactions/BaseCardTransaction";

export const transactionTypes = [...cardTransactionTypes] as const;

export type TransactionType = typeof transactionTypes[number];

export default interface BaseTransaction<T extends TransactionType> {
  readonly type: T;
  readonly timeStamp: number;
}
