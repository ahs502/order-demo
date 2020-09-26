import TransactionType from "./TransactionType";

export default interface BaseTransaction<T extends TransactionType> {
  readonly type: T;
  readonly timeStamp: number;
}
